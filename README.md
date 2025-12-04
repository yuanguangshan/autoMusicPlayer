# 🎵 Geek Music Player (极客音乐)

<p align="center">
  <img src="./icon/icon-192x192.png" alt="Logo" width="100" height="100">
</p>

<p align="center">
  一款基于原生 JavaScript 构建的轻量级、随机探索版 PWA 音乐播放器。
  <br>
  无需后端，完全依赖公开 API 实现音乐搜索、播放、歌词显示及天气推荐功能。
</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT">
  </a>
  <img src="https://img.shields.io/badge/PWA-Ready-blue" alt="PWA Ready">
  <img src="https://img.shields.io/badge/Vanilla-JS-yellow" alt="Vanilla JS">
</p>

## ✨ 特性 (Features)

- **🎧 音乐探索**：基于 iTunes Search API，支持歌手、歌曲搜索及随机关键词探索。
- **📱 PWA 支持**：支持安装到主屏幕，拥有独立的 App 体验，并在 Service Worker 的加持下具备离线缓存能力（核心文件、图片、API 缓存策略）。
- **⛈️ 看天听歌**：集成 Open-Meteo 与 GeoJS，根据你当地的天气情况智能推荐心情歌单（晴天、雨天、雷暴等）。
- **📜 动态歌词 & 百科**：
  - 自动获取歌词 (Lyrics.ovh)。
  - 自动获取歌手维基百科简介。
  - 歌词缺失时自动展示"治愈系猫咪"图片作为替补。
- **💬 趣味弹幕**：模拟实时评论，生成随机用户信息和骚话（使用 RandomUser 和 一言 API）。
- **🎨 极客 UI 设计**：
  - 玻璃拟态 (Glassmorphism) 风格。
  - 动态背景颜色提取与模糊处理。
  - 响应式网格布局，适配移动端与桌面端。
  - 丝滑的 CSS 动画交互。
- **🔗 智能跳转**：在 Apple 设备上支持唤起 Apple Music 原生应用，非 Apple 设备降级为网页跳转。

## 🛠️ 技术栈 (Tech Stack)

本项目完全使用原生技术栈构建，无任何框架依赖：

- **HTML5**: 语义化标签。
- **CSS3**: CSS Variables, Grid/Flex 布局, Backdrop-filter, Animations。
- **JavaScript (ES6+)**: Fetch API, Async/Await, Service Workers, Cache API。

## 🚀 快速开始 (Quick Start)

你可以通过 npm 安装并运行，或者直接下载源码部署。

### 方式一：作为静态资源使用

由于是纯静态项目，直接将文件放入 Nginx/Apache/Caddy 的 web 目录即可。

### 方式二：本地开发

1. 克隆项目

```bash
git clone git@github.com:yuanguangshan/autoMusicPlayer.git
cd autoMusicPlayer
```

2. 启动本地服务器 (推荐使用 http-server)

```bash
npx http-server .
```

3. 访问 http://localhost:8080

## 🔌 API 鸣谢 (Credits)

本项目依赖以下免费公开 API，感谢这些服务的提供者：

| 功能 | API 服务提供商 |
|------|----------------|
| 音乐搜索/试听 | iTunes Search API |
| 歌词获取 | Lyrics.ovh |
| 歌手百科 | Wikipedia API |
| 地理位置 | GeoJS |
| 天气数据 | Open-Meteo |
| 随机用户头像 | RandomUser.me |
| 随机语录 | Hitokoto (一言) & Kanye.rest |
| 猫咪图片 | The Cat API |

## 📂 目录结构 (Structure)

```
geek-music/
├── index.html        # 应用主入口、UI 结构与核心 JS 逻辑
├── sw.js             # Service Worker (缓存策略与离线支持)
├── manifest.json     # PWA 配置文件
├── icon/             # 图标资源目录 (需自行准备)
│   ├── favicon.ico
│   ├── icon-192x192.png
│   └── ...
└── README.md         # 说明文档
```

## ⚠️ 注意事项

- 音频预览：iTunes API 提供的音频通常为 30 秒片段，而非完整歌曲。
- 跨域问题：代码中已处理大部分 API 的跨域请求，但部分 API 可能会因网络环境不稳定导致请求失败。
- HTTPS：PWA (Service Worker) 功能必须在 localhost 或 HTTPS 环境下才能生效。

## 📄 开源协议 (License)

MIT License © 2023 yuanguangshan