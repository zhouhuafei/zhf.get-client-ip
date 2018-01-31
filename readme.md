# nodejs 获取ip
* 安装
```
npm i --save zhf.ip
```
* 使用
```
const ip = require('zhf.ip');
ip(req); // xxx.xxx.xxx.xxx
```
# 如果你在服务器端使用了nginx进行端口转发
* 首先请配置你的nginx
```
server {
        listen 80;
        server_name www.xxx.com xxx.com;
        location / {
            proxy_pass http://127.0.0.1:8080;
            proxy_set_header x-real-ip $remote_addr;
            proxy_set_header x-forwarded-for $proxy_add_x_forwarded_for;
            proxy_set_header host $http_host;
        }
}
```
* 使用
```
const ip = require('zhf.ip');
ip(req, 'nginx'); // xxx.xxx.xxx.xxx
```

