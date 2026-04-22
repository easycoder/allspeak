# Introduction au DOM #

> 📝 *Cette traduction française d'AllSpeak est un travail en cours, produit avec l'aide d'une IA. Si vous remarquez des formulations maladroites ou des erreurs, écrivez-nous à [info@allspeak.ai](mailto:info@allspeak.ai) — vos suggestions de relecture aideront à affiner la traduction pour les futurs utilisateurs.*

Toutes les pages web sont composées de composants HTML ; une sorte de concept de poupées russes étendu où des conteneurs contiennent d'autres conteneurs qui contiennent des images ou du texte... et ainsi de suite. Cette structure s'appelle le Document Object Model, ou DOM en abrégé. Dans cette étape, nous créerons une page web avec un seul composant qui contient simplement du texte. Nous ne nous attendons pas à ce que tu connaisses quoi que ce soit sur le DOM ou le HTML ; tout ce dont tu as besoin sera introduit au fur et à mesure.

Il existe différents types de composants qui peuvent contenir du texte. Les en-têtes, les éléments paragraphe, les spans, les champs de texte et les divisions sont parmi les plus courants. Dans cet exemple nous créerons un élément paragraphe et y mettrons une phrase bien connue. Le script ressemble à ceci :
~step~
Lorsque le script s'exécute, le texte apparaîtra dans le panneau d'exécution et masquera ce texte du tutoriel. Tu peux basculer entre les panneaux Exécution et Aide en cliquant sur le bouton  (Cycle). Essaie pour voir. (Sur mobile, le bouton  fait défiler les trois panneaux Code-Exécution-Aide.)

~copy~

Il se passe pas mal de choses ici, alors je vais expliquer. La première ligne est un commentaire qui peut être ignoré. Ensuite il y a ~code:p Para~, qui est une déclaration de variable, un terme technique de programmeur signifiant une définition d'un endroit où tu peux stocker des informations. Dans le monde réel, tu pourrais avoir 2 chiens, appelés Rex et Médor. Lorsque tu fais référence au premier dans une conversation, tu pourrais bien dire "Voici mon chien Rex". Ton interlocuteur (la personne à qui tu parles) sait ce qu'est un chien, et à l'écrit nous confirmons que Rex est un nom parce que nous l'écrivons avec une majuscule. Une fois que nous avons identifié l'animal en question, nous pouvons nous référer à lui simplement comme Rex sans avoir à répéter 'mon chien'.

~ec~ fonctionne de la même manière que l'anglais (et le français). Je dois être clair à ce sujet car, pour une raison curieuse, la plupart des autres langages de programmation font les choses exactement à l'inverse, en commençant les noms par des lettres minuscules et les types par des lettres majuscules. Pour de nombreux débutants, c'est contre-intuitif, donc nous préférons suivre la manière de la langue naturelle.

D'après ce qui précède, tu as peut-être déduit que ~code:Para~ est le nom de quelque chose et ~code:p~ est le nom de ce type de chose. Si c'est le cas, tu as deviné juste. Un objet de type ~code:p~ est un paragraphe de texte, et ici nous en avons un appelé ~code:Para~. En lui donnant un nom, nous pouvons le distinguer d'un autre paragraphe appelé ~code:Para2~, tout comme Rex et Médor ne sont pas le même chien. Ce que nous faisons c'est dire à ~ec~ que nous utiliserons un paragraphe et que nous aimerions nous y référer comme ~code:Para~.

Un script ~ec~ typique peut avoir de nombreuses variables et il est conventionnel de toutes les placer au début, puis de mettre une ligne vide après elles pour aider le programmeur, tout comme les livres divisent le texte en paragraphes, listes et titres. C'est plus facile à suivre pour l'œil. Les lignes vides n'ont absolument aucun effet sur la façon dont le programme fonctionne.

La ligne suivante est crée ~code:Para~. Nous avons déjà annoncé que nous voulons un paragraphe, alors ici nous le créons. Dans certains langages de programmation (JavaScript, par exemple), les variables n'ont pas de types ; elles sont toutes des _choses_ arbitraires. (Dans le monde réel, il est inconcevable que nous puissions fonctionner si la langue ne nous permettait pas de dire si quelque chose est un chien, un chat ou un fauteuil, mais cela semble fonctionner assez bien dans le monde informatique.) La plupart des autres langages ont besoin de savoir de quel type est une variable pour pouvoir la créer. Cette approche s'appelle le _typage fort_. ~ec~ se situe quelque part entre les deux ; bien que ses variables soient 'typées', elles peuvent parfois contenir des données de types différents. Plus précisément, les nombres et les chaînes peuvent tous deux être contenus dans une variable ordinaire et dans la plupart des cas ~ec~ sait quand convertir l'un vers l'autre.

Un paragraphe est l'endroit où tu mets du texte sur ta page web ; c'est un _conteneur_ de texte. ~ec~ place ton nouveau paragraphe tout en haut de la page, contre la marge de gauche, mais tant que tu n'y ajoutes pas de texte, tu ne pourras pas le voir parce qu'il est transparent. Donc la ligne suivante du script ajoute du texte.

Enfin, la commande ~code:arrête~ empêche le script de se terminer avant même que tu aies eu la chance de voir le texte.

Comme pour les exemples précédents, l'éditeur a effectué un codage par couleur. Les variables sont toujours affichées en bleu et les nombres en vert. Tout mot affiché en noir fait partie de ~ec~ lui-même.

~next:Styles et CSS~
