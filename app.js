const form = document.querySelector('.form');
form.addEventListener('submit', recebeEvento);

function recebeEvento(event) {
    // não enviar o formulário
    event.preventDefault();

    const inputPeso = form.querySelector('.peso');
    const inputAltura = form.querySelector('.altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado("Peso invalido", false)
        return;
    }
    if (!altura) {
        setResultado("Altura invalido", false)
        return;
    }

    const imc = getIMC(peso, altura);
    const nivelImc = getNivelImc(imc);

    const mensagem = `Seu IMC é ${imc} (${nivelImc}).`

    setResultado(mensagem, true);
}

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3']

    if(imc >= 39.9) return nivel[5] 
    else if(imc >=34.9) return nivel[4] 
    else if(imc >=29.9) return nivel[3]
    else if(imc >=24.9) return nivel[2]   
    else if(imc >=18.5) return nivel[1]
    else if(imc < 18.5) return nivel[0]
}

function getIMC(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2)
}

function setResultado(msg, Validacao) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = ""

    const p = document.createElement('p')

    if(Validacao) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('paragrafo-incorreto')
    }

    p.innerHTML = msg
    resultado.appendChild(p)

}   
