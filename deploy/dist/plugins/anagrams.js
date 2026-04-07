// eslint-disable-next-line no-unused-vars
const AllSpeak_Anagrams = {

	name: `AllSpeak_Anagrams`,

	value: {

		compile: (compiler) => {
			if (compiler.isWord(`anagrams`)) {
				if (compiler.nextIsWord(`of`)) {
					const value = compiler.getNextValue();
					return {
						domain: `anagrams`,
						type: `getAnagrams`,
						value
					};
				}
			}
			return null;
		},

		get: (program, value) => {
			switch (value.type) {
			case `getAnagrams`:
				return {
					type: `constant`,
					numeric: false,
					content: JSON.stringify(AnagramFinder.getAnagrams(program.getValue(value.value), AllSpeak_words))
				};
			}
			return null;
		}
	},

	getHandler: () => {
		return null;
	},

	condition: {

		compile: () => {}
	}
};

// eslint-disable-next-line no-unused-vars
AllSpeak.domain.anagrams = AllSpeak_Anagrams;
