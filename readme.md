# nodejs 获取客户端的ip
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
* 首先请配置你的nginx(必须配置)
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
* 使用(第二参数'nginx'必须传入)
```
const ip = require('zhf.ip');
ip(req, 'nginx'); // xxx.xxx.xxx.xxx
```
# 注意1
* 如果你使用了nginx代理，但是你没有配置nginx的x-real-ip和x-forwarded-for
* 会存在ip被伪造的漏洞 - 如果我伪造x-real-ip和x-forwarded-for
# 注意2
* 如果你使用了nginx代理，但是你函数调用的时候没有传入第二参数'nginx'
* 会导致获取到的ip一直是127.0.0.1
# 注意3
* 如果你没使用nginx代理，但是你函数调用的时候传入了第二参数'nginx'
* 会存在ip被伪造的漏洞 - 如果我伪造x-real-ip和x-forwarded-for
# 其他
* 如果你没使用nginx做代理，你直接req.connection.remoteAddress就可以获取到公网ip，也没必要使用我这个东西
* 我的这个东西是为了解决服务端使用了nginx做端口转发，导致req.connection.remoteAddress获取到的ip一直是127.0.0.1而存在的
