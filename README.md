# StephCoin : Une implémentation du token ERC20
## Qu'est ce que l'ERC20? (_source: Ethereum France_)

Les tokens dits « ERC20 » sont issus du processus de proposition / amélioration mis en oeuvre par la Fondation Ethereum sur son compte 
[Github](https://github.com/ethereum/EIPs/issues). ERC signifie littéralement Ethereum Request for Comments : un processus par lequel une personne demande à la communauté de revoir et de commenter une proposition pour Ethereum. En l’occurence, la 20ème proposition postée sur le Github le 19 novembre 2015 concernait une proposition de standards pour le développement de tokens sur Ethereum – elle s’appela donc ERC20. L’idée de token programmable était une des plus simples à implémenter sur la blockchain. Initiée par [frozeman](https://github.com/frozeman) (Fabian Vogelsteller), la proposition a immédiatement donné lieu à [d’intenses discussions](https://github.com/ethereum/EIPs/issues/20).

Il est donc important de souligner qu’ERC20 est un standard : il définit des fonctions et des événements qu’un token doit gérer pour être 
qualifié d’ERC20. Il ne s’agit pas d’un code précis ou d’un produit. Chacun peut créer son propre code de token ERC20 tant que celui-ci 
respecte les fonctions standard et leur comportement. En l’occurence, il existe de nombreux contrats de tokens ERC20 : [le code fourni sur ethereum.org]
(www.ethereum.org), le code modulaire d’[OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-solidity/tree/master/contracts/token/ERC721), le [code de ce wiki](https://theethereum.wiki/w/index.php/ERC20_Token_Standard), etc.

N’importe quel code mettant en application les spécifications ERC20 crée un token ERC20.


## Configuration du projet
### Installation Truffle et Ganache
#### Truffle
      npm install -g truffle
#### Ganache
Nous utiliserons [Ganache](http://truffleframework.com/ganache/) pour effectuer nos tests en local. Une fois installée il nous fournit 10 adresses de test avec 100 ETH par défaut. Il est disponible au http://truffleframework.com/ganache/ ou encore en lgne de commande avec la syntaxe suivante:
      npm install -g ganache-cli
Une fois installée, on va se rassurer qu'il tourne sur le port 8545.

#### Création du projet Truffle
      mkdir stephcoin && cd stephcoin && truffle init

Ajouter au repertoire /contracts le fichier *StephCoin.sol*
Ajouter au repertoire /migrations le fichier *2_deploy_contracts.js*
### Compilation et déploiement
    truffle compile 
    truffle migrate

## Utilisation du Token
      truffle console
 
      let instance = await StephToken.deployed()
      let accounts = await web3.eth.getAccounts()
      let balance = await instance.balanceOf(accounts[0])
      balance.toNumber()
      
      
      instance.transfer(accounts[1], 500)
      let received = await instance.getBalance(accounts[1])
      received.toNumber()
      
      let newbalance = await instance.getBalance(accounts[1])
      newbalance.toNumber()
     
