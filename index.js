let readline = require("prompt-sync")();

function Sorteio() {
    let tentativas = 0;
    let sorteado = parseInt(Math.random() * 1000)

    for (tentativas; tentativas < 10; tentativas) {

        let y = readline('insira um Numero: ')
        let z = Number(y);

        if (z < sorteado) {
            console.log('Maior')
            tentativas++
        }
        else if (z > sorteado) {
            console.log('Menor')
            tentativas++
        }
        else if (tentativas == 0 && z != sorteado) {
            return console.log('Perdeu!!');

        }
        else {
            console.log('acertou!!!');
            tentativas = 10;
        }
    }

    return sorteado;
}

let r = Sorteio();
console.log(r)