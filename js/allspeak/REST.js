const AllSpeak_REST = {

	name: `AllSpeak_REST`,

	Get: {

		compile: (compiler) => {
			const lino = compiler.getLino();
			return AllSpeak_REST.Rest.compileRequest(compiler, `get`, lino);
		},

		run: (program) => {
			return AllSpeak_REST.Rest.run(program);
		}
	},

	Post: {

		compile: (compiler) => {
			const lino = compiler.getLino();
			return AllSpeak_REST.Rest.compileRequest(compiler, `post`, lino);
		},

		run: (program) => {
			return AllSpeak_REST.Rest.run(program);
		}
	},

	Rest: {

		compile: (compiler) => {
			const lino = compiler.getLino();
			const request = compiler.nextToken();
			return AllSpeak_REST.Rest.compileRequest(compiler, request, lino);
		},

		compileRequest: (compiler, request, lino) => {
			switch (request) {
			case `path`:
				const path = compiler.getNextValue();
				compiler.addCommand({
					domain: `rest`,
					keyword: `rest`,
					lino,
					request: `path`,
					path
				});
				return true;
			case `get`:
				if (compiler.nextIsSymbol(true)) {
					const targetRecord = compiler.getSymbolRecord();
					if (targetRecord.keyword === `variable`) {
						if (compiler.nextTokenIs(`from`)) {
							const url = compiler.getNextValue();
							let fixup = compiler.getPc();
							compiler.addCommand({
								domain: `rest`,
								keyword: `rest`,
								lino,
								request: `get`,
								target: targetRecord.name,
								url,
								onError: null
							});
							if (compiler.tokenIs(`or`)) {
								compiler.next();
								compiler.getCommandAt(fixup).onError = compiler.getPc() + 1;
								compiler.completeHandler();
							} 
							return true;
						}
					}
				}
				break;
			case `post`:
				let value = null;
				if (compiler.nextTokenIs(`to`)) {
					compiler.next();
				} else {
					value = compiler.getValue();
					if (compiler.tokenIs(`to`)) {
						compiler.next();
					} else {
						break;
					}
				}
				const url = compiler.getValue();
				if (!url) {
					throw new Error(command.lino, `No URL present`);
				}
				let target = null;
				const args = {};
				while (compiler.tokenIs(`with`)) {
					const argName = compiler.nextToken();
					if (compiler.nextTokenIs(`as`)) {
						const argValue = compiler.getNextValue();
						args[argName] = argValue;
					} else {
						break;
					}
				}
				if (compiler.tokenIs(`giving`)) {
					if (compiler.nextIsSymbol()) {
						const targetRecord = compiler.getSymbolRecord();
						if (targetRecord.isVHolder) {
							target = targetRecord.name;
							compiler.next();
						} else {
							throw new Error(`'${targetRecord.name}' cannot hold a value`);
						}
					}
				}
				compiler.addCommand({
					domain: `rest`,
					keyword: `rest`,
					lino,
					request: `post`,
					value,
					url,
					target,
					args,
					onError: compiler.getPc() + 2
				});
				onError = null;
				if (compiler.tokenIs(`or`)) {
					compiler.next();
					// onError = compiler.getPc() + 1;
					compiler.completeHandler();
				}
				return true;
			}
			return false;
		},

		run: (program) => {
			const command = program[program.pc];
			if (command.request == `path`) {
				AllSpeak_REST.restPath = program.getValue(command.path);
				return command.pc + 1;
			}
			const url = program.getValue(command.url);
			if (!AllSpeak_REST.restPath) {
				AllSpeak_REST.restPath = `.`;
			}
			let path = url;
			if (!url.startsWith(`http`)) {
				if (url[0] == `/`) {
					path = `${window.location.origin}${url}`;
				} else {
					path = url;
				}
			}

			// Cache-busting for GET requests (helps Android WebView)
			if (command.request === `get` && AllSpeak.noCache) {
				const separator = path.includes(`?`) ? `&` : `?`;
				path += `${separator}_ec=${Date.now()}`;
			}

			const scriptId = program.script;
			const pc = program.pc;

			const onSuccess = (content) => {
				const p = AllSpeak.scripts[scriptId];
				if (!p) return;
				const c = p[pc];
				if (c.target) {
					const targetRecord = p.getSymbolRecord(command.target);
					targetRecord.value[targetRecord.index] = {
						type: `constant`,
						numeric: false,
						content
					};
					targetRecord.used = true;
				}
				p.run(c.pc + 1);
			};

			const onFailure = (error) => {
				const p = AllSpeak.scripts[scriptId];
				if (!p) return;
				const c = p[pc];
				if (c.onError) {
					p.errorMessage = `Exception trapped: ${error}`;
					p.run(c.onError);
				} else {
					p.runtimeError(c.lino, `Error: ${error}`);
				}
			};

			switch (command.request) {
			case `get`:
				fetch(path)
					.then(response => {
						if (response.ok) {
							return response.text().then(text => onSuccess(text.trim()));
						} else {
							onFailure(`${response.status} ${response.statusText}`);
						}
					})
					.catch(err => {
						onFailure(err.message || String(err));
					});
				break;
			case `post`:
				const postValue = program.getValue(command.value);
				AllSpeak.writeToDebugConsole(`POST to ${path}`);
				const headers = {
					'Content-type': `application/json; charset=UTF-8`
				};
				for (const key of Object.keys(command.args)) {
					headers[key] = program.getValue(command.args[key]);
				}
				fetch(path, {
					method: `POST`,
					headers,
					body: postValue
				})
					.then(response => {
						if (response.ok) {
							if (command.target) {
								return response.text().then(text => onSuccess(text.trim()));
							} else {
								const p = AllSpeak.scripts[scriptId];
								if (p) p.run(p[pc].pc + 1);
							}
						} else {
							onFailure(`${response.status} ${response.statusText}`);
						}
					})
					.catch(err => {
						onFailure(err.message || String(err));
					});
				break;
			}
			return 0;
		}
	},

	getHandler: (name) => {
		switch (name) {
		case `get`:
			return AllSpeak_REST.Get;
		case `post`:
			return AllSpeak_REST.Post;
		case `rest`:
			return AllSpeak_REST.Rest;
		default:
			return null;
		}
	},

	run: (program) => {
		const command = program[program.pc];
		const handler = AllSpeak_REST.getHandler(command.keyword);
		if (!handler) {
			program.runtimeError(command.lino, `Unknown keyword '${command.keyword}' in 'rest' package`);
		}
		return handler.run(program);
	},

	value: {

		compile: () => {
			return null;
		},

		get: () => {
			return null;
		}
	},

	condition: {

		compile: () => {},

		test: () => {}
	}
};
