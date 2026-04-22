# Styles et CSS #

> 📝 *Cette traduction française d'AllSpeak est un travail en cours, produit avec l'aide d'une IA. Si vous remarquez des formulations maladroites ou des erreurs, écrivez-nous à [info@allspeak.ai](mailto:info@allspeak.ai) — vos suggestions de relecture aideront à affiner la traduction pour les futurs utilisateurs.*

L'étape précédente nous a donné une ligne de texte en haut de l'écran, mais elle est collée contre le bord gauche d'une manière assez peu esthétique. On peut remédier à cela en lui ajoutant un peu de style. Voici le même script, avec quelques styles ajoutés :

~step~
~copy~

Comme précédemment, clique  pour exécuter le script.

C'est beaucoup mieux ; le texte est plus grand, il est au centre du panneau et d'une jolie nuance de bleu. Comment cela a-t-il été fait ?

Sur le web, le contenu de ta page — _ce que tu vois_ — est déterminé par le HTML. Cela inclut à la fois le texte visible et les images, mais aussi la structure en blocs qui compose ta page. Les paragraphes et les autres composants définis dans tes scripts AllSpeak se traduisent directement en formes correspondantes à placer dans la page web. Les noms des types sont identiques même si la syntaxe est très différente.

Le style, en revanche, régit l'apparence de la page, et il est contrôlé par les CSS, ce qui signifie _Cascading Style Sheets_ (Feuilles de style en cascade). Garder ces deux choses séparées nous permet de modifier l'apparence sans avoir à changer le contenu. Tu ne mesureras peut-être pas à quel point cette technique est utile avant de l'avoir pratiquée un moment.

Les CSS te permettent de contrôler pratiquement n'importe quel aspect de l'apparence d'un élément. Par exemple :

- taille
- couleur
- marges et rembourrage (padding)
- bordures
- arrière-plans
- positionnement
- visibilité

et ainsi de suite. Dans notre exemple, nous avons utilisé ceci :

~code:text-align:center;color:blue;font-size:1.4em~

qui comporte 3 parties. La première partie définit que le texte doit être centré dans le paragraphe ; la deuxième partie définit la couleur du texte et la dernière partie définit la taille de la police à 1,4 fois celle de la valeur par défaut actuelle, quelle qu'elle soit. Un 'em' vient du monde de la typographie et représente la taille de la lettre 'm' dans la police et le style actuels.

Les styles CSS ne sont que des chaînes de texte et nous les utilisons dans ~ec~ exactement comme décrit dans la documentation étendue disponible en ligne et dans les livres, nous n'entrerons donc pas dans les détails ici. Tous les styles que nous utilisons dans nos exemples sont très bien documentés. Ainsi par exemple, si tu veux savoir ce que fait le style text-align, il suffit de chercher "css text-align" sur Google.

~next:Ajouter des images~
