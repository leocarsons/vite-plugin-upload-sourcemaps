# 官方有 webpack 版本的上传插件，但是没有 vite 版，所以自己做了一个

# upload-sourcemaps

upload sourcemaps webpack plugin for apm insight web

## Install

### Install with npm:

```bash
    npm install @apm-insight-web/upload-sourcemaps-webpack-plugin
```

### Install with yarn:

```bash
    yarn add @apm-insight-web/upload-sourcemaps-webpack-plugin
```

## Usage

```javascript
const UploadSourcemapsPlugin = require("@apm-insight-web/upload-sourcemaps-webpack-plugin");

const config = {
  plugins: [
    new UploadSourcemapsPlugin({
      app_id: "xxxxxx",
      paths: ["./dir1", "./dir2"],
    }),
  ],
};
```
