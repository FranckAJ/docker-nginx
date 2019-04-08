### Generate Certs:
```sh
sudo openssl req -newkey rsa:2048 -nodes -keyout nginx/certs/app-test.com.br.key -x509 -days 365 -out nginx/certs/app-test.com.br.crt
```

### Increasing Key Exchange Security
```sh
sudo openssl dhparam -out dhparam.pem 2048
```
