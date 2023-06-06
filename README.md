# PROJETO-MOBILE-AV2

 ## Aplicativo de referências
 É um aplicativo onde visa ajudar estudantes e professores a fazer referências de um jeito mais rápido e menos trabalhoso.
 
 ## Atualizações!
 - Navegação entre telas;
 - Adicionado referência a livros;
 - Possível conexão ao Banco de Dados;
 - Melhoria na organização/estruturação do código.
 
 ### Como executá-lo:
 - Baixe e instale o node.js, abra o cmd (prompt de comando) e escreva o seguinte comando: npm install --global yarn.
 - Após a instalação do yarn, baixe o aplicativo, depois abra-o e copie o endereço da pasta client.
 - Abra o cmd novamente, escreva o seguinte comando: cd (e ao lado cole o endereço da pasta) e clique enter.
 - Quando o cmd "entrar" na pasta, digite o próximo comando: npm install. Serve para instalar as dependências necessárias para rodar o aplicativo.
 - Depois digite o seguinte comando: yarn start.
 - Logo após a preparação do arquivo, o cmd irá gerar um código QR na tela.
 - No seu celular, pesquise na loja de aplicativos, o app chamado EXPO GO. 
 - Em seguida inicie o aplicativo, dentro do app, clique na opção código QR e escaneie o código do cmd.
 - Com tudo pronto, você poderá selecionar o tipo de referência, e após, é só precisa preencher os campos com as informações necessárias e clicar no botão gerar referência.
 - Ela ficará salva podendo copiar a referência, ou excluir.
 
### Como conectar ao Banco de Dados:
- Baixe os seguintes programas: Docker e Beekeeper. E depois inicie a instalação.
- Após as instalações, abra o cmd e utilize o seguinte comando: docker run --name mysql-teste -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123123 -d mysql.
- Para verificar se o Docker está funcional, use esse comando: docker ps.
- Quando for realizado a criação do Servidor do Banco de Dados, abra o Beekeeper e utilize as informações Conection type: mysql, Username: root, Password: 123123 para gerenciar o servidor.
- abra a pasta server e copie o seu endereço.
- No cmd escreva o seguinte comando: cd (e ao lado cole o endereço da pasta) e clique enter.
- Quando o cmd "entrar" na pasta, digite o próximo comando: npm install. Serve para instalar as dependências necessárias para rodar o servidor.
- Depois digite o seguinte comando: npm run dev. 


