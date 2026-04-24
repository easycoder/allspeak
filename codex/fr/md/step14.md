# Tri avancé #

L'exemple précédent était simple, mais parfois les éléments d'une liste comportent plusieurs valeurs. Pour une liste de courses, tu pourrais avoir le prix, l'identifiant du produit, etc. Ici, nous allons modifier notre liste pour y ajouter des prix, puis trier par prix ainsi que par ordre alphabétique.

~copy~

La liste contient désormais les mêmes articles, mais chacun comprend 2 valeurs : le nom de l'article et son prix (en centimes ou autre unité ; AllSpeak ne gère pas les valeurs à virgule flottante). Au début de l'étape précédente, j'ai mentionné que le format JSON peut gérer autre chose que des listes ; ici nous avons une carte de propriétés : un ensemble de valeurs ayant chacune une clé qui indique ce qu'elle est — ici name ou price — et la valeur elle-même. Chaque article est ajouté séparément à une liste, donc la structure globale est une liste d'articles ayant chacun 2 propriétés.

Tout le reste est identique à l'exemple précédent — à part la fonction de comparaison, qui doit maintenant plonger dans les propriétés pour trouver le prix et effectuer la comparaison sur celui-ci. J'ai renommé la fonction pour que cela soit clair.

Comme auparavant, il y a un petit piège pour toi : le lait et le sucre ont le même prix mais le sucre s'affiche en premier parce qu'il apparaît en premier dans la liste. Nous pouvons faire apparaître ces 2 articles dans l'ordre alphabétique en modifiant la ligne 98 en

~pre:sinon
début
    si propriété `name` de A est supérieur à propriété `name` de B
        mets 1 dans Resultat
    sinon si propriété `name` de A est inférieur à propriété `name` de B
        mets -1 dans Resultat
    sinon mets 0 dans Resultat
fin~

La page suivante te montrera comment extraire seulement certains des éléments d'une liste.

~next:Filtrer les listes~
