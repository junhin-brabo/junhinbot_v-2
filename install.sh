#!/usr/bin/bash

apt-get update
apt-get upgrade
apt-get install nodejs
apt-get install libwebp
apt-get install ffmpeg
apt-get install wget
apt-get install tesseract
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"

npm i imgbb-uploader
npm cache clean -f
npm install --dev
npm i got
npm install @adiwajshing/baileys 
npm install node-fetch 
npm install axios 
npm install cfonts 
npm install spinnies 
npm install moment-timezone 
npm install @kagchi/kag-api 
npm install fluent-ffmpeg 
npm install remove.bg 
npm install lolis.life 
npm install yt-search
npm install jsdom
npm install file-type
echo "[*] All dependencies have been installed, please run the command \"npm start\" to immediately start the script"
echo "Updates : fix Bugs"
