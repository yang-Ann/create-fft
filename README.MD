# 一个简单的前端cli工具


## 使用

### 创建项目

```sh
# npm
npm create fft c projectName

# yarn
yarn create fft c projectName

# pnpm
pnpm create fft c projectName
```

### 其他操作

```sh
# 查看预设方案
npm create ls

# 根据预设配置创建项目
npm create c projectName -p presetName

# 删除预设方案
npm create del presetName
```

> 如果需要额外向`package.json`中添加一些字段可以新建`~/.fft/margePackage.json`文件, 里面的键值对会被合并到模板项目的`package.json`中
