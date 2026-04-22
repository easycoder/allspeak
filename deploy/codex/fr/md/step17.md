# Sélectionner, glisser et déposer #

> 📝 *Cette traduction française d'AllSpeak est un travail en cours, produit avec l'aide d'une IA. Si vous remarquez des formulations maladroites ou des erreurs, écrivez-nous à [info@allspeak.ai](mailto:info@allspeak.ai) — vos suggestions de relecture aideront à affiner la traduction pour les futurs utilisateurs.*

Les interfaces graphiques interactives offrent fréquemment à l'utilisateur la possibilité de déplacer des éléments à l'écran, comme alternative au copier-coller. Sous le capot, l'implémentation peut être plutôt complexe car il y a généralement beaucoup de choses à considérer ; des choses spécifiques à l'application particulière.

Dans ~ec~, la fonctionnalité de base glisser-déposer fournit une base solide sur laquelle construire des fonctionnalités bien plus complexes. L'exemple présenté ici est aussi simple que possible ; sur la page suivante il y a un exemple plus complexe.

~copy~

Le script construit un écran simple contenant un seul composant qui peut être saisi et déplacé. Le composant peut être presque n'importe quel élément ; la seule chose qui nécessite une attention particulière est le texte, qui affiche normalement un curseur en forme de I lorsque le pointeur passe dessus. Dans cet exemple, le curseur est forcé à la flèche par défaut.

Le script a 2 éléments et une poignée de variables. L'élément Container n'existe que pour porter le style CSS ~code:position:relative~, qui permet aux éléments à l'intérieur d'avoir un positionnement absolu. (Ce n'est pas très intuitif mais c'est comme ça que ça marche.) Le ~code:Component~ est l'objet que nous allons faire glisser ; c'est simplement une chaîne de texte.

Le script s'intéresse à 2 événements : l'un lorsque l'utilisateur clique à l'intérieur du composant, l'autre lorsque l'élément est ensuite glissé. Pour le premier, nous devons savoir où la « prise » s'est produite par rapport au coin supérieur gauche de la fenêtre. Il faut aussi savoir où le composant se trouve actuellement par rapport à son parent (pour pouvoir changer cette valeur).

Lorsqu'un événement de glissement se produit, le script obtient la position du pointeur (ou du doigt sur un écran mobile) et calcule de combien il s'est déplacé depuis la position de « prise ». Il ajoute à cela la position précédente du composant dans son conteneur et le résultat est utilisé pour définir une nouvelle position.

Le système te permet aussi de spécifier ce qui se passe lorsque le composant est relâché. Ici, nous utilisons l'action par défaut, qui est simplement d'arrêter le glissement du composant.

~next:Solitaire~
