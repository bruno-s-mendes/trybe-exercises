let peca = "CaVaLO";
     peca = peca.toLowerCase(peca);

console.log (peca)

switch (peca){
    case ("peao"):
        console.log ("peão para frente 1 casa");
        break;
    case ("cavalo"):
        console.log ("cavalo anda 3 casas em 'L'");
        break;
    case ("torre"):
        console.log ("torre anda para frente ou para os lados quantas casas puder");
        break;
    case ("bispo"):
        console.log ("Bispo anda na diagonal quantas casas quiser");
        break;
    case ("rainha"):
        console.log ("anda em todas as direções quantas casas quiser");
        break;
    case ("rei"):
        console.log ("anda em todas as direções apenas uma casa");
        break;
    default:
        console.log ("erro")
}