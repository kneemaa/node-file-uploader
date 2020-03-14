# Basic Node.js file uploader

Uses Multer and loads file directly to the server. This app does not use best practice at all.

Uploads files to `uploads` folder that gets created at the root of the directoy upon project start.

# Setup ubuntu 18.04

Install Nodejs v12.x
```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```

# Running app

> npm i && node server.js