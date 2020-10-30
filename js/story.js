let themes = ["Je vais vous avouer quelque chose de grave.",
              "Bloqué(e) dans un ascenseur.",
              "Il y avait une grande exposition de mes oeuvres.",
              "Le pique-nique infernal.",
              "En cuisine j'improvise avec n'importe quoi.",
              "Comment un gnou m'a adopté.",
              "L'histoire du poisson qui n'aimait pas l'eau.",
              "L'entretien qui a changé ma vie.",
              "Je fais de supers imitations avec ma bouche",
              "Je n'aurais pas du dire non",
              "Pourquoi je suis une femme merveilleuse",
              "J'ai un QI de 650",
              "Y'a du petrole dans mon jardin !",
              "Comment je me suis faché(e) avec le Président des Etats-Unis.",
              "Pardon, j'ai perdu la mémoire...",
              "Je me suis fais enlever par des aliens.",
              "La fin du monde, c'est mardi.",
              "Mon GPS m'a fait un coup tordu",
              "Seul(e) dans la tempête avec ma bouée canard.",
              "La vérité sur les trois petits cochons",
              "J'ai créé l'association des adorateurs de chou-fleur.",
              "L'héritage de ma grande tante.",
              "J'ai lu un livre qu'il ne fallait pas lire.",
              "L'art de porter un tutu rose.",
              "Je connais personnellement la princesse des neiges.",
              "Je vous raconte ma vie en 2 minutes.",
              "J'ai vécu avec la femme (ou l'homme) invisible.",
              "Devine avec qui j'ai diné hier ?!",
              "Comment j'ai fini gardien de phare",
              "Evidemment que je crois aux fantômes !",
              "Je vous raconte une histoire triste.",
              "Je me suis marié(e) à Las Vegas... La classe !",
              "Flashé(e) à 220km/h sur mon vélo.",
              "Un jour, j'ai sauvé un bébé phoque",
              "Heureusement que j'étais là à l'anniversaire de ma cousine !",
              "Comment j'ai tué un lion !",
              "J'ai été agent secret, mais je n'ai pas le droit d'en parler.",
              "Ma pire journée",
              "Un magicien m'a fait un tour incroyable !",
              "J'ai découvert un nouveau continent",
              "Je ne veux plus faire de chirurgie esthétique.",
              "J'ai voyagé sur le toit du TGV.",
              "Finalement, j'ai appuyé sur le bon bouton.",
              "C'était un soir d'automne...",
              "Je vous raconte mon prochain film.",
              "J'ai passé une très bonne soirée avec une fée...",
              "Un jour, j'ai mangé 23 oeufs durs !",
              "Comment réparer un moteur de tracteur avec un trombone.",
              "Le crime était presque parfait.",
              "La préhistoire, c'était vachempent sympa !",
              "J'ai un doigt magique.",
              "J'aime bien les gens qui ne m'aiment pas.",
              "Je me suis remis à la luge.",
              "Mon premier grand amour.",
              "Je lis l'avenir dans la purée de pomme de terre.",
              "Je suis recherché par la police de l'Amerique du Sud.",
              "Pourquoi je suis devenu(e) clown.",
              "La légende du chevalier sans épée.",
              "Je ronfle.",
              "Comment j'ai bâti mon immense fortune !",
              "Un histoire tellement courte.",
              "Sincèrement, je trouve que tout est beau.",
              "Dans la lune...",
              "Mon séjour dans le Grand Nord.",
              "Il y a un génie dans ma cafetière.",
              "Mon programme politique pour la paix sur Terre.",
              "J'ai pris des cours de savoir-vivre.",
              "J'ai pas l'air comme ça, mais j'ai attaqué une banque.",
              "Mon inoubliable pyjama.",
              "Tu sais ce que j'ai retrouvé dans un nem ?",
              "J'ai un chien qui parle.",
              "C'est pas de ma faute, c'est mon coiffeur.",
              "J'ai rien à dire",
              "Je vais vous dire qui je suis vraiment",
              "Comment j'ai sali mon t-shirt.",
              "Pourquoi je ne prends qu'une douche tous les six mois.",
              "J'ai embrassé un crapaud.",
              "Je viens d'une famille très spéciale.",
              "Mes petites astuces pour séduire",
              "La machine à voyager dans le temps. Mon expérience.",
              "J'ai inventé un nouveau sport.",
              "Je vais vous avouer quelque chose de grave.",
              "Ma collection unique au monde.",
              "J'ai jamais pu retirer mes skis.",
              "Depuis un an et demi, j'ai décidé de ne plus avoir d'amis."];
let dice1 = ["Tu vas pas me croire", "Bon écoutez moi !", "L'autre jour", "Je dois vous avouer", "Je connais quelqu'un", "Quand j'étais petit"];
let dice2 = ["Or", "C'est pourquoi", "Mais", "Mais vous savez quoi", "En réalité", "Je ne sais pas si vous avez remarqué"];
let dice3 = ["Donc", "Je précise que", "Bon tu me connais", "Moi, tranquille", "D'un autre côté", "En fait"];
let dice4 = ["Là ça se complique", "Ah, j'oubliais !", "C'est vrai que", "Du coup", "Et là, patatras !", "A ce moment là"];
let dice5 = ["Finalement", "Bref !", "Et le pire !", "J'avais prévu le coup", "Coup de bol"];
let dice6 = ["Et le drame", "La prochaine fois", "Comme dirait ma mamie", "Conclusion", "C'est ainsi que"];

function random(mn, mx) {
  return Math.random() * (mx - mn) + mn;
}

function change_value() {
  document.getElementById('span1').innerHTML = dice1[Math.floor(random(1, 7))-1];
  document.getElementById('span2').innerHTML = dice2[Math.floor(random(1, 6))-1];
  document.getElementById('span3').innerHTML = dice3[Math.floor(random(1, 7))-1];
  document.getElementById('span4').innerHTML = dice4[Math.floor(random(1, 7))-1];
  document.getElementById('span5').innerHTML = dice5[Math.floor(random(1, 6))-1];
  document.getElementById('span6').innerHTML = dice6[Math.floor(random(1, 6))-1];
  document.getElementById('theme').innerHTML = themes[Math.floor(random(1, 86))-1];
}
