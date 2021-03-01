let custo = 200;
let venda = 300;

if (custo>0 && venda>0){
    let lucro = ((0.8*venda)-custo)*1000;
    console.log(lucro);
}
else{
    console.log ("algum valor está menor que zero");
}