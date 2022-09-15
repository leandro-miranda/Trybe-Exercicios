FROM nginx:1.21-alpine AS primeiro-estagio 
# O FROM já é nosso velho conhecido, mas agora temos um prefixo: AS;
# Considere que durante o build podemos estar em estágios diferentes, e neste caso nós acabamos de nomear o estágio atual para primeiro-estagio;
WORKDIR /site
# A palavra reservada WORKDIR indica para o Docker qual é a pasta atual de trabalho dentro da imagem;
# Ou seja, nas próximas ações deste build e também quando essa imagem for executada como um container, estaremos no caminho especificado pelo WORKDIR

COPY config.toml config.toml
COPY index.html /site/layouts/index.html
COPY _index.md /site/content/_index.md
# Aqui copiamos os três arquivos no formato de pastas que o Hugo espera que estes arquivos estejam;

# A palavra reservada RUN indica que o comando à frente deve ser executado imediatamente, durante o processo de build
RUN apk add hugo
# A primeira linha com RUN instala o ferramenta Hugo na nossa imagem Docker;
RUN hugo --minify --gc
# A segunda linha executa o comando hugo --minify --gc para gerar as páginas finais em HTML, baseados nos arquivos de templates (index.html) e conteúdos (_index.md);
RUN mv /site/public/* /usr/share/nginx/html
# A terceira linha executa o comando mv para mover as páginas resultantes do Hugo para o caminho onde o nginx espera que tenha páginas HTML para serem servidas.

ENTRYPOINT ["nginx", "-g", "daemon off;"]
# A palavra reservada ENTRYPOINT indica para o Docker qual comando deve ser executado ao iniciar o container

# Veja a seguir o mesmo exemplo de Dockerfile que utilizamos anteriormente, porém adaptado para fazer a construção em múltiplos estágios, e assim, usar imagens intermediárias:

# Primeiro Estágio
FROM alpine:3.14 AS primeiro-estagio1
WORKDIR /site

COPY config.toml config.toml
COPY index.html /site/layouts/index.html
COPY _index.md /site/content/_index.md

RUN apk add hugo
RUN hugo --minify --gc

# Segundo Estágio
FROM nginx:1.21-alpine AS segundo-estagio1
COPY --from=primeiro-estagio /site/public/ /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# Você já deve ter percebido que este Dockerfile é muito parecido com o anterior, mas existem dois detalhes importantes:
# Temos duas linhas de FROM:
# Cada linha de FROM significa o início de um novo estágio;
# Você pode considerar cada estágio como uma imagem Docker intermediária;
# A última referência de FROM no Dockerfile sempre será a imagem final.
# No segundo estágio, a linha COPY possui uma flag extra --from=primeiro-estagio:
# Esse é o segredo principal de construção de múltiplos estágios;
# O COPY possui a capacidade de copiar arquivos entre os estágios;
# A flag --from indica que devemos copiar o seguinte arquivo ou pasta de um estágio para o estágio atual;
# Neste caso acima, estamos copiando as páginas HTML resultantes do Hugo diretamente para uma imagem Docker limpa de nginx!
# No primeiro estágio, não precisamos do nginx, pois vamos apenas executar a ferramenta Hugo. Logo, a imagem base escolhida foi a alpine:3.14. Ao copiar os arquivos necessários e executar o comando, conseguimos nossas páginas HTML prontas e presentes no caminho /site/public/.
# Após isso, iniciamos um novo estágio, agora com a imagem base nginx:1.21-alpine. Nesse caso, as únicas ações foram copiar as páginas HTML prontas do estágio anterior e deixá-las no caminho que o nginx espera que estejam presentes: /usr/share/nginx/html.