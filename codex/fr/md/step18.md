# Solitaire #

Solitaire est un nom générique pour diverses activités/jeux/exercices pour un seul joueur. Les variantes les plus courantes sont probablement les jeux de cartes, mais l'une des plus traditionnelles est un jeu qui se joue sur un plateau en bois comportant une grille de trous initialement remplis de pions. Un trou est laissé vide au départ et les règles sont très simples ; quand tu prends un pion et le fais sauter par-dessus son voisin pour le placer dans un espace vide, le voisin est retiré du plateau. Le défi consiste à enlever tous les pions sauf un. C'est étonnamment difficile.

Nous avons ici une version électronique du Solitaire. Les pions sont déplacés par glisser-déposer, comme décrit dans la page précédente, mais ici cela devient un peu plus compliqué. Note : bien que ce script fonctionne sur un appareil mobile, il n'est pas idéal car le doigt a tendance à masquer la vue de l'endroit où le pion est déplacé, et il ne semble pas y avoir de moyen fiable d'empêcher le navigateur de faire glisser tout le contenu de l'écran avec l'élément sélectionné. Il existe une version de ce script sur [https://allspeak.software/solitaire/](https://allspeak.software/solitaire/) qui utilise la sélection au lieu du glissement et qui est mieux adaptée aux navigateurs mobiles.

~copy~

Le code qui dessine le plateau est assez typique des jeux et des programmes graphiques similaires, en ce sens qu'il calcule les positions et les tailles à l'écran non pas en utilisant des valeurs fixes mais en calculant des valeurs relatives à un point de départ. Dans ce cas, pour PC, c'est 500 pixels et pour mobile c'est la largeur de l'écran. Même si le code peut prendre un certain temps à examiner, il permet d'apporter des modifications assez simplement. Ici, les chiffres 7 et 14 se rapportent au nombre de pions sur une rangée, le 6 rend simplement les pions plus petits et le 95 et le 100 forcent la zone de jeu à être plus petite pour que tout tienne à l'intérieur du cercle. Je te laisse deviner le reste.

Le script fait un usage intensif de tableaux contenant chacun 49 éléments, un pour chaque case du plateau ; un tableau de 7 par 7 cases, dont toutes ne sont pas utilisées. Le premier de ces tableaux est une carte décrivant l'état actuel du plateau. Chaque position a 1 de 3 valeurs : 0 signifie une case qui ne fait pas partie du jeu, 1 est une case vide et 2 signifie qu'un pion occupe la case. Chaque case a un pion ; ils ne bougent jamais, sauf temporairement pendant qu'ils sont déplacés, après quoi ils sont simplement rendus visibles ou invisibles.

Deux tableaux — ~code:Lefts~ et ~code:Tops~ — contiennent les positions de chacune des cases par rapport au conteneur.

Chaque case est représentée par un tableau de cercles gris, et chaque pion par un cercle rouge. Chaque pion ne peut occuper qu'un trou. Il y a initialement un pion de moins que de trous ; la case centrale est vide. La première partie du script s'occupe de préparer le plateau, puis nous avons les 3 gestionnaires d'événements pour la prise, le glissement et le dépôt.

Quand tu prends un pion, avant de le déplacer, le script détermine s'il existe un endroit légal (selon les règles du Solitaire) où il peut être déplacé. Les pions peuvent bouger de 2 cases vers le haut, le bas, la gauche ou la droite mais uniquement s'il y a une case vide à cette position et un pion à enjamber. Si un mouvement est possible, le pion est peint d'une couleur différente et placé au premier plan en définissant son z-index. La variable ~code:Selected~ est réglée sur l'index du pion, qui sinon contient la valeur false.

Quand tu fais glisser le pion, le script calcule sa nouvelle position et le redessine à cette position. Ensuite, il vérifie si la position actuelle du pointeur se trouve dans l'une des 4 destinations possibles. Si c'est le cas, il peint le trou en jaune comme signal visuel que tu peux déposer le pion.

Quand tu déposes un pion, il y a 2 scénarios possibles. Si tu es arrivé à une destination valide, le pion est remis à son z-index d'origine, ramené à sa position d'origine mais retiré (rendu invisible). Le pion enjambé est également retiré et le pion précédemment invisible à la destination est rendu visible.

Le deuxième scénario est celui où tu déposes un pion ailleurs qu'à une destination valide. Tout ce que nous avons à faire ici est de rétablir les choses à leur état antérieur à la prise du pion.

Tout ce qu'il reste à faire est de vérifier s'il y a encore des mouvements possibles, et sinon d'afficher un message pour informer le joueur. Il n'y a pas de bouton Recommencer mais il ne serait pas difficile d'en ajouter un.

Les programmeurs à l'œil exercé remarqueront peut-être que les algorithmes pour trouver les mouvements valides sont implémentés deux fois mais de manière différente. C'est en grande partie parce que le script est dérivé d'une version antérieure (qui n'utilisait pas le glisser-déposer). La technique utilisée pour tester si un pion donné peut être déplacé est plus concise mais j'ai décidé de laisser tel quel le code qui vérifie s'il y a des mouvements disponibles. Chaque technique utilise un certain nombre de calculs arithmétiques et cela démontre qu'il existe souvent 2 façons ou plus d'atteindre un objectif donné.

~next:Panoramique et zoom~
