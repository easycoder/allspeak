# Animation simple #

Voici un autre outil dans la boîte à outils du programmeur. Bien qu'il soit facile d'en abuser, la juste dose de mouvement donne vie à une page web et attire l'attention de l'utilisateur sur ses éléments clés.

Cet exemple dessine 3 cercles colorés et les allume et les éteint en succession rapide. J'ai choisi cet exemple pour mettre en évidence un certain nombre de techniques de programmation utiles et introduire un peu plus de CSS.

À partir de ce point, certains exemples deviennent assez longs, donc nous ne les reproduirons pas ici. À la place, clique sur le bouton ci-dessous pour charger l'exemple dans l'éditeur :

~copy~

Quand tu as des choses similaires à faire sur plusieurs objets différents, ton code commence à devenir répétitif. La répétition est une mauvaise chose, car si tu dois modifier une caractéristique clé, il te faut la changer à tous les endroits où elle apparaît. Et bien sûr, plus il y a de code, plus il y a d'endroits où des erreurs (bugs) peuvent se glisser via de simples fautes de frappe.

Une bonne façon d'éviter cela est d'utiliser des tableaux. Un tableau est une variable qui contient plusieurs valeurs. Comme un casier à courrier, où les cases sont toutes identiques mais ont des contenus différents.

Dans la plupart des langages de programmation, les tableaux utilisent des crochets pour indiquer ce qui se passe. Ainsi, pour accéder au troisième élément de la variable tableau ~code:data~ tu verrais

~code:data[3]~

~ec~ n'aime pas les symboles, en utilisant le moins possible pour rester aussi proche que possible du langage naturel. Nous aurions pu remplacer cela par

~code:le troisième élément de Data~

mais c'est plutôt lourd, alors nous avons adopté une approche plus propre. Dans ~ec~ toutes les variables sont des tableaux, mais la plupart d'entre elles n'ont qu'un seul élément. Elles ont aussi une valeur interne qui pointe vers l'élément courant. S'il n'y en a qu'un, le pointeur contient zéro. (En informatique, le premier élément de quoi que ce soit est 0, pas 1). Tu peux demander autant d'éléments que tu veux pour un tableau, et le pointeur interne — appelé l'_index_ — va de 0 jusqu'à 1 de moins que le nombre d'éléments dans le tableau.

Dans ce script, j'ai ajouté quelques lignes de commentaires pour t'aider à voir où les choses se passent. Elles n'ont aucun effet sur le programme.

À la ligne 11 nous demandons 3 éléments pour le tableau ~code:Button~. Ils seront adressés avec les indices 0, 1 et 2. Ensuite, nous avons une boucle qui se répète 3 fois, en incrémentant le compteur ~code:N~ à chaque tour. Nous « indexons » le bouton à la valeur de ~code:N~ pour que le tableau présente chacun des éléments à son tour, et nous effectuons toutes les choses qui sont identiques pour tous les boutons. Ce sont :

- La largeur et la hauteur.
- Une marge de chaque côté qui les tient séparés.
- Le rayon de la bordure. Les boutons sont rectangulaires par défaut ; ceci leur donne des coins arrondis. En utilisant la valeur 50% nous transformons le bouton en cercle ou en ellipse, selon que la largeur et la hauteur sont identiques ou non.
Le fait de définir la valeur display à ~code:inline-block~ maintient tous les boutons sur une seule ligne. (Tu as raison ; ce n'est pas du tout évident, n'est-ce pas ?)

Les boutons commencent par être invisibles (mais ils occupent quand même de l'espace).

Maintenant il faut définir la couleur de fond, qui est différente pour chaque bouton ; nous testons donc la valeur de ~code:N~ pour savoir quelle couleur utiliser. CSS dispose de 140 couleurs nommées, plus tu peux utiliser des combinaisons de rouge, vert, bleu et transparence pour obtenir un total de 4 294 967 296 couleurs distinctes parmi lesquelles choisir.

Enfin, à la ligne 29 l'animation elle-même commence. Nous avons une boucle à l'intérieur d'une boucle ; celle de l'extérieur tourne indéfiniment tandis que celle de l'intérieur parcourt les boutons, en définissant l'index du tableau ~code:Button~ à chaque fois, puis en rendant le bouton visible pendant un court instant avant de le rendre à nouveau invisible. Remarque comment ~ec~ a 2 façons différentes de définir les styles ; l'une gère un seul style tandis que l'autre en définit plusieurs à la fois et écrase tout ce qui avait été défini précédemment.

Le script n'a pas besoin d'une commande ~code:arrête~ à la fin, car il ne l'atteindra jamais.

~next:Un rectangle qui rebondit~
