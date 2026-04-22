# Premier pas : Bonjour, tout le monde ! #

> 📝 *Cette traduction française d'AllSpeak est un travail en cours, produit avec l'aide d'une IA. Si vous remarquez des formulations maladroites ou des erreurs, écrivez-nous à [info@allspeak.ai](mailto:info@allspeak.ai) — vos suggestions de relecture aideront à affiner la traduction pour les futurs utilisateurs.*

Nous commencerons par des choses très simples et te présenterons progressivement de plus en plus de fonctionnalités du système ~ec~. Tu peux t'arrêter à tout moment et revenir plus tard (sur le même ordinateur et le même navigateur) ; le système se souviendra de l'endroit où tu t'étais arrêté. Au-dessus de ce texte se trouvent des boutons de navigation qui te permettent de revenir à l'étape précédente du tutoriel ou de passer à la suivante. Alors allons-y.

Sur la gauche tu peux voir un panneau vide avec juste un numéro de ligne '1'. (Sur un smartphone tu devras appuyer sur le bouton ~icon:cycle:20px:Cycle screens~ (Cycle) pour accéder au panneau Code.) C'est ici que tu mettras le code de ton programme. Au-dessus se trouvent des boutons qui te permettent de sauvegarder ton code, de charger du code précédemment sauvegardé et d'exécuter ce qui se trouve à l'écran pour le moment.

C'est une tradition en programmation que le premier programme s'appelle "Hello, world". Il affiche simplement un message — c'est tout. Nous honorerons donc la tradition en le faisant ici. Saisis le texte que tu vois ci-dessous dans le panneau de gauche, ou clique sur le bouton "Copier dans l'éditeur". (Si tu es sur smartphone, tu voudras peut-être lire un peu plus avant de le faire, mais souviens-toi que tu peux revenir ici à tout moment en appuyant sur le bouton ~icon:cycle:20px:Cycle screens~.)

~pre:alerte &#96;Bonjour, tout le monde !&#96;~
~copy~

Tu remarqueras que dans notre éditeur le texte entre les backticks est coloré alors que le mot 'alerte' est noir. C'est parce que l'éditeur 'comprend' à quoi ressemblent les scripts ~ec~. Note aussi que les lignes vides ou les espaces en début de ligne sont ignorés, et qu'une commande peut occuper plus d'une ligne tant que tu n'insères pas de saut de ligne au milieu d'une chaîne entre guillemets (comme ~quot:Bonjour, tout le monde !~).

Le mot ~code:alerte~ est un mot-commande de ~ec~ et le texte entre les backticks est du texte fixe. Nous, les programmeurs, l'appelons une chaîne. Les mots colorés en noir font tous partie de ~ec~ lui-même ; tout le reste a une couleur qui indique le rôle qu'il joue dans le langage. Les chaînes sont toujours en ~code:rouge~ ~code:mat~.

Lorsque tu cliques sur le bouton ~icon:run:20px:Run~, son icône se change en ~icon:runstop:20px:Stop~ et une fenêtre popup apparaîtra contenant ton message. Lorsque tu cliques sur le bouton OK dans la fenêtre, tout reviendra comme avant. Ton script a terminé son travail.

Le programme s'est en réalité comporté comme si tu avais tapé

~pre:alerte &#96;Bonjour, tout le monde !&#96;
sors~

Si tu omets l'instruction ~code:sors~, le compilateur ~ec~ en ajoute une pour toi, mais il y a des moments où tu ne veux pas que le programme se termine tout simplement. Il peut attendre que l'utilisateur interagisse, il doit donc rester actif. Pour cela nous avons besoin d'une autre variante :

~pre:alerte &#96;Bonjour, tout le monde !&#96;
arrête~

Dans ce cas, après avoir cliqué sur le bouton OK et la disparition du popup, le bouton ne revient pas à ~icon:run:20px:Run~. C'est parce que le script est toujours en état 'en cours d'exécution' mais ne fait en réalité rien. Si tu cliques sur le bouton ~icon:runstop:20px:Stop~, le script sera forcé de se terminer. Essaie pour voir.

Le popup d'alerte est très utile lorsque tu veux arrêter ton script et vérifier ce qu'il fait. Tu peux construire un message qui contient toutes les informations dont tu as besoin. Pour les deux prochaines étapes de ce tutoriel, nous utiliserons des alertes pour explorer certaines fonctionnalités de base de la programmation et faire quelques calculs arithmétiques avant de passer à la partie visuelle.

Avant de continuer, ajoutons encore une chose ici.

Ce script ne comporte peut-être qu'une seule ligne, mais c'est ton premier script. Tu y as peut-être apporté des modifications pour voir quel effet elles ont (j'espère bien que oui, en fait ; c'est la meilleure façon d'apprendre). Si tu veux revenir une autre fois et l'exécuter, pour t'éviter de devoir le retaper, que dirais-tu de le sauvegarder ? Fais-le en tapant un nom approprié — comme ~code:bonjour~ — dans la case Nom du Script puis en cliquant sur le bouton ~icon:save:20px:Save~. Si tu utilises le Codex depuis notre serveur web, tes scripts sont sauvegardés dans une zone de mémoire gérée par ton navigateur et ne sont visibles que par toi pendant que tu utilises ce site. Cela signifie qu'ils ne sont pas permanents, donc si tu veux vraiment sauvegarder un script tu devrais le copier et le coller dans un document texte ou un email.

Lorsque tu cliques sur ~icon:open:20px:Open~ tu verras tous les scripts que tu as sauvegardés en utilisant ~ec~. Clique sur n'importe lequel d'entre eux pour le charger dans l'éditeur, où tu peux apporter des modifications et l'exécuter.

Pour effacer le script courant (sans le supprimer du stockage), clique sur ~icon:new:20px:New~, et pour supprimer le script courant du stockage clique sur ~icon:trash:20px:Delete~.

~next:Arithmétique de base~
