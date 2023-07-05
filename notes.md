# Electron

1. 自动软件更新
2. 软件安装器
3. 应用分发
4. 错误上报

Electron Forge 构建发布Electron应用工具

Electron目前对ESM支持还不完备

Electron 的主进程是一个拥有着完全操作系统访问权限的 Node.js 环境。可以访问Node.js模块。

渲染进程默认跑在网页页面上，而并非 Node.js里。

预加载脚本:默认沙盒化。将 Electron 的不同类型的进程桥接在一起,增强渲染器。运行在具有 HTML DOM 和 Node.js、Electron API 的有限子集访问权限的环境中。

Electron 的主进程和渲染进程有着清楚的分工并且不可互换。可以使用 Electron 的 ipcMain 模块和 ipcRenderer 模块来进行进程间通信。 
