# Utiliser Google Maps #

> 📝 *Cette traduction française d'AllSpeak est un travail en cours, produit avec l'aide d'une IA. Si vous remarquez des formulations maladroites ou des erreurs, écrivez-nous à [info@allspeak.ai](mailto:info@allspeak.ai) — vos suggestions de relecture aideront à affiner la traduction pour les futurs utilisateurs.*

L'un des points forts d'~ec~ est la manière dont il peut être étendu via des plugins. Ce sont des modules de code JavaScript qui offrent des fonctionnalités linguistiques supplémentaires aux utilisateurs du système. AllSpeak est livré avec plusieurs d'entre eux, disponibles à la demande, alors je vais te montrer comment utiliser l'un des plus intéressants.

Les cartes Google sont l'une des fonctionnalités les plus spectaculaires que l'on puisse trouver sur un site web. Elles offrent une vaste gamme de fonctions et demandent très peu d'efforts pour être intégrées à la page. Ceci dit, il faut quand même un peu de travail pour apprendre à le faire, et nous avons éliminé ce travail en construisant notre propre plugin ~ec~ pour gérer les cartes à ta place. Pour l'instant c'est un peu basique, mais nous espérons ajouter davantage de fonctionnalités au fil du temps. Clique ici pour charger le script de la carte :

~copy~

Le script construit une page en utilisant tout l'espace disponible, puis la divise en une barre ~code:Controls~ et le panneau principal de la carte lui-même. La barre ~code:Controls~ ne comporte qu'un titre mais il y a de la place pour placer les boutons dont tu pourrais avoir besoin pour contrôler le fonctionnement de ta carte.

Dans la liste des variables, tu verras ~code:gmap Map~. Cela fait partie des nouvelles fonctionnalités disponibles avec le plugin chargé, tout comme les commandes ultérieures qui font référence à la ~code:Map~.

La carte elle-même nécessite un div où la placer, puis tu peux créer la carte avec un très petit ensemble de commandes. La première chose à ajouter à la carte est une "clé API" fournie par Google pour autoriser l'utilisation d'une carte sur ce site web. Le script récupère cette clé depuis le serveur en utilisant ~code:rest get~, elle n'est donc pas codée en dur dans le script lui-même. Tu peux obtenir ta propre clé API en t'inscrivant comme développeur Google et en demandant ta clé sur la page appropriée. (Malheureusement, décrire comment faire dépasse le cadre de ces notes.)

Il ne faut que 3 informations pour configurer une carte : ~code:latitude~, ~code:longitude~ et ~code:zoom~. Expérimente avec chacune d'elles pour découvrir comment elles fonctionnent ; essaie d'obtenir une carte qui montre ta propre maison.

~next:Sélectionner, glisser et déposer~
