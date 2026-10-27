# Global-PNG FAQ 页面（静态版）

纯 HTML + CSS + 原生 JS，无框架、无后端。PC + 移动端（H5）同一套代码。

## 目录

```
src/                 ← 交付内容（上传这个目录里的文件）
  index.html
  css/faq.css        样式（顶部 :root 为颜色等设计变量）
  js/faq-data.zh.js  FAQ 内容（中文）+ 功能链接 FAQ_LINKS
  js/faq.js          页面功能（渲染、折叠、搜索、滚动联动、URL 直达等）
  assets/            图片等资源
docs/
  FAQ跳转映射表.md / .xlsx
  自测文档.md
  screenshots/
tools/
  convert_faq.py     从原 FAQ 页面 HTML 转换为数据文件的脚本
```

## 使用

- 本地预览：直接双击 `src/index.html`。
- 部署、内容维护、多语言说明：见 `docs/自测文档.md`。
