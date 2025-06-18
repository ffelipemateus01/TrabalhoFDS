let btIntro = document.querySelector("#bt1");
let extraTxt = document.querySelector("#extradiv");
let contador = 0;
let txt = "";
const frases = [
    "Pare de procurar as tempestades e aproveite melhor a luz do sol.",
    "Quando você sair da tempestade, você não será a mesma pessoa que era quando entrou. Esse é o objetivo da tempestade.",
    "Você tem que treinar seu cérebro para ser positivo, assim como você treina seu corpo.",
    "A inteligência é a capacidade de se adaptar à mudança.",
    "Aprenda a amar a sua vida: ela é o melhor presente que você já recebeu."
];

btIntro.addEventListener('click', btClick);

function btClick()
{
    extraTxt.innerHTML= txt;
    if(contador < 5) 
    {
        extraTxt.innerHTML= frases[contador];
        let temptxt = "Se quiser, pode clicar de novo!";
        for(let i = 0; i < contador; i++) temptxt += "!";
        btIntro.innerHTML= temptxt;
    }
    else
    {
        btIntro.classList.add("btred");
        btIntro.innerHTML= "Isso é tudo!"
        btIntro.removeEventListener('click');
        extraTxt.innerHTML="";
    }
    contador++;
}