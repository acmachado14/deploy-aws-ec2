# Deploy para AWS com Actions

## Introdução
Este projeto tem como objetivo facilitar o processo de deploy automático, utilizando GitHub Actions para realizar deploy na AWS EC2. Com um simples push para o repositório, o processo de deploy é iniciado e gerenciado de maneira eficiente e automatizada.

## Índice
- [Introdução](#introdução)
- [Instalar Dependencias](#instalar-dependencias)

## Instalar Dependencias
Após a instalação do Docker, siga os seguintes passos na máquina AWS:
1. Instalar o Docker conforme o [link de instalação](https://docs.docker.com/engine/install/ubuntu/).
2. Configurar o GitHub Actions conforme explicado no vídeo.
3. Rodar o script de inicialização (opcional) para garantir o funcionamento após reiniciar o sistema, conforme explicado no vídeo. O script está disponível em [scripts](https://github.com/acmachado14/deploy-aws-ec2/tree/main/scripts).
4. Permitir a execução do Docker para todos os usuários com o seguinte comando:

```
sudo chmod 666 /var/run/docker.sock
sudo systemctl restart docker
```
