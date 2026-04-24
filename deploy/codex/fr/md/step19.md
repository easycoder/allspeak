# Panoramique et zoom #

Quand les programmes télévisés montrent une série d'images, ils appliquent souvent ce qu'on appelle l'« effet Ken Burns » (du nom du documentariste américain qui a été le pionnier de cette technique). Cela fait que chaque image effectue lentement un panoramique et/ou un zoom avant de se fondre dans la suivante, donnant un sens de mouvement. Cet effet a été largement utilisé par le documentariste américain dont il porte le nom.

Dans cette étape du tutoriel, nous ne traiterons que du panoramique et du zoom ; le fondu enchaîné attendra plus tard.

L'essentiel du travail dans l'animation est effectué par un module plugin `vfx` d'~ec~. Tout ce que le script doit faire, c'est tout préparer puis l'exécuter.

~copy~

Le code ici est conçu pour fonctionner avec n'importe quelle taille de conteneur d'image, donc toutes les dimensions sont calculées en pourcentage de l'élément parent. Les données pour l'animation sont toutes contenues dans une variable appelée ~code:Spec~, avec 2 blocs de données pour le début et la fin de l'animation. Les éléments clés sont les valeurs ~code:left~, ~code:top~ et ~code:width~. ~code:width~ est le pourcentage de l'image entière qui sera affiché au début ou à la fin de l'animation. ~code:left~ est le pourcentage qui « dépassera » à gauche de la zone d'affichage et ~code:top~ la quantité correspondante qui dépassera en haut. Puisque la hauteur de l'image suit toujours sa largeur, en conservant le même rapport d'aspect, c'est tout ce dont nous avons besoin. Le paquet de données inclut aussi l'URL de l'image, le nombre d'étapes concernées et quelle étape doit faire que le script fasse quelque chose de spécial, dans ce cas arrêter l'animation.

Tout ce que nous avons à faire maintenant, c'est d'envoyer des requêtes régulières pour faire avancer l'animation d'un pas. Cela est fait par le script plutôt que par le plugin, ce qui nous permet de garder le contrôle sur le processus.

Si tu crées plus d'une animation mais que tu les mets toutes dans la même variable sous forme de tableau, la commande ~code:step~ les exécutera toutes, bien que les seules qui feront réellement quelque chose seront celles dont le compteur d'étapes n'a pas encore atteint son nombre d'étapes. Tu peux redémarrer une animation à tout moment en utilisant

```
    indexe Anim à N
    démarre Anim
```

~next:L'effet Ken Burns~
