#!/bin/bash
# Deploy AllSpeak site to allspeak.eclecity.net

scp -r deploy/* "eclecity@eclecity.net:allspeak.eclecity.net/"
