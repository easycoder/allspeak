# Gestion des listes #

Une liste en ~ec~ est une chaîne de texte au format JSON, qui est une façon de représenter des structures de données. Pour une liste, il s'agit d'un ensemble d'éléments, bien qu'il existe d'autres manières d'organiser les données, que nous verrons dans une autre étape.

Dans cet exemple, nous mettrons en place une liste de courses, puis nous la trierons par ordre alphabétique. La forme la plus simple de la liste est celle où chaque article est simplement un nom. Clique sur ce bouton pour charger le code d'exemple dans l'éditeur :

~copy~

Au début du script se trouvent les variables que nous utiliserons. À noter en particulier ListeOriginale et ListeAffichage. La première est la liste telle qu'elle est entrée, avec les éléments dans aucun ordre particulier. La seconde est la même liste après qu'elle a été préparée pour l'affichage.

Aux lignes 16-25, nous créons notre liste originale. Nous commençons par vider la variable ~code:ListeOriginale~, puis nous ajoutons les articles un par un.

Ensuite nous construisons l'interface utilisateur ; un panneau pour contenir la liste et 2 boutons en dessous. Pas de prix pour le style, bien sûr. Les 2 boutons ont chacun des actions associées, à exécuter lorsqu'ils sont cliqués. Le bouton ~code:NonTriee~ saute simplement à une étiquette plus bas, pour éviter de répéter le même code. Pour afficher la liste, nous copions la liste originale dans la liste d'affichage et appelons la sous-routine ~code:Affiche~, qui ajoute chaque article à son tour au panneau.

Lorsque nous cliquons sur le bouton ~code:Triee~, nous copions la liste mais la trions avant de l'afficher. En ~ec~, comme en JavaScript lui-même, aucune hypothèse n'est faite sur la manière dont tu veux que le tri soit effectué. Généralement tu veux un tri alphabétique, mais suppose que tu veuilles les articles classés par longueur de leurs noms ? Pour permettre une flexibilité maximale, les langages de programmation te laissent définir une fonction de comparaison qui prend 2 éléments de la liste et les compare. Ici la fonction s'appelle ~code:TriAlphabetique~ et elle fonctionne ainsi :

La commande de tri fonctionne en comparant les éléments de la liste jusqu'à ce qu'ils soient dans l'ordre souhaité. Elle sait quand cela s'est produit en examinant les résultats de la fonction de comparaison spécifiée par l'utilisateur (~code:TriAlphabetique~). Cette fonction sera appelée plusieurs fois, chaque fois avec une paire d'éléments, et chaque fois elle doit retourner une valeur qui indique s'ils sont dans le bon ordre. Les 2 éléments sont fournis comme arguments du tableau lui-même, avec des noms spéciaux ~code:a~ et ~code:b~. Notre fonction de comparaison les compare et place le résultat dans un autre argument appelé ~code:v~. Les valeurs retournées sont 1, 0 ou -1, selon que le premier argument a une valeur supérieure, égale ou inférieure au second argument. Une fois la liste triée, elle est ensuite affichée.

Note que dans ce cas les valeurs sont des chaînes, pas des nombres, donc la comparaison est alphabétique.

Cette technique te permet de faire n'importe quel tri dont tu as besoin. Maintenant trions par longueur de mot. Essaie de remplacer les lignes 65 et 66 par

~pre:si la longueur de A est supérieur à la longueur de B mets 1 dans Resultat
sinon si la longueur de A est inférieur à la longueur de B mets -1 dans Resultat~

et regarde ce qui se passe. La liste sera maintenant dans l'ordre de la longueur des mots. Cependant, il y a 4 articles avec 4 lettres et 2 avec 6 lettres, et ceux-ci ne sont pas triés alphabétiquement. Pour que cela se produise, nous devons modifier la ligne 67 comme suit :

~pre:sinon
début
    si A est supérieur à B mets 1 dans Resultat
    sinon si A est inférieur à B mets -1 dans Resultat
    sinon mets 0 dans Resultat
fin~

Ici nous avons ajouté une seconde comparaison, cette fois sur les valeurs réelles comme avant, qui ne se produit que si les deux articles ont la même longueur.

À l'étape suivante, nous verrons un tri plus avancé.

~next:Tri avancé~
