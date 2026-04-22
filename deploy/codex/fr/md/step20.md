# L'effet Ken Burns #

> 📝 *Cette traduction française d'AllSpeak est un travail en cours, produit avec l'aide d'une IA. Si vous remarquez des formulations maladroites ou des erreurs, écrivez-nous à [info@allspeak.ai](mailto:info@allspeak.ai) — vos suggestions de relecture aideront à affiner la traduction pour les futurs utilisateurs.*

Dans cette étape du tutoriel, nous allons compléter l'effet Ken Burns en ajoutant quelques images supplémentaires ainsi qu'un fondu enchaîné entre elles. Chacune des images s'animera selon son propre jeu de règles, de sorte que l'effet global est celui d'un mouvement continu. À la télévision, cela donne l'impression de regarder une vidéo plutôt qu'un diaporama, et c'est pour cela que l'effet est si populaire.

~copy~

La majeure partie du code consiste en les spécifications de chacune des 9 images. (Les images représentent toutes des scènes arbitraires dans le nord de l'Italie). Le code fait à peu près la même chose que l'exemple panoramique/zoom, sauf qu'il se répète dans une boucle, une fois pour chaque image. Tout cela est géré en faisant de ~code:Anim~ et ~code:Spec~ des tableaux de 9 éléments chacun.

La clé de l'effet réside dans les transitions. En haut, nous définissons le style qui fera apparaître ou disparaître une image en fondu d'un niveau d'opacité à un autre. Le code fait en sorte que l'image courante s'estompe tandis que l'image suivante apparaît, créant ainsi un fondu enchaîné. Nous réglons un déclencheur sur chaque image, une seconde avant la fin de son zoom/panoramique, de sorte que le fondu a lieu à la fin d'une image et au début de la suivante. Le zoom/panoramique des 2 images s'exécute simultanément et les images sont organisées en liste circulaire, de sorte que l'effet se répète indéfiniment.

---

## C'est terminé !

Félicitations — tu as complété le tutoriel Codex de ~ec~. En chemin, tu as abordé les variables, l'arithmétique, la manipulation de chaînes, le DOM, les styles, les images, l'animation, l'interaction avec l'utilisateur, les jeux, les listes, le tri, le filtrage, Google Maps, le glisser-déposer et les effets visuels. C'est une base solide pour construire de vrais sites web.

Tout ce que tu as appris ici se transfère directement à la construction d'applications web complètes. La page ~link:background:Informations générales~ contient davantage d'informations sur la philosophie derrière ~ec~, et le Manuel du Programmeur (clique sur l'icône du livre ci-dessus) est ta référence pour rechercher n'importe quelle commande.

Bon codage !
