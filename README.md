C'est une solution Angular 4 intégré dans un projet .Net Core 2.0 global, ASP MVC, web Api, Json, Bootstrap 4.


Le formulaire authenticate permet d'afficher un formulaire de saisie de login et mot de passe, les informations sont envoyés vers la partie backend serveur pour validation et renvoie true (possibilité d’extension vers Identity, OAuth 1, OAuth 2…).

Un bouton confidential permet d'envoyer une chaine de caractères vers le serveur (après transformation du login via par l'algo AWS), du côté serveur, l'algo AWS et utilisé pour extraire le login et retourne true si login existant.
 
Le projet a été testé avec Visual studio 2017 et Visual Studio Code.

La base est assez suffisante à mon avis pour mettre en place une solution plus riche :-)
