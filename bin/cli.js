#!/usr/bin/env node

// 简单的CLI入口文件
const opener = require('opener');
const path = require('path');

console.log('Starting Geek Music Player...');

// 打开音乐播放器
const indexPath = path.join(__dirname, '../index.html');
opener(`file://${indexPath}`);