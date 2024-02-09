
# usman-modal

usman-modal est un package npm qui fournit un composant modal simple et personnalisable pour vos applications React. Ce package vous permet d'afficher facilement un modal avec un design propre et convivial, le rendant adapté à divers cas d'utilisation tels que l'affichage de messages de réussite, d'alertes ou de tout autre type de contenu informatif.

Ce modal a été créé en particulier pour le projet 14 d'OpenClassrooms (hr-net).


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