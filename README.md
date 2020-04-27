<p align="center">
  <a href="http://weishour.com/" target="blank"><img src="./public/img/logo.png" width="120" alt="weishour Logo" /></a>
</p>

<p align="center">一个进步的<a href="http://nodejs.org" target="blank"> weishour </a>框架，用于构建高效和可伸缩的服务器端应用程序，深受<a href="https://angular.io" target="blank"> Nest </a>的启发.</p>
<p align="center">

## 描述

[weishour](http://weishour.com/) 唯守服务框架.

## 安装

```bash
$ yarn install
```

## 配置

```bash
$ cp .env.example .env
```

## 运行

```bash
# 开发
$ yarn run start

# 观察模式
$ yarn run start:dev

# 产品模式
$ yarn run start:prod
```

## 测试

```bash
# 单元测试
$ npm run test

# e2e 测试
$ npm run test:e2e

# 覆盖测试
$ npm run test:cov
```

## 聊天页面

[聊天页面](http://localhost/wsChat)

<!-- ## pm2部署

```bash
$ yarn run pm2
```

## 文档

```bash
$ yarn run doc
```

## 中继器部署 (例)
wssip "www.weishour.com"
wsspt "7002"
wsav

## Nginx配置 (例)
```bash
server {
    listen       80;
    server_name  www.weishour.com;

    location / {
        proxy_pass        http://127.0.0.1:3000;
        proxy_set_header  X-Real-IP $remote_addr;
        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header  Host $http_host;
        proxy_set_header  X-Nginx-Proxy true;
        proxy_redirect    off;
    }
}
``` -->
