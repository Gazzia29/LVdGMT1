function refHistoire(){
  var page = localStorage.numpage;
  if (page == "Classe"){
    $("#histoireTitle").html("Errance");
    $("#histoire").html("Cela fait plusieurs jours d\'été que vous errez dans les plaines collineuses du Soufflant : une terre rurale, dont les quelques hameaux chaleureux sont peuplés de bons vivants.<br>Vous êtes "+localStorage.pseudo+", un "+localStorage.race+" d'une petit vingtaine d'années aux aspirations héroïques, mais vous n'avez encore jamais accompli de quoi vous attribuer le respect de vos concitoyens, au hameau fermier de Fumier-Sechant -où vous avez grandi et rêvé de gloire toute une enfance, à quelques kilomètres au sud.<br><br>Il est notable que vous êtes très doué dans un domaine :");
  }
  if (page == "ClasseMage"){
    $("#histoireTitle").html("Des facultés magiques");
    $("#histoire").html("Vous vous renseignez depuis quelques temps sur les énergies qui modèlent ce monde, et comment canaliser vagues et roulants de ces fluctuations imperceptibles.<br>Cependant misérables restent les bluettes, que vous parvenez avec hargne à sortir de vos doigts !-de quoi allumer un feu de camp cependant ! En vous concentrant totalement, vous arrivez à faire s'élever de quelques centimètres un petit caillou.. Rien de spectaculaire, en somme.<br>Il vous faudrait rencontrer un mage, pour vous enseigner les rudiments de la maîtrise des forces ésotériques.<hr class='hr2'>Ayant choisi la classe Mage, votre <b>Force baisse de 50%</b>, mais votre <b>Puissance Magique augmente de 50%</b>.");
  }
  if (page == "ClasseGuerrier"){
    $("#histoireTitle").html("Aisance avec les armes");
    $("#histoire").html("Fils du Soufflant -fermier donc-, vous aviez dès tout petit eu accès à la remise à outils dans la grange. <br>Jusqu'à vos vingt ans vous passiez votre maigre temps libre à éventrer des épouvantails avec une fourche, imaginant un adversaire griffes, crocs et poils tendus vers vous..<br>S'ensuivait la laborieuse tache (emplie de regret) de raccomodage des mannequins en lambeaux -pour ne pas avoir à subir griffes, crocs et poils tendus de votre père.<hr class='hr2'>Ayant choisi la classe Guerrier, votre <b>Force augmente de 50%</b>, mais votre <b>Puissance Magique baisse de 50%</b>.");
  }
  if (page == "ClasseEloquent"){
    $("#histoireTitle").html("Un regard irrésistible");
    $("#histoire").html("A Fumier-Sechant, vous aviez un charme fou.<br>Séduire les filles de fermiers -malheureusement boutonneuses, souvent- était chose facile, les gens et les vaches se retournaient sur votre ombre, et l'imposante Mère Fridethel (une femme au coeur d'or, celle-là) avait toujours une belle part de tarte au poumon de boeuf préparée pour votre prochain passage..<br>Vraiment, l'art et la manière du Verbe et du sourire en coin ne vous font pas défaut.<hr class='hr2'>Ayant choisi la classe Éloquent, vous pouvez accomplir des <b>actions de persuasion</b> uniques, et les <b>prix des marchands seront 25% moins élevés</b>.");
  }
  if (page == "ClasseAgile"){
    $("#histoireTitle").html("Une souplesse à toute épreuve");
    $("#histoire").html("Enfant, vous aviez un rite nocture fréquent.<br>Doucement -sans un bruit surtout- vous vous glissiez hors des draps, entrabailliez la lourde porte de votre chambre, posiez le pied sur les lattes (mémorisées) qui ne grincaient pas ; puis vous vous feutriez un chemin à travers la masure puis le village. Vous vous introduisiez alors chez la Mère Fridethel assoupie et chipiez les plus belles de ses tartes au poumon de boeuf pour aller les déguster dans les champs endormis : seul et heureux, dans  la douceur sombre et profonde de la nuit.<hr class='hr2'>	Ayant choisi la classe Agile, vous pouvez accomplir des actions d'<b>agilité</b> uniques, et vous êtes <b>50% plus discret et souple</b>.");
  }
  if (page == 2){
    $("#histoireTitle").html("Errance");
    $("#histoire").html("Vous voilà planté au coeur de la plaine du Soufflant. Les sauterelles chantent sous le ciel d'azur. Malgré son nom, la plaine est chaude l'été mais pas la moindre brise ne se fait ressentir.<br>En vérité vous êtes trempé de sueur.<br>En regardant vers <u>l'Ouest</u>, vous apercevez un <b>petit bois</b> où vous pourrez vous rafraîchir.<br>Vers <u>l'Est</u>, une petite <b>cabane en bois</b> se dresse sur une colline.<br>Au <u>Nord</u>, le <b>chemin</b> de terre continue et serpente vers un vallon.");
  }
  if (page == 2.1){
    $("#histoireTitle").html("Une fraîcheur bien méritée");
    $("#histoire").html("De l'ombre ! Enfin !<br>Vous voilà à l'entrée d'un petit bois de cérembles.<br>Vous vous apprêtez à vous asseoir au pied d'un jeune tronc, quand vous entendez un bruit : une eau qui rigole un peu plus loin.");
  }
  if (page == 2.11){
    $("#histoireTitle").html("Un torrent qui s'enfuit");
    $("#histoire").html("Derrière le bois, une petite rivière clairette court entre les rochers moussus. L'eau chantante est transparente, et sur le bord, vous observez des têtards -tout sémillants dans l'onde fraîche- entamant l'aventure de la vie.<br>L'endroit est très tranquille et serait propice à une petite halte.");
  }
  if (page == 2.2){
    $("#histoireTitle").html("Une bâtisse dominant la colline");
    $("#histoire").html("Alors que vous marchez vers le haut de la colline, vos yeux se plissent pour deviner les détails de la facade de la masure, qui se dresse sinistrement à contre-jour sous le ciel riant.<br>Le toit en rondins est bouché par endroits avec du chaume ; Les ouvertures sont condamnées, et par les fentes du bois vous ne distinguez que l'obscurité.<br>Que faites-vous ?");
  }
  if (page == 2.211){
    $("#histoireTitle").html("De la poussière et une moitié de corps");
    $("#histoire").html("Au coeur de la pièce gît la triste victime du précédent carnage -version décomposée-. La vue des entrailles coulant du cadavre par le flanc, au milieu d'un essaim de mouches et de larves, vous retourne l'estomac.<br>Dans la pièce sombre, vous ne voyez à première vue rien qui vous retiendrait près de la source de cette odeur putride.");
  }
  if (page == 2.22){
    $("#histoireTitle").html("Remember to look on the bright side");
    $("#histoire").html("Vous faites le tour du bâtiment et arrivez côté Est.<br> Cette face de la maison est baignée de soleil mais dans le fatras qui repose contre le mur, rien ne vous paraît bien utile : du bois bouffé, une tête de pioche, une vieille pelle qui semble prête à céder, le tout soigneusement raccordé par des toiles d'araignées.<br>De ce côté, la masure paraît bien moins imposante et tout à fait tranquille, comme assoupie par le soleil du Soufflant.");
  }
  if (page == 3){
    $("#histoireTitle").html("La cité du Bec");
    $("#histoire").html("Devant-vous, plantée dans le \"bec\" de la Bruisse (c'est à dire le petit vallon qui sépare les deux plus grosses hauteurs de la chaîne montagneuse de la Bruisse), s'étend la magnifique petite cité marchande de Merryvale. Ou plutôt AURAIT dû s'étendre.<br>Au lieu de ça, une muraille fraîchement élevée vous bloque la vue, ainsi que l'entrée de la ville. La porte principale est surveillée par un garde gigantesque en cotte de mailles blanche et casque d'acier.<br>Que faites-vous ?");
  }
  if (page == 3.2){
    $("#histoireTitle").html("Plan B");
    $("#histoire").html("En suivant le mur, vous rencontrez un trou à dimension humaine menant à un tunnel souterrain. En regardant la courbe de ce dernier et en entendant un bruit d'eau qui court sous la terre venant du trou, vous évaluez que la sortie du tunnel devrait être les égouts de Merryvale !<br>Le hic : le tunnel est en partie éboulé. Si seulement vous aviez une pelle, même une vieille pelle ferait l'affaire..");
  }
  if (page == 4){
    $("#histoireTitle").html("Vous entrez à Merryvale");
    $("#histoire").html("Vous quittez la région du Soufflant en entrant à Merryvale, une page se tourne !<br>Qui sait ce que vous réserve l'avenir ?");
  }
  if (page == 5.1){
    $("#histoireTitle").html("Porte du Soufflant");
    if (localStorage.dirFrom=="Sud"){
  		$("#histoire").html("<i>Vous vous trouvez à l'entrée Sud de la ville.<br>Vous pouvez décider d'emprunter trois rues différentes :</i><br><br><b>En face</b><br>La <u>rue du Marché</u> monte doucement vers le Nord. Cela semble être l'artère principale de la ville, au vu de sa largeur.<br><b>A gauche,</b><br>l'étroite <u>rue de la Clef</u> serpente entre les bâtiments.<br>Du coin de l'oeil, vous remarquez qu'un angulain vous observe, adossé à un mur à l'entrée de la rue de la Clef.<br><b>A droite</b><br>La <u>rue Blanche</u> file avec goût entre un bâtiment et un parterre de fleurs au pied du mur.");
  	}
  	if (localStorage.dirFrom=="Nord"){
  		$("#histoire").html("<i>Vous quittez la rue du Marché et êtes de retour à l'entrée Sud de la ville et son carrefour.<br>Vous pouvez décider d'aller :</i><br><br><b>A gauche</b><br>La <u>rue Blanche</u> file avec goût entre un bâtiment et un parterre de fleurs au pied du mur.<br><b>A droite,</b><br>l'étroite <u>rue de la Clef</u> serpente entre les bâtiments.<br>L'angulain vous observe toujours, adossé à un mur à l'entrée de la rue de la Clef.<br><b>Ou faire demi-tour</b><br> et retourner rue du Marché.");
  	}
  	if (localStorage.dirFrom=="Ouest"){
  		$("#histoire").html("<i>Vous quittez la rue de la Clef et êtes de retour à l'entrée Sud de la ville et son carrefour.<br>Vous pouvez décider d'aller :</i><br><br><b>En face</b><br>La <u>rue Blanche</u> file avec goût entre un bâtiment et un parterre de fleurs au pied du mur.<br><b>A gauche,</b><br>La <u>rue du Marché</u> monte doucement vers le Nord.<br>L'angulain vous observe toujours, adossé à un mur à l'entrée de la rue de la Clef.<br><b>Ou faire demi-tour</b><br> et retourner rue de la Clef.");
  	}
  	if (localStorage.dirFrom=="Est"){
  		$("#histoire").html("<i>Vous quittez la rue Blanche et êtes de retour à l'entrée Sud de la ville et son carrefour.<br>Vous pouvez décider d'aller :</i><br><br><b>En face</b><br>l'étroite <u>rue de la Clef</u> serpente entre les bâtiments.<br>L'angulain vous observe toujours, adossé à un mur à l'entrée de la rue de la Clef.<br><b>A droite,</b><br>La <u>rue du Marché</u> monte doucement vers le Nord.<br><b>Ou faire demi-tour</b><br> et retourner rue Blanche.");
  	}
  }
  if (page == 5.2){
    $("#histoireTitle").html("Rue du Marché");
    if (localStorage.dirFrom=="Aucune" || localStorage.dirFrom=="Est" || localStorage.dirFrom=="Ouest"){
  		$("#histoire").html("<i>Vous êtes dans une rue large et claire, qui relie la porte Sud et la place du Marché.<br>Le soleil baigne sur votre visage. Vous pouvez aller :</i><br><br><b>En face</b><br>Vous allez en direction du <u>marché</u>.<br><b>A gauche</b><br>la <u>porte</u> close d'une demeure, au numéro 1.<br><b>A droite</b><br>une <u>ruelle</u> relie l'artère vers la rue Blanche.<br><b>Ou derrière-vous</b><br> aller vers Porte sud.");
  	}
    if (localStorage.dirFrom=="Sud"){
  		$("#histoire").html("<i>Vous êtes dans une rue large et claire, qui relie la porte Sud et la place du Marché.<br>Le soleil baigne sur votre visage. Vous pouvez aller :</i><br><br><b>En face</b><br>Vous continuez en direction du <u>marché</u>.<br><b>A gauche</b><br>la <u>porte</u> close d'une demeure, au numéro 1.<br><b>A droite</b><br>une <u>ruelle</u> relie l'artère vers la rue Blanche.<br><b>Ou faire demi-tour</b><br> et retourner Porte sud.");
  	}
  	if (localStorage.dirFrom=="Nord"){
  		$("#histoire").html("<i>Vous êtes toujours sur la rue du Marché, en direction de la Porte Sud<br> Vous pouvez aller :</i><br><br><b>En face</b><br>Vous continuez en direction de la <u>Porte sud</u>.<br><b>A gauche</b><br>une <u>ruelle</u> relie l'artère vers la rue Blanche.<br><b>A droite</b><br>la <u>porte</u> close d'une demeure, au numéro 1.<br><b>Ou faire demi-tour</b><br> et retourner en direction du marché.");
  	}
  }
  if (page == 5.3){
    $("#histoireTitle").html("Rue du Marché");
    if (localStorage.dirFrom=="Est" || localStorage.dirFrom=="Ouest" || localStorage.dirFrom=="Nord" || localStorage.dirFrom=="Aucune"){
  		$("#histoire").html("<i>Vous êtes sur la rue du Marché.<br>Vous pouvez aller :</i><br><br><b>En face</b><br>et entrer sur le <u>Marché</u>.<br><b>A gauche</b><br>la <u>porte</u> close d'une demeure, au numéro 3.<br><b>A droite</b><br>se trouve un <u>dispensaire</u>, au numéro 2.<br><b>Ou derrière vous</b><br> aller vers la Porte sud.");
  	}
    if (localStorage.dirFrom=="Sud"){
  		$("#histoire").html("<i>Vous êtes toujours sur la rue du Marché.<br>Vous pouvez aller :</i><br><br><b>En face</b><br>et entrer sur le <u>Marché</u>.<br><b>A gauche</b><br>la <u>porte</u> close d'une demeure, au numéro 3.<br><b>A droite</b><br>se trouve un <u>dispensaire</u>, au numéro 2.<br><b>Ou faire demi-tour</b><br> et retourner vers la Porte sud.");
  	}
    if (localStorage.dirFrom=="Dispensaire"){
  		$("#histoire").html("<i>Vous sortez du Dispensaire sur la rue du Marché.</i><br><br><b>En face</b><br>la <u>porte</u> close d'une demeure, au numéro 3.<br><b>A gauche</b><br>vous retournez vers la </u>Porte Sud</u><br><b>A droite</b><br>vous entrez sur la <u>Place du Marché</u><br><b>Derrière vous</b><br>vous pouvez retourner dans le dispensaire.");
  	}
  }
  if (page == 5.31){
    $("#histoireTitle").html("Une odeur de mort");
    $("#histoire").html("Vous êtes au Dispensaire du Cavalier Assoupi. Devant vous, une arche mène à la salle de repos, de laquelle s'échappent des râles de douleur des victimes de l'armée invisible, mais où vous pourrez vous faire soigner.<br>Sur votre gauche, un petit couloir mène à une porte fermée, indiquant \"Privé\".");
  }
  if (page == 5.311){
    $("#histoireTitle").html("Une question de chance");
    $("#histoire").html("Vous êtes dans une grande pièce sans fenêtre éclairée à la bougie, où des lits occupés par des mourants sont alignés en rangs serrés. L'ambiance est étouffante.<br> Une jeune femme entièrement voilée de tissu blanc accourt vers vous, l'air débordée :<br><i>\"Je ne peux rien pour vous, tout le personnel de l'établissement a été touché par l'attaque et j'ai été la seule volontaire pour les remplacer, mais je ne sais pas soigner les malades !<br>Il y a dans ce placard <b>dix potions</b> indifférenciables.. Le problème réside dans leurs effets très hasardeux..\"</i><hr class='hr2'>Elle vous explique qu'elle sait seulement que sur les 10 potions :<br><b>1 soignera tous vos maux, et étendra votre vie max de 20pts,<br>1 autre vous soignera de 50pts,<br>3 autres vous soigneront de 25pts,<br>1 autre vous soignera de seulement 10pts,<br>MAIS<br>1 autre est seulement un remède contre la toux,<br>1 autre est un faible poison qui vous infligera 20pts de dommages,<br>2 autres sont des poisons violents qui vous tueront instantanément.</b><br>Accepterez-vous ce jeu mortel ?");
  }
  if (page == 5.312){
    $("#histoireTitle").html("Privé");
    $("#histoire").html("Alors que vous vous approchez de la petite porte, une infirmière déboule et vous interpelle : \"Ces locaux sont privés ! Je vous prie de revenir par ici !\" Vous obtempérez.");
  }
  if (page == 6.1){
    $("#histoireTitle").html("Rue de la Clef");
    if (localStorage.dirFrom=="Est"){
  		$("#histoire").html("<i>Le soleil peine à passer entre les bâtiments élevés de l'étroite rue de la Clef.</i><br><br><b>En face</b><br>La mince rue continue après un crochet vers le Nord<br><b>A gauche</b><br>Deux bâtiment:<br><u>Au 8</u>, bâtiment à la forme singulière, une double porte -entrouverte- complexe et d'un bois foncé. Des chants s'en échappent.<br><u>Au 8bis</u>, une porte simple en bois. Ce doit être une habitation.<br><b>A droite</b><br>Une porte mène au numéro 7.<br><b>Derrière vous</b><br>la rue mène à la Porte Sud.<br>Que faites-vous ?");
  	}
  	if (localStorage.dirFrom=="Nord"){
  		$("#histoire").html("<i>Vous avez descendu la rue de la Clef et êtes dans la portion qui débouche vers la Porte Sud.</i><br><br><b>En face</b><br>La rue mène à la <u>Porte Sud</u><br><b>A gauche</b><br>Une porte mène au numéro 7.<br><b>A droite</b><br>Deux bâtiment:<br><u>Au 8bis</u>, une porte simple en bois. Ce doit être une habitation.<br><u>Au 8</u>, bâtiment à la forme singulière, une double porte -entrouverte- complexe et d'un bois foncé. Des chants s'en échappent.<br><b>Derrière vous</b><br>La rue monte vers la place du marché.<br>Que faites-vous ?");
  	}
    if (localStorage.dirFrom=="Door8"){
  		$("#histoire").html("<i>Vous sortez du temple sur l'étroite rue de la Clef.</i><br><br><b>A gauche</b><br>La mince rue continue après un crochet vers le Nord<br><b>En face</b><br>Une porte mène au numéro 7.<br><b>A droite</b><br>la rue mène à la Porte Sud.<br><u>Au 8bis</u>, une porte simple en bois. Ce doit être une habitation.<br><b>Derrière vous</b><br>Deux bâtiment:<br><u>Au 8</u>, bâtiment à la forme singulière, une double porte -entrouverte- complexe et d'un bois foncé. Des chants s'en échappent.<br>Que faites-vous ?");
  	}
  }
  if (page == 6.11){
    $("#histoireTitle").html("Hall");
    $("#histoire").html("<i>Vous entrez dans un petit hall de pierre.<br>Sur les murs et la voûte du plafond, d'épaisses runes semblent raconter une histoire que vous ne pouvez pas saisir.<br>Dans un coin, un Oculain vêtu d'une toge violette dort profondément sur une chaise.</i><hr class='hr2'>"+
    "<b>Dans la pièce</b><br>Au centre, un guéridon fleuri porte une petite pancarte \"Temple du Grand Malgré-Tout\".<br>"+
    "<b>A gauche</b><br>Une petite porte en bois rouge.<br>"+
    "<b>A droite</b><br>Une petite porte sombre indique \"Loge du Maître\" et semble mener au 8 de la rue.<br>"+
    "<b>En face</b><br>Un grande porte fermée. Elle est très travaillée et en bois blanc.<br>C'est de là que provient la musique que vous entendiez depuis la rue.<br><b>Derrière vous</b><br>La large porte retourne sur la rue.");
  }
}