## Sequência de comandos

Criar o script com o conteúdo do arquivo desse repositório
```
cat <<EOF > start.sh
#!/bin/bash
cd /home/ubuntu/actions-runner
./run.sh
EOF
```

Dar permissão de execução
```
chmod +x start.sh
```

Criar um novo serviço com o conteúdo do arquivo desse repositório
```
sudo tee /etc/systemd/system/start_script.service <<EOF
[Unit]
Description=Seu Script
After=network.target

[Service]
ExecStart=/home/ubuntu/start.sh
Restart=always
User=ubuntu
Group=ubuntu
Environment=PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

[Install]
WantedBy=multi-user.target
EOF
```

Abilitar e executar o serviço
```
sudo systemctl enable start_script.service
sudo systemctl start start_script.service
```
