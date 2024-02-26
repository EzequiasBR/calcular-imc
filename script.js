const btn = document.querySelector('.btn');
const calcular_imc = (peso, altura, nome, elemento) => {
  imc = (peso / (altura * altura)).toFixed(1);
  nome = nome.value;
  el = document.querySelector(elemento);
  
  function avaliarIMC(imc) {
    if (imc < 18.5) {
      return el.innerHTML = nome + ' o seu IMC é '+ imc +' e Você esta abaixo do peso.';
    } else if (imc >= 18.5 && imc < 24.9) {
      return el.innerHTML = nome + ' o seu IMC é '+ imc +' e Seu peso esta normal.';
    } else if (imc >= 25 && imc < 29.9) {
      return el.innerHTML = nome + ' o seu IMC é '+ imc +' Você esta com sobrepeso.';
    } else {
      return el.innerHTML = nome + ' o seu IMC é '+ imc +' e Você esta muito acima do peso.';
    }
  }

  avaliarIMC(imc);

};

function toPlayAlert(element, Balloon, expression) {
  const input = document.querySelector(element);
  const inputErro = document.querySelector(Balloon);
  const regexArray = [/^(\d.\.?)$/, /^[A-Za-z]+$/, /<("[^"]*"|'[^']*'|[^'">])*>/];
  const expressionValue = new RegExp(expression);
  let exp;
  regexArray.map((el) => {
    if (el.toString() === expressionValue.toString()) {
      exp = el;
      return exp;
    }
  })
  if (input.type === "text") {
    input.addEventListener('keydown', function (e) {
      if (e.key === '.' || e.key === ';' || e.key === ',') {
        e.preventDefault();
      }
    });
    input.addEventListener('input', function () {
      let valor = input.value;
      if (valor === "") {
        inputErro.style.display = 'none';
      }
      else if (valor.match(exp)) {
        inputErro.style.display = 'none';
      } else {
        inputErro.style.display = 'block';
      }
    });

    console.log("O input é do tipo nome.");
  }
  else if (input.type === "number") {
    input.addEventListener('keydown', function (e) {
      if (e.key === 'e' || e.key === 'E' || e.key === ',') {
        e.preventDefault();
      }
    });
    input.addEventListener('input', (evt) => {
      let valor = input.value;
      if (exp == null && Balloon == null) {
        //get out
      }
      else {
        if (exp.test(valor) || !valor === "") {
          input.value = valor.substring(0, valor.length - 1);
          inputErro.style.display = 'block';
          console.log('block');
        } else {
          console.log('none');
          inputErro.style.display = 'none';
        }
      }
    });
  }
};

toPlayAlert("#altura", "#balaoErro-2", /^(\d.\.?)$/);
toPlayAlert("#nome", "#balaoErro-1", /^[A-Za-z]+$/);
toPlayAlert("#peso");



btn.addEventListener('click', () => {
  const nome = document.getElementById('nome');
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;

  calcular_imc(peso, altura,nome,'.text-dark');





})

