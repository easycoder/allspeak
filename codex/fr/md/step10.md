# Le traceur #

> 📝 *Cette traduction française d'AllSpeak est un travail en cours, produit avec l'aide d'une IA. Si vous remarquez des formulations maladroites ou des erreurs, écrivez-nous à [info@allspeak.ai](mailto:info@allspeak.ai) — vos suggestions de relecture aideront à affiner la traduction pour les futurs utilisateurs.*

La partie la plus difficile de la programmation, c'est de comprendre pourquoi les choses ne fonctionnent pas comme prévu, et pour beaucoup d'entre nous c'est le cas la plupart du temps. Pour aider à cela, les environnements de développement offrent généralement une fonctionnalité qui permet d'arrêter un programme en cours d'exécution, d'examiner ses variables et de parcourir les instructions une par une. Ton navigateur dispose d'un très bon débogueur mais tout ce qu'il te dira, c'est ce qui se passe à l'intérieur du moteur ~ec~, pas ce que fait ton script. Nous avons donc ajouté une fonctionnalité qui fait ces choses. Elle est un peu basique mais il y a des moments où elle peut beaucoup aider.

Le traceur ~ec~ a besoin que tu lui dises où il peut afficher ses informations, et cela se fait dans ton script lui-même. En revenant au rectangle rebondissant, clique sur le bouton pour obtenir le même script avec du code de traceur ajouté :

~copy~

En haut, nous avons un ~code:div~ supplémentaire appelé ~code:Tracer~. La première chose que fait le script est de créer ce div, en lui donnant un id spécifique ; une valeur spéciale connue d'~ec~.

Plus loin dans le programme, au début de la boucle principale, nous voulons commencer à examiner notre script en cours d'exécution. Dans cet exemple, il n'y a que 2 choses sur lesquelles nous pouvons demander des informations : les valeurs de ~code:Angle~ et ~code:Height~. Tu ne peux demander que les valeurs de variables numériques ou chaîne de caractères ordinaires ; prendre en charge d'autres types ajouterait énormément à la taille d'~ec~ pour quelque chose qui est relativement peu utilisé. À la ligne 26, la première commande ~code:trace~ prend une liste des variables que nous voulons inspecter et indique si elles doivent être présentées horizontalement sur une ligne ou verticalement. Cette commande est optionnelle ; parfois tu veux juste savoir où tu te trouves sans avoir besoin de connaître les valeurs des variables.

La seconde commande ~code:trace~ fait s'arrêter le programme lorsqu'elle est atteinte. Elle affiche les variables que tu as demandées plus les 5 dernières lignes exécutées avant d'atteindre la commande trace, puis s'arrête. Tu peux lui demander de continuer d'un pas ou de reprendre l'exécution sans s'arrêter.

Si tu exécutes ce script, tu verras tout cela se produire, et lorsque tu parcourras le code pas à pas, les valeurs de ~code:Angle~ et ~code:Height~ augmenteront, l'une plus vite que l'autre.

Une fois que tu as diagnostiqué et corrigé le problème que tu rencontrais, tu peux supprimer le code du traceur et le programme fonctionnera normalement.

~next:Interactivité~
