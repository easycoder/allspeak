# Un rectangle qui rebondit #

> 📝 *Cette traduction française d'AllSpeak est un travail en cours, produit avec l'aide d'une IA. Si vous remarquez des formulations maladroites ou des erreurs, écrivez-nous à [info@allspeak.ai](mailto:info@allspeak.ai) — vos suggestions de relecture aideront à affiner la traduction pour les futurs utilisateurs.*

Voici un autre exemple simple d'animation. Cette fois, nous allons dessiner un rectangle dont la hauteur varie selon un calcul de sinus. Ne t'inquiète pas pour les mathématiques ; je vais t'expliquer. Voici le code ; copie-le dans l'éditeur puis exécute-le pour savoir ce qu'il fait.

~copy~

Le rectangle gris commence par avoir une hauteur égale à la moitié du conteneur, puis il grandit et rétrécit, pour finalement revenir à sa taille d'origine.

Nous commençons par créer le conteneur, en lui donnant une largeur de 90 % du panneau qui l'entoure. Sans le style margin, cela le ferait coller au bord gauche du panneau. Il te faudra te documenter sur le style CSS ~code:margin~ pour avoir tous les détails de la syntaxe, mais en bref, en utilisant auto pour les marges gauche et droite on les force à se partager l'espace libre entre elles, et le cadre se place ainsi au centre.

Le rectangle est configuré pour occuper 9 % de la largeur du conteneur et avoir une bordure et un arrière-plan. Le style ~code:position~ est une autre pépite des CSS trop complexe à expliquer ici ; en gros, il nous permet de fixer la position du haut de l'élément. Sans ~code:position~ et ~code:top~, il resterait simplement collé en haut du cadre. Le rectangle est contraint d'avoir son bord supérieur à mi-hauteur du conteneur (dans le monde informatique, le haut d'un conteneur est toujours zéro et les plus grandes valeurs vont vers le bas).

Ne te laisse pas décourager par la complexité apparente des CSS. Cela vaut vraiment la peine d'y consacrer un peu de temps, mais au bout du compte il faut simplement essayer les choses. Ce qui est génial avec l'éditeur ~ec~, c'est que tu peux expérimenter jusqu'à ce que tu réussisses à faire fonctionner les choses.

Jusqu'ici, nous avons un rectangle gris dans un cadre plus grand. La commande suivante est ~code:attends 2 secondes~, qui fait exactement cela. Tu peux utiliser ~code:attends~ pour mettre un script en pause pendant n'importe quel nombre de ~code:millis~ (millisecondes), ~code:ticks~ (centièmes de seconde), ~code:seconds~ (secondes) ou ~code:minutes~ (minutes). Dans tous les cas, le ~code:s~ final est optionnel.

Maintenant, passons à l'animation elle-même. Nous utilisons une variable ~code:Angle~ pour compter de 0 à 360. C'est le nombre de degrés dans un cercle. Si tu n'es pas porté sur les mathématiques, essaie de visualiser une horloge avec une aiguille des secondes qui tourne. C'est une aiguille des secondes un peu particulière qui s'étend à travers toute l'horloge d'un bord à l'autre. Si tu regardais l'horloge sur la tranche, tu ne verrais pas le mouvement rotatif ; l'aiguille des secondes semblerait simplement s'allonger et se raccourcir au fur et à mesure de sa progression autour du cadran. La fonction mathématique sinus nous donne la longueur apparente de l'aiguille en tout point de sa progression autour du cadran. Dans notre exemple, le diamètre de l'horloge est de 200 pixels (donc le rayon est de 100 pixels) et la longueur apparente, vue de la tranche, varie de 0 à 200 pixels. (Le même principe s'applique exactement à la durée du jour quand les saisons changent. Tu vois, les maths peuvent être utiles.)

Le calcul ~code:sin Angle radius 100~ s'occupe de tout cela, donc je n'en dirai pas plus. Nous utilisons la valeur ~code:Height~ qui en résulte pour calculer la nouvelle position du haut du rectangle et sa nouvelle hauteur.

Il y a quelques calculs effectués dans les styles CSS. Le haut du rectangle est le point 50 % comme précédemment mais avec la valeur du sinus soustraite. De même, la hauteur du rectangle est essentiellement 100 pixels mais avec la valeur du sinus ajoutée.

~next:L'Ola~
