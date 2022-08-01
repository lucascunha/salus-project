# SALUS PROJECT

O projeto salus consiste num site que permitirá pessoas de diversas localidades terem acesso a informações a respeito de DST's.

Além disso estamos construindo uma comunidade onde as pessoas poderão trocar ideias e experiências, além de descobrir locais onde podem ter atendimento para necessidades relacionadas.

Este projeto está sendo desenvolvido como entrega para o Bootcamp FullStack Developer da Faculdade Impacta.

## Tecnologias
   * HTML, CSS - Frontend. 
   * Nodejs - Backend.
   * MYSQL - Base de dados.
   * Docker - Criação dos ambientes(Server, Client, MYSQL, Node).

## Requisitos
- É necessário ter instalado os seguintes modulos:

  * Docker - vesão 19+
  * Docker-compose - versão 1.26 - guia de instalação https://docs.docker.com/compose/install/
  * npm
  * npx
  * git(opcional)

## Instalação e execução
Baixe o pacote 

1. Faça um clone desse repositório 
  `git clone https://github.com/lucascunha/salus-project.git`.
2. Entre na pasta `cd salus-project`.
3. Rode `docker-compose up` para criar/iniciar os ambientes, aguarde até que apareça os serviços em execução.
4. Pronto só é acessar o link `http://localhost:3000/` para visualizar a aplicação rodando.
5. Estou implementando a funcionalidade de criar um novo usuário para teste.


## DEBUG - Erro na criação do BD
Caso apresente erro na primeira execução, pode ser preciso criar o banco de dados manualmente.

Para isto, proceder da seguinte forma:

1. Execute o comando `docker ps -a` e copie o CONTAINER ID do mysql
2. Em seguida, inicie o container com `docker start <ID do CONTAIER>`
3. Acesse o contaier do mysql com `docker exec -it mysql bash`
4. Entre no mysql `mysql -uroot -proot`
5. Agora é só executar os comandos que estão listados no arquivo bd.sql na raiz do projeto.
6. Finalmente, rodar novamente o projeto com `docker-compose up`
