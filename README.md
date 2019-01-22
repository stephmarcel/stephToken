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

On part sur la base que vous avez déjà installé _nodeJs_, _npm_ et _truffle_
      mkdir stephcoin && cd stephcoin && truffle init

Installer [Ganache](http://truffleframework.com/ganache/) et se rassurer qu'il tourne sur le port 8545

Ajouter au repertoire /contracts le fichier *StephCoin.sol*
Ajouter au repertoire /migrations le fichier *2_deploy_contracts.js*
### Compilation et déploiement
    truffle compile   (truffle.cmd si vous testez sous windows)
    truffle migrate

## Tests
