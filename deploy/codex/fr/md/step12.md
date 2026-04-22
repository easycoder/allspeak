# TicTacToe #

> 📝 *Cette traduction française d'AllSpeak est un travail en cours, produit avec l'aide d'une IA. Si vous remarquez des formulations maladroites ou des erreurs, écrivez-nous à [info@allspeak.ai](mailto:info@allspeak.ai) — vos suggestions de relecture aideront à affiner la traduction pour les futurs utilisateurs.*

Cette étape du tutoriel est un peu plus longue. Il s'agit de l'omniprésent jeu pour enfants TicTacToe (en France connu sous le nom de Morpion). C'est l'un des jeux les plus simples à jouer, et aussi à implémenter en code. J'ai découvert le même jeu présenté comme premier exemple dans un tutoriel officiel du framework JavaScript « React » et j'ai été frappé par sa complexité apparente. Ne pourrait-il pas être codé plus simplement ? Je l'ai donc réécrit en utilisant ~ec~ et voici le résultat. L'apparence ne gagnera aucun prix ; elle est essentiellement identique à la version React. Dans les deux cas, l'accent est mis sur le code, mais React est une architecture à composants donc tout y est basé sur un ensemble d'objets qui gèrent et dessinent les 9 cases, alors que cette version ~ec~ se concentre davantage sur la logique du jeu et relègue les composants de visualisation au second plan.

~copy~

Le script commence par les déclarations habituelles, incluant les variables ~code:Cell~ et ~code:Model~. L'une est la case effectivement dessinée à l'écran ; l'autre est la donnée qui représente si la case est vide ou contient un O ou un X. Après les déclarations de variables, ces deux variables reçoivent chacune 9 éléments ; un pour chaque case du plateau du TicTacToe.

L'aspect le plus notable de l'initialisation est la mise en place d'une table des combinaisons gagnantes. Nous numérotons les cases de 0 à 8, avec 0 en haut à gauche et 8 en bas à droite, en numérotant ligne par ligne. Les combinaisons gagnantes sont les trois lignes, les trois colonnes et les deux diagonales ; soit 8 combinaisons au total. Elles sont listées dans la table.

Maintenant nous mettons en place le plateau. En haut il y a un panneau de message, puis le plateau lui-même, que nous construisons en parcourant les cases une par une. Elles sont toutes fondamentalement identiques donc le même code s'applique à chacune. La seule chose particulière est de commencer une nouvelle ligne toutes les 3 cases. Cela se fait avec le calcul ~code:modulo~ à la ligne 41, qui divise ~code:Index~ par 3 et nous donne le reste. Chaque fois que le reste est zéro (pour les cases 0, 3 et 6), nous commençons une nouvelle ligne. Puis nous ajoutons chaque nouvelle case à la ligne courante. Nous n'avons pas besoin de fournir d'informations de position pour les cases car chacune prend naturellement sa place à côté de la précédente ; c'est ainsi que fonctionne HTML.

Maintenant nous pouvons mettre en place un « callback » qui détectera quand l'une des cases est cliquée. Comme dans l'exemple précédent, un seul est nécessaire car les cases sont toutes dans le même tableau. Rien n'empêche l'utilisateur de cliquer après la fin de la partie, donc nous n'autorisons que 9 clics au total, et de même, si la partie a déjà été gagnée nous ne prenons aucune action non plus.

Maintenant nous obtenons l'index de la case qui a été cliquée. Si le ~code:Model~ montre que cette case a déjà été cliquée, nous ne faisons rien.

Si c'est au tour du joueur « X », nous mettons ~code:Cell~ à 'X' et nous mettons '1' dans l'élément correspondant de ~code:Model~. Si c'est le joueur « O », nous mettons 'O' dans ~code:Cell~ et '-1' dans le ~code:Model~. Puis nous faisons appel à la sous-routine qui vérifie si nous avons un gagnant. (Pour les débutants, une sous-routine est un morceau de code que tu peux appeler depuis n'importe quel endroit de ton programme pour effectuer un travail spécifique. Quand elle se termine, ton programme continue à la ligne qui suit celle qui a appelé la sous-routine.)

La sous-routine ~code:CheckWinner~ semble compliquée mais en fait elle est assez simple. Elle parcourt les 8 combinaisons gagnantes une à la fois. Chacune se compose de 3 cases qui contiennent soit 0, 1 ou -1. Si nous additionnons les valeurs des 3 cases et que le résultat vaut 3 ou -3, alors nous avons un gagnant. Au retour de la sous-routine, nous vérifions si un gagnant a été trouvé, et si c'est le cas nous affichons un message.

Et c'est à peu près tout. Tu devrais pouvoir voir ce qui se passe, mais si ce n'est pas clair, essaie d'utiliser le traceur (reporte-toi à deux étapes en arrière) et fais-lui afficher les valeurs des variables clés.

~next:Gestion des listes~
