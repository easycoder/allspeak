# Arithmétique de base #

~ec~ est conçu pour le web, pour construire des applications qui font des choses dans un navigateur. Le monde du navigateur est principalement visuel, avec beaucoup d'images et de texte, mais il y a toujours besoin d'un peu d'arithmétique de base, alors nous allons écrire quelques scripts qui illustrent ce qui est disponible.

Dans la plupart des langages de programmation, si tu veux additionner des nombres, cela ressemblera à l'algèbre que tu as apprise à l'école :

~pre:Z = X + Y~

mais ce n'est pas ainsi que tu l'exprimerais à l'écrit ou à l'oral en français. Tu dirais plutôt quelque chose comme

~pre:ajoute X à Y donnant Z~

où ~code:donnant~ est un raccourci pour « et mets le résultat dans ».

Il se trouve que c'est exactement de cette manière que ~ec~ procède aussi. Ici, tu additionnes les valeurs X et Y et tu mets le résultat dans une variable appelée Z.

Les mots ~code:valeur~ et ~code:variable~ ont des significations précises. Une ~code:valeur~ est tout ce que tu peux mesurer ou compter, comme des voitures, des centimes ou des jours. ~ec~ ne se soucie pas de ce qu'ils sont ; il sait juste que tu as un tas X et un tas Y et que tu veux les additionner pour former un tas Z.

Une ~code:variable~ est un peu plus spécifique ; c'est un contenant dans lequel quelque chose est stocké. Ton portefeuille ou porte-monnaie contient de l'argent ayant une certaine valeur, donc le porte-monnaie a aussi cette valeur. En revanche, un euro ou une livre sterling ont des valeurs précises mais ne peuvent pas contenir d'autres choses, donc ils ne peuvent pas être des variables. Cela signifie simplement que, dans la somme ci-dessus, X et Y peuvent être soit des valeurs soit des variables (contenant des valeurs), mais Z ne peut pas être une simple valeur ; ce doit être une variable, puisque nous y mettons quelque chose (la somme de X et Y).

Une variante de cette somme consiste à ajouter la valeur X à ce qui se trouve déjà dans Y. L'opération est plus simple :

~pre:ajoute X à Y~

De nouveau, X peut être n'importe quelle valeur mais Y doit être une variable.

Bien sûr, l'arithmétique ne se limite pas à l'addition. Il y a aussi la soustraction, la multiplication et la division. Voici à quoi elles ressemblent toutes :

~pre:ajoute X à Y          ajoute X à Y donnant Z
soustrais X depuis Y       soustrais X depuis Y donnant Z
multiplie Y par X     multiplie Y par X donnant Z
divise Y par X       divise Y par X donnant Z~
Remarque que, dans la colonne de gauche, la multiplication et la division fonctionnent à l'inverse de l'addition et de la soustraction : le résultat de l'opération (Y) y est le premier élément, et non le second. Contrairement à pratiquement tous les autres langages de programmation, ~ec~ suit la façon dont on l'exprime en langage naturel, pour que ce soit plus intuitif pour les utilisateurs.

Bien que je n'aie utilisé que X et Y, tu peux aussi faire de l'arithmétique avec des nombres :

~pre:ajoute 4 à X
soustrais 3 depuis 13 donnant Y~

et ainsi de suite. À ce stade, commençons à coder. Copie ce code dans l'éditeur :

~step~
~copy~

Dans la commande alerte, tu verras le mot ~code:cat~ utilisé pour « concaténer » 2 chaînes ensemble. À part cela, j'espère que tout sera facile à suivre, même si tu débutes complètement en programmation.

Si à un moment donné tu veux en savoir plus sur une commande particulière, clique sur le bouton  en haut de ce panneau et tu seras redirigé vers le Manuel de Référence du Programmeur de ~ec~. Il faut sélectionner un paquet — la plupart des commandes que nous allons utiliser se trouvent soit dans Core soit dans Browser — et choisir Commands, Values ou Conditions. Une liste déroulante affiche tous les mots-clés de cette section. Clique sur le bouton **Tutorial** pour revenir ici quand tu auras fini.

~next:Manipulation de chaînes~
