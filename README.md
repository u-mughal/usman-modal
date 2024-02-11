
# usman-modal

usman-modal est un module npm qui propose un composant modal simple et personnalisable pour les applications React. Grâce à ce module, il est facile d'afficher un modal avec un design épuré et convivial, ce qui le rend adapté à diverses situations telles que l'affichage de messages de succès, d'alertes ou de tout autre contenu informatif. 

Ce modal a été spécialement conçu pour le projet 14 d'OpenClassrooms (hr-net). 

Vous pouvez trouver plus d'informations sur ce module sur https://www.npmjs.com/package/usman-modal.

## Installation

Vous pouvez installer usman-modal en utilisant npm :

```bash
  npm install usman-modal
```


Ensuite, pour utiliser le composant usman-modal dans votre application React, suivez ces étapes :
Importez le composant Modal :

```bash
  import { Modal } from 'usman-modal';
```

Utilisez le composant Modal dans votre application, par exemple :

```bash
  <Modal title="Employee created" text="Well done! You've successfully created your employee" closeModal={closeModal} />
```