
# DualRTC.io
WebRTC (Web Real-Time Communication) Open Source Project Enhancement and Integrated Device Driver and Dual Monitor Development at SAMSUNG SOFTWARE MEMBERSHIP

## Overview


Table of Contents
-----------------

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Generator](#generator)
- [Obtaining API Keys](#obtaining-api-keys)
- [Project Structure](#project-structure)
- [List of Packages](#list-of-packages)
- [Useful Tools and Resources](#useful-tools-and-resources)
- [Recommended Design Resources](#recommended-design-resources)
- [Recommended Node.js Libraries](#recommended-nodejs-libraries)
- [Recommended Client-side Libraries](#recommended-client-side-libraries)
- [Pro Tips](#pro-tips)
- [FAQ](#faq)
- [How It Works](#how-it-works-mini-guides)
- [Mongoose Cheatsheet](#mongoose-cheatsheet)
- [Deployment](#deployment)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [License](#license)

## What is WebRTC?
![alt img](https://github.com/UCIUROP2015/UCI_UROP_WEBRTC/blob/master/images/logo-webrtc.png)<br>
webRTC is a new webstandard being developed for peer-to-peer communication on the web. This means that browsers will be able to send information, without sending information through the server. Server side this will reduce load dramatically.

Currently the webRTC standard is very focused on the video & audio aspects of the project. In the future (hopefully near future!) they will begin implementing the data channel, which will allow arbitrary data to be sent peer-to-peer. For now the webRTC team is focused on stabalizing and optimizing the video and audio channels.

Unfortunately, a server (or two servers) will still be required for two reasons, The media for the page must be initially supplied, and the server, in conjunction with a [STUN server](http://en.wikipedia.org/wiki/STUN), is required to synchronize the connections.

# Support
### Device
* HOST : Windows 7 64-bit
* GUEST : ANY DEVICE

### Browser
* Chrome 25.0+ (28.0+ for best performance)
* Firefox 22.0+

# Prerequisite Technologies
### Linux
* *Node.js* - <a href="http://nodejs.org/download/">Download</a> and Install Node.js using <a href="https://github.com/creationix/nvm">nvm(Nove Version Manager)</a>.

```bash
$ sudo apt-get update
$ sudo apt-get install build-essential libssl-dev
$ curl https://raw.githubusercontent.com/creationix/nvm/v0.18.0/install.sh | bash
$ nvm install 4.2.1
$ nvm use 4.2.1
```

# Prerequisite packages

* DualRTC.io currently works with gulp.
```bash
$ npm install -g gulp
```

# Getting Started

The easiest way to get started is to clone the repository:


### Invoke node with a task manager
DualRTC supports the gulp task runner for various services which are applied on the code.
To start your application run - 
```bash
$ gulp
```

### Run your app
Alternatively, when not using `gulp` (and for production environments) you can run:
The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
$ git clone https://github.com/DualRTC-io/DualRTC.io.git myproject
$ cd myproject
$ git remote rm origin

# Install NPM dependencies
$ npm install

# Run the node app
$ node app.js
```

Then, open a browser and go to:
```bash
https://YOUR_IP_ADDRESS
```


## Example code

```

```


## Reference
* [WebRTC 1.0: Real-time Communication Between Browsers](http://www.w3.org/TR/2015/WD-webrtc-20150210/)


## License
The MIT License. Please see [the license file](LICENSE) for more information.<br>
Also managed under [SAMSUNG SOFTWARE MEMBERSHIP](http://www.secmem.org/) in Gangbuk, Seoul.
