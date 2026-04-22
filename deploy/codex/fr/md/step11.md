# Interactivité #

> 📝 *Cette traduction française d'AllSpeak est un travail en cours, produit avec l'aide d'une IA. Si vous remarquez des formulations maladroites ou des erreurs, écrivez-nous à [info@allspeak.ai](mailto:info@allspeak.ai) — vos suggestions de relecture aideront à affiner la traduction pour les futurs utilisateurs.*

Dans tous les programmes, sauf les plus simples, il existe des moyens par lesquels l'utilisateur peut interagir et contrôler ce qui se passe. Ici je vais te montrer comment faire. Pour notre exemple, nous allons construire un script qui demande à l'utilisateur un nombre puis crée ce nombre de boutons à l'écran. Lorsqu'un bouton est cliqué, son apparence change pour montrer qu'il n'est plus cliquable. Clique sur le bouton pour charger le code :

~copy~

Le script commence par demander à l'utilisateur combien de boutons placer à l'écran. Il dimensionne ensuite deux tableaux en fonction du nombre que tu donnes. Un tableau contiendra les boutons ; l'autre est un tableau de drapeaux qui sont activés lorsque le bouton correspondant a été cliqué. Le prochain morceau de code parcourt ce tableau en effaçant chacune de ses valeurs (en le mettant à false). Puis nous créons le conteneur principal pour accueillir les boutons.

Maintenant nous entrons dans une boucle, qui redessine tout à chaque passage. La première chose est de vider le conteneur de tout son contenu précédent — s'il y en a — puis de dessiner tous les boutons en utilisant une boucle. Pour chaque bouton nous créons le contour — un ~code:div~ avec une bordure, puis nous vérifions si le bouton a été cliqué. Si c'est le cas, un simple message est placé dans le bouton, mais sinon nous devons créer un lien hypertexte, qui en HTML est un élément ~code:a~, c'est donc aussi son nom en ~ec~. Nous donnons au bouton le contenu ~code:Bouton N~, où ~code:N~ compte de 0 au nombre de boutons.

La partie suivante indique ce qui se passe lorsque l'utilisateur clique/appuie sur un bouton. Le mot-clé "sur" (on) désigne un gestionnaire d'événements. Un événement est quelque chose qui se produit pendant l'exécution d'un programme et il existe plusieurs types d'événements différents ; le clic étant l'un d'eux. Lorsqu'un clic est détecté, le système exécute la commande ou le bloc de commandes qui suivent.

Tu peux définir un gestionnaire d'événements sur n'importe quel composant à l'écran, mais il y a une différence significative avec un élément lien hypertexte : lorsque le pointeur de la souris passe dessus (le "survole"), l'icône se transforme en main, alors que ce n'est pas le cas pour un ~code:div~ ou les autres types. Évidemment, cela ne s'applique qu'aux PC ; les appareils tactiles comme les smartphones n'ont pas de mécanisme de survol, donc il te conseillé de rendre évident que quelque chose est un lien. Une autre différence est que les liens hypertextes ont une "décoration", généralement sous la forme de texte souligné. C'est le comportement par défaut mais tu peux le changer ou le désactiver complètement dans tes styles CSS.

L'action que nous prenons lors de la détection d'un clic est de mettre le drapeau ~code:Clique~ pour ce bouton puis de redessiner l'écran. Nous devons donc être capables de dire quel bouton a été cliqué, et c'est une très bonne raison de les garder dans un tableau. Lorsque tu as un tableau de liens hypertextes, il suffit de définir "sur clic" une seule fois car cela s'applique à tout le tableau. Quand le clic se produit, le pointeur interne est positionné sur l'élément qui a reçu le clic, donc ici nous obtenons cet index et l'utilisons pour pointer vers le même élément dans le tableau ~code:Clique~. Nous le mettons à true, de sorte que lorsque l'écran est redessiné, l'élément prend sa forme "cliqué".

~next:TicTacToe~
