# Global Address Form Finder

> 极简杂志感的全球地址表单演示，支持多国家本地化字段、示例、设计参考。

## 功能亮点
- 支持美国、加拿大、英国、法国、德国、意大利、西班牙、荷兰、巴西、墨西哥等多国本地化地址表单
- 字段顺序、命名、可选项、输入框排布均严格本地化
- 极简杂志感视觉，响应式设计
- 每国均有真实本地地址示例与设计参考
- 支持语言切换（如适用）

## 快速开始

1. 安装依赖
   ```bash
   npm install
   ```
2. 本地开发
   ```bash
   npm run dev
   ```
3. 构建生产包
   ```bash
   npm run build
   ```
4. 预览生产包
   ```bash
   npm run preview
   ```

## 目录结构
- `src/` 主要源码
  - `components/` 主要UI组件
  - `data/` 各国字段、示例、设计参考数据
- `index.html` 入口
- `tailwind.config.js` Tailwind CSS 配置

## 发布到 GitHub
1. 初始化仓库（如未初始化）
   ```bash
   git init
   git remote add origin <your-repo-url>
   ```
2. 推送代码
   ```bash
   git add .
   git commit -m "init: first release"
   git push -u origin main
   ```
3. 推荐在 GitHub 上设置项目描述、标签、README 封面图等

---

如需部署到 Vercel、Netlify、GitHub Pages 等平台，可参考 Vite 官方文档。 