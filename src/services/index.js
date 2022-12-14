

export function CalcularAcai(qtdPeq, qtdMed, qtdGrande, desc) {
    if(qtdPeq >= 0 && qtdMed >= 0 && qtdGrande >= 0 && desc >=0){
        let total = qtdPeq * 13.50 + qtdMed * 15 + (qtdGrande * 17.50);
        let desconto = total * desc / 100;

        let final = total - desconto;
        return final
    }
    else{
        return 'invaaliddoooo';
    }
}


export function SSigno(mes, dia) {
    if(mes == 'setembro' && dia >= 23 || 'outubro' && dia <=22){
        return 'seu signo é libra doidão';

    }
    else{
        return 'seu signo n é libra mané';
    }
}

export function Sorvete(gramas){
    let total = ''
        
    if( gramas <= 0){
        alert('peso invalido')
    }
    if (gramas > 1000) {
        total = (gramas) * 0.03
    }
    else{
        total = (gramas) * 0.035
    }
    return (total.toFixed([2]))
}


export function Salario(salario, bonus, desc) {
        
    try{
        if (salario >= 0 && bonus >= 0 && desc >= 0) {
        
            let Bonus = salario / bonus;
            let total = salario + Bonus;
            let desconto = total - desc;
            
            return desconto.toFixed(1)
        }
        else {
            return 'invalidoo'
        }
    }
    catch(err) {
        return (err.message)
    }
    
}


export function Abastecimento(capac, consumo, dist) {   
    try {
        let litros = dist / consumo;
        let qtdParadas = litros / capac;

        qtdParadas = Math.ceil(qtdParadas);

        let msg = "Você precisa fazer " + qtdParadas + " paradas para abastecer."
        if (capac <= 0 || consumo <= 0 || dist <= 0) {
            msg = "Valor inválido";
        }
        
        return msg;

    } catch (err) {
        return (err.message)
    }
    
}

export function Temperatura (temp) {
    let msg = ''

    if (temp >= 41) {
        msg = 'Hipertemia'
    }

    else if (temp >= 39.6 && temp < 41) {
        msg = 'Febre alta'
    }

    else if (temp >= 37.5 && temp < 39.6) {
        msg = 'Febre'
    }

    else if (temp >= 36 && temp < 37.5) {
        msg = 'Normal'
    }

    else{
        msg = 'Hipotermia'
    }
    return msg;
}


export function CalculoOrcamento(gastos, ganhos) {
    try{
        var gastosPorcento = gastos / ganhos * 100;

        var msg = "";

        if(gastosPorcento < 31)
            msg = "Parabéns, está gerenciando bem seu orçamento!";
        else if(gastosPorcento < 50)
            msg = "Muito bem, seus gastos não ultrapassam metade dos ganhos!";
        else if(gastosPorcento <= 80 && gastosPorcento >= 51)
            msg = "Atenção, melhor conter os gastos!";
        else if(gastosPorcento <= 100 && gastosPorcento >= 81)
            msg = "Cuidado, seu orçamento pode ficar comprometido!";
        else
            msg = "Orçamento comprometido! Hora de rever seus gastos!";
        
        return msg;
    } catch (err){
        return (err.message);
    }
}


export function Ingresso(dia, meia, inteira, nacional){
    try{
        let total = 0;

        let msg = "O total a se pagar vai ser R$";

        if(nacional === true){
            total = (inteira + meia) * 5
            return msg+total;
        }
        else if(dia === "quarta-feira" || dia === "quartafeira" || dia === "quarta feira"){
            total = (inteira + meia) * 14.25
            return msg+total;
        }
        else{
            total = (inteira * 28.5) + (meia * 14.25);
            return msg+total;
        }
    }
    catch (err){
        return (err.message)
    }
}

export function contarAte(inicio, fim) {
    try{
        if(isNaN(inicio) || isNaN(fim))
        throw new Error('Isso não é um número');

        let x = [];
        for(let cont = inicio; cont <=fim; cont++ ) {
            x = [...x, cont];
            x.push(", ")
        } 
        return x;
    }
    catch (err){
        return (err.message)
    }
}

export function Linhas(qtd) {
    try{
        let x =[];
        for (let cont = 0; cont <= qtd; cont ++) {
            x.push(" * ")
        }
        return x;
    }
    catch (err){
        return (err.message)
    }
}

export function Retangulo(base, altura, simbolo) {
        let array = [];
        for(let i = 0; i < altura; i++){
            array = []
        }
    
}

export function JurosCompostos (entrada, valor, taxa, periodo) {
    if(entrada, valor, taxa, periodo === undefined || entrada, valor, taxa, periodo === isNaN){
        throw new Error("insira valores válidos")
    }

    let capital = valor - entrada
    let montante = capital * ((1 + (taxa / 100)) ** periodo)
    let juros = montante - capital
    let vlparcela = montante / (periodo * 12)
    let array = ['Montante: ' + montante.toFixed([2]),
    'Juros: ' + juros.toFixed([2]),
    'Valor da parcela: ' + vlparcela.toFixed([2])]
    return array
}

export function CalcularCafe(alunos, litros, mili){
    try{
        let y = litros * 1000;
        let x = alunos * mili;
       
        while(x > y){
            return litros+=litros;
        }
            return y/1000;
    }
    catch (err){
        return (err.message)
    }
}

export function criarArray(tamanho) {
    let notas = [];
    for (let volta = 1; volta <= tamanho; volta++) {
        notas.push(0);
    }
    return notas;
}

export function calcMedia(notas) {
    let soma = 0;
    for (let volta = 0; volta < notas.length; volta++) {
        soma = soma + notas[volta];
    }
    let m = soma / notas.length;
    return m;
}

export function calcMaior(notas) {
    let m = 0;
    for (let volta = 0; volta < notas.length; volta++) {
        if (notas[volta] > m) {
            m = notas[volta];
        }
    }
    
    return m;
}

export function calcMenor(notas) {
    let m = 11;
    for (let volta = 0; volta < notas.length; volta++) {
        if (notas[volta] < m) {
            m = notas[volta];
        }
    }
    
    return m;
}
