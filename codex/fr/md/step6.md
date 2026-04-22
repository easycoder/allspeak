# Ajouter des images #

> 📝 *Cette traduction française d'AllSpeak est un travail en cours, produit avec l'aide d'une IA. Si vous remarquez des formulations maladroites ou des erreurs, écrivez-nous à [info@allspeak.ai](mailto:info@allspeak.ai) — vos suggestions de relecture aideront à affiner la traduction pour les futurs utilisateurs.*

Les pages web sont souvent très visuelles, avec beaucoup d'images, donc avant de continuer avec des sujets de programmation plus traditionnels, je vais te montrer comment créer une page avec une image et un titre.

Quand tu regardes le HTML d'une page web, tu ne vois jamais d'images ; ce n'est qu'un document texte. Alors comment les images arrivent-elles sur la page ?

Quand nous avons besoin d'une image, nous fournissons des informations qui indiquent au navigateur comment la trouver, quelque part sur Internet où elle est stockée sur un ordinateur. Nous donnons ces informations sous la forme d'une URL, ce qui signifie _Uniform Resource Locator_ (Localisateur uniforme de ressource). On l'appelle aussi "l'adresse" de l'image.

Le code qui suit récupère une image depuis notre propre serveur web, la met à l'échelle pour qu'elle occupe 70 % de la largeur de la page et la place centrée avec un titre en dessous.

~step~
~copy~

Le script ne commence pas par du code de programme mais par un commentaire. Les commentaires sont destinés aux lecteurs humains ; tu peux les mettre partout où tu ressens le besoin d'expliquer — à quelqu'un d'autre ou à ton toi futur — ce qui se passe dans ton code. Les commentaires commencent par un point d'exclamation et continuent jusqu'à la fin de la même ligne, tu peux donc les placer sur leur propre ligne (comme ici) ou bien après — et sur la même ligne que — une commande du script.

Les commentaires sont le sujet de bien des débats entre programmeurs. Certains n'aiment pas écrire de commentaires, affirmant que le code lui-même devrait être auto-explicatif, tandis que d'autres ressentent le besoin d'en ajouter pour expliquer l'intention derrière le code, qui fait souvent défaut autrement. Nous te laissons faire comme tu préfères.

Ensuite, nous avons 3 variables de types différents. Un ~code:div~ est une division d'une page ; un conteneur à l'intérieur duquel d'autres éléments peuvent être placés. Beaucoup de pages web sont composées de nombreux divs à l'intérieur d'autres divs, la plupart invisibles et ne fournissant que la structure globale.

La variable ~code:img~ est l'endroit où nous placerons notre image, et la variable ~code:p~ est pour le titre qui se trouve en dessous.

D'abord, nous créons le conteneur, en lui donnant un alignement centré, une marge autour, une bordure grise, un peu de rembourrage à l'intérieur pour tenir son contenu à l'écart de la bordure et une couleur d'arrière-plan. Comme expliqué à l'étape précédente, ce sont tous des attributs CSS standard que tu peux rechercher. La liste des styles est assez longue, donc pour éviter que la ligne ne passe à la ligne dans l'éditeur, je l'ai divisée en 2 parties avec un ~code:cat~ entre elles. "Cat" est l'abréviation de "catenate" (concaténer), qui joint simplement 2 morceaux de texte ensemble.

L'élément image est ensuite créé. Note que la commande demande qu'il soit créé à l'intérieur du conteneur ; par défaut, il se placerait en dessous. La largeur de l'image est définie à 70 % de son élément contenant et par défaut la hauteur s'ajustera pour maintenir les mêmes proportions. Puis nous demandons l'image elle-même à notre serveur. Lorsque des ressources telles que des graphiques se trouvent sur le même serveur que le code qui les utilise, il est courant que l'URL ne commence pas par le ~code:http://~ habituel ; ici nous avons un chemin relatif qui se réfère à un dossier sur le serveur. En tant que programmeur, tu sauras évidemment où sont stockées tes images.

Le texte du titre comprend plusieurs lignes. Dans une page web, un saut de ligne se demande en utilisant le mot ~code:break~, et pour garder les choses bien rangées ici, la chaîne entière est divisée en lignes et concaténée ensemble.

~next:Animation simple~
