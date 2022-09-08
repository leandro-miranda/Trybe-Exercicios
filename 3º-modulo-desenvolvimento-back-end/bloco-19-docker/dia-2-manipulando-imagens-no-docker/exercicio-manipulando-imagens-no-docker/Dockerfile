FROM chuanwen/cowsay:latest

ENTRYPOINT ["/usr/games/cowsay"]

CMD ["#VQV FLAMENGO!!!"]

# Crie um Dockerfile utilizando a imagem chuanwen/cowsay.
# Defina um ENTRYPOINT para a execução do comando.
# Observe que o executável cowsay está no diretório /usr/games/
# Lembre-se que com ele, diferente do CMD, o comando não poderá ser sobrescrito com o docker run, porém conseguiremos passar parâmetros ao binário e exploraremos esse recurso para poder passar a mensagem.
# Utilize o CMD para definir uma mensagem padrão.
# Gere uma build e execute um container baseado em sua imagem sem passar nenhum comando.
# Execute um novo container passando sua mensagem para testar. Além da mensagem você pode utilizar a opção -l para listar outros personagens disponíveis e então executar algo como docker container run cowsay -f dragon-and-cow "VQV TRYBE", para exibir um dragão junto com a vaquinha.