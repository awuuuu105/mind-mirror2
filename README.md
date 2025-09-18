# 心智镜像高维认知启导项目网站部署指南

## 通过GitHub Pages部署步骤

### 1. 准备工作
- 确保已安装Node.js和npm
- 拥有GitHub账号并创建新仓库（仓库名建议为`mind-mirror`）

### 2. 本地项目设置
```bash
# 克隆仓库
git clone https://github.com/your-username/mind-mirror.git
cd mind-mirror

# 安装依赖
npm install

# 本地测试
npm run dev
```

### 3. 部署到GitHub Pages
```bash
# 安装部署工具
npm install --save-dev gh-pages

# 修改package.json中的homepage字段为你的仓库地址
# "homepage": "https://your-username.github.io/mind-mirror"

# 构建项目
npm run build

# 部署到GitHub Pages
npm run deploy
```

### 4. 在GitHub上配置
1. 打开你的GitHub仓库
2. 进入Settings > Pages
3. 在Source部分选择`gh-pages`分支
4. 点击Save，等待部署完成（通常需要1-5分钟）

### 5. 访问网站
部署完成后，你可以通过以下地址访问网站：
https://your-username.github.io/mind-mirror

## 故障排除
- 如果部署失败，检查package.json中的homepage是否正确
- 确保gh-pages依赖已正确安装
- 检查构建输出目录是否为dist/static
- 确认GitHub仓库是否有正确的访问权限