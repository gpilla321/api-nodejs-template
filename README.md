# Teste Gustavo Pilla

Avaliadores bom dia. Fico feliz de ter a oportunidade de participar do teste.

Utilizei a arquitetura que hoje mais domino: Repository Pattern, Service Layer para a Bussinnes Logic que foge do escopo do DDD e Interfaces.

Para as rotas e mensagem de erros, optei por utilizar um arquivo de dados na qual chamo de Resources, para serem de fatos a mensagens estáticas e rotas da aplicação. No cenário que fiz apenas mensagens de erros foram criadas, mas outras mensagens também poderiam ser alocadas ali.

Criei um MockData para simular os dados vindos do banco. Como no desafio não pedia um CRUD fiz apenas visualização dos dados.

Formato dos dados: O ideal seria ter feito um Response para cada tipo de objeto formatado para o client.
Devido a dimensão do projeto e também de não ser utilizado os outros dados para visualiação (apenas a tabela que mostra o preço da ligação), optei por não criar os Response para as demais controllers que não fossem a CallCost. 

Tests unitários na pasta __tests__

# npm install
Instala as dependências 

# npm start
Roda o projeto

# npm run tests
Roda os testes com Jest

# Requests Postman
Deixei na pasta 'PostManCollection' um arquivo chamado 'collection.json' com as requests que utilizei. 


# Obrigado pela oportunidade
Obrigado pela oportunidade novamente. Ótima semana.
