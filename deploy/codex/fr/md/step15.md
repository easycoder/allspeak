# Filtrer les listes #

Le filtrage est assez similaire au tri, mais au lieu de changer l'ordre des éléments dans une liste, il supprime ceux qui ne sont pas souhaités. La syntaxe de la commande est très similaire et, comme le tri, elle utilise une fonction pour faire le travail ; cette fois elle s'appelle une fonction de filtrage.

L'exemple est la même liste de courses qu'avant, mais ici nous voulons retirer de la liste tous les articles ayant une valeur inférieure à une livre (ou dollar, euro, etc.)

~copy~

La liste a maintenant les mêmes articles mais il y a un bouton supplémentaire sous le panneau, qui une fois cliqué filtre la liste. Il trie aussi ce qui reste, tu peux donc voir les deux commandes l'une après l'autre. La fonction de filtrage elle-même est plus simple que le comparateur ; une seule valeur est présentée à chaque fois. Le résultat, au lieu d'avoir l'une de trois valeurs, n'en a plus que deux ; true ou false selon que la valeur doit être acceptée ou rejetée.

Le tri et le filtrage sont une partie cruciale de la gestion de nombreuses données et l'utilisation de fonctions de comparaison et de filtrage personnalisées rend très facile le contrôle du processus.

~next:Utiliser Google Maps~
