# 19.3 - Docker: Utilizando Containers

### Network

- [ ]  Iniciar 2 containers e verificar a rede entre eles
    - [ ]  Criação dos containers
    - **subir os 2 containers**
        
        ```bash
        docker run -itd --name container1 busybox
        docker run -itd --name container2 busybox
        docker ps -a
        
        docker network ls
        ```
        
    - **entrar nos 2 containers e pingar**
        
        ```bash
        docker exec -it container1 /bin/sh
        ping container2
        
        docker exec -it container2 /bin/sh
        ping container1
        ```
        
    - [ ]  Não foi possível pingar, pois estão em redes distintas
    - **Criar rede e conectar os containers**
        
        ```bash
        docker network create -d bridge tryber-network
        docker network ls
        docker network inspect tryber-network
        
        docker network connect tryber-network container1
        docker network inspect tryber-network
        
        docker network connect tryber-network container2
        docker network inspect tryber-network
        ```
        
    - **pingar os containers**
        
        ```bash
        docker exec -it container1 /bin/sh
        ping container2
        
        docker exec -it container2 /bin/sh
        ping container1
        ```
        
    - **criar um container já dentro da rede específica**
        
        ```bash
        docker run -itd --name container3 --network tryber-network busybox
        docker network inspect tryber-network
        
        docker exec -it container3 sh
        ping container2
        ping container1
        
        docker network disconnect tryber-network container3
        docker network inspect tryber-network
        
        docker network rm nome_rede
        ```
        

### Compose

- [ ]  Criar compose com Mysql instalado e Node
    - **dockerfile**
        
        ```bash
        FROM node
        
        WORKDIR /usr/app
        
        COPY package.json .
        
        RUN npm install
        
        COPY . .
        
        ENTRYPOINT [ "npm" ]
        
        CMD ["start"]
        ```
        
    - **docker-compose.yml - 2 serviços**
        
        ```yaml
        version: '3.1'
        services:
          api-trybe:
            build: backend/
            ports:
              - "3001:3001"
            restart: always
            environment:
              - DB_HOSTNAME=mysql
            depends_on:
              - mysql
          mysql:
            platform: linux/x86_64
            image: mysql:5.7
            ports:
              - "33063:3306"
            restart: on-failure
            command: --init-file /data/application/init.sql
            environment:
              MYSQL_ROOT_PASSWORD: root
        ```
        
    - **rodar os comandos**
        
        ```bash
        docker-compose up -d
        
        docker-compose logs <nome-serviço> -f
        
        docker network ls
        
        docker network inspect tryber-network
        
        docker-compose ps
        
        http://localhost:3001/
        ```
        

- [ ]  Alterar o script de inicialização do projeto e buildar de novo
    - **alterar o package.json**
        
        ```bash
        {
          "name": "teste",
          "version": "1.0.0",
          "description": "",
          "main": "index.js",
          "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "dev": "node index.js"
          },
          "keywords": [],
          "author": "",
          "license": "ISC",
          "dependencies": {
            "express": "^4.18.1"
          }
        }
        ```
        
    - **alterar o dockerfile**
        
        ```bash
        FROM node
        
        WORKDIR /usr/app
        
        COPY package.json .
        
        RUN npm install
        
        COPY . .
        
        ENTRYPOINT [ "npm" ]
        
        CMD ["run", "dev"]
        ```
        
    - **rodar os comandos**
        
        ```bash
        docker-compose up -d --build
        
        docker-compose up api-trybe
        
        docker-compose logs api-trybe
        ```
        
    

### Volumes

- [ ]  Vamos seguir com esse projeto de exemplo
    - **docker-compose.yml**
        
        ```bash
        version: '3.1'
        services:
          api-trybe:
            build: backend/
            ports:
              - "3001:3001"
            restart: always
            environment:
              - DB_HOSTNAME=mysql
            depends_on:
              - mysql
            volumes:
              - ./backend/:/usr/app
          mysql:
            platform: linux/x86_64
            image: mysql:5.7
            ports:
              - "33063:3306"
            restart: on-failure
            command: --init-file /data/application/init.sql
            volumes:
                - ./movies-api.sql:/data/application/init.sql
            environment:
              MYSQL_ROOT_PASSWORD: root
        ```
        
    - **comandos**
        
        ```bash
        docker-compose up -d --build
        
        docker exec -it projeto-api-trybe-1 bash
        
        echo "Volume" > volume.txt
        
        cat volume.txt
        
        exit
        
        ```
        
- [ ]  Criando um volume em um container individual
    - **comandos**
        
        ```bash
        docker run -d --name site-trybe -p 4545:80 -v "$(pwd)/backend:/usr/local/apache2/htdocs" httpd:2.4
        
        docker ps
        
        docker exec -it ID bash
        
        ls
        
        cd htdocs
        
        ls
        
        echo "teste" > teste.txt
        
        ```
        
    

### Redes

- [ ]  Vamos seguir com esse projeto de exemplo
    - **docker-compose.yml**
        
        ```bash
        version: '3.1'
        services:
          api-trybe:
            build: backend/
            ports:
              - "3001:3001"
            restart: always
            environment:
              - DB_HOSTNAME=mysql
            depends_on:
              - mysql
            volumes:
              - ./backend/:/usr/app
            networks:
              - rede-virtual-1
          mysql:
            platform: linux/x86_64
            image: mysql:5.7
            ports:
              - "33063:3306"
            restart: on-failure
            command: --init-file /data/application/init.sql
            volumes:
                - dados-banco:/data/application/init.sql
            environment:
              MYSQL_ROOT_PASSWORD: root
            networks:
              - rede-virtual-1
        volumes:
          dados-banco:
        
        networks:
          rede-virtual-1:
        ```
        
    - **comandos**
        
        ```bash
        docker-compose up -d --build
        
        docker network ls
        
        docker network inspect tryber-network
        
        ```