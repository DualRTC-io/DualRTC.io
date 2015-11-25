
# DualRTC.io
WebRTC (Web Real-Time Communication) Open Source Project Enhancement and Integrated Device Driver and Dual Monitor Development at SAMSUNG SOFTWARE MEMBERSHIP

# Table of Contents

- [What is WebRTC?](#what-is-webrtc?)
- [Project Structure](#project-structure)
- [Support](#support)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Reference](#reference)
- [License](#license)

# What is WebRTC?
![alt img](https://github.com/UCIUROP2015/UCI_UROP_WEBRTC/blob/master/images/logo-webrtc.png)<br>
webRTC is a new webstandard being developed for peer-to-peer communication on the web. This means that browsers will be able to send information, without sending information through the server. Server side this will reduce load dramatically.

Currently the webRTC standard is very focused on the video & audio aspects of the project. In the future (hopefully near future!) they will begin implementing the data channel, which will allow arbitrary data to be sent peer-to-peer. For now the webRTC team is focused on stabalizing and optimizing the video and audio channels.

Unfortunately, a server (or two servers) will still be required for two reasons, The media for the page must be initially supplied, and the server, in conjunction with a [STUN server](http://en.wikipedia.org/wiki/STUN), is required to synchronize the connections.

# Project Structure



# Support

### Device
* HOST : Windows 7 64-bit
* GUEST : ANY DEVICE

### Browser
* Chrome 25.0+ (28.0+ for best performance)
* Firefox 22.0+

# Prerequisite

### Technologies

* *Node.js* - Install [Node.js](http://nodejs.org/download/) and Manager node version using [nvm(Node Version Manager)](https://github.com/creationix/nvm").
```bash
$ sudo apt-get update
$ sudo apt-get install build-essential libssl-dev
$ curl https://raw.githubusercontent.com/creationix/nvm/v0.18.0/install.sh | bash
$ nvm install 4.2.1
$ nvm use 4.2.1
```

* *Chrome Extensions*

### packages
* *gulp* - gulp is a toolkit that will help you automate painful or time-consuming tasks in your development workflow. For web development (if that's your thing) it can help you by doing CSS preprocessing, JS transpiling, minification, live reloading, and much more.
```bash
# Install gulp globally:
$ npm install -g gulp

# Install gulp in your project devDependencies:
$ npm install --save-dev gulp
```

* *pm2* - PM2 is a production process manager for Node.js applications with a built-in load balancer. It allows you to keep applications alive forever, to reload them without downtime and to facilitate common system admin tasks.
```bash
# Install pm2 globally:
$ npm install -g pm2
```

# Getting Started
### Installation
The easiest way to get started is to clone the repository:
```bash
# Get the latest snapshot
$ git clone https://github.com/DualRTC-io/DualRTC.io.git myproject
$ cd myproject
$ git remote rm origin

# Install NPM dependencies
$ npm install
```

### Invoke node with a task manager
DualRTC supports the gulp task runner for various services which are applied on the code.
To start your application run - 
```bash
$ gulp
```

### Run node app
Alternatively, when not using `gulp` (and for production environments) you can run:
```bash
$ node app.js
```

Then, open a browser and go to:
```bash
https://YOUR_IP_ADDRESS
```

### [Option] Load balancing
When an app is started with the -i option, the cluster mode is enabled.
```bash
# Enable load-balancer and cluster features
$ pm2 start app.js -i 0

# Listing your app running processes:
$ pm2 list app.js

# Managing your processes is straightforward:
$ pm2 stop app.js
$ pm2 restart app.js
$ pm2 delete app.js
```

# Reference
* [WebRTC 1.0: Real-time Communication Between Browsers](http://www.w3.org/TR/2015/WD-webrtc-20150210/)

# License
The MIT License. Please see [the license file](LICENSE) for more information.<br>
Also managed under [SAMSUNG SOFTWARE MEMBERSHIP](http://www.secmem.org/) in Gangbuk, Seoul.
