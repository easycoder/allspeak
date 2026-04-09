#!/bin/bash
# Deploy AllSpeak site to allspeak.ai

# Sync dist to deploy/dist
cp dist/allspeak.js dist/allspeak-min.js deploy/dist/
cp dist/LanguagePack_*.js deploy/dist/ 2>/dev/null

# Update deploy/code with latest editor and server files
cp code/asedit.as code/asedit.json code/allspeak.as code/edit.html code/code-version deploy/code/

# Rebuild per-language starter zips
bash code/zip.sh

# Upload to server
scp -r deploy/* "allspeak@allspeak.ai:allspeak.ai/"
