#!/bin/bash
# Deploy AllSpeak site to allspeak.ai

# Update deploy/code with latest editor and server files
cp code/ecedit.as code/ecedit.json code/allspeak.as code/edit.html code/code-version deploy/code/

# Rebuild per-language starter zips
bash code/zip.sh

# Upload to server
scp -r deploy/* "allspeak@allspeak.ai:allspeak.ai/"
