var passageirosH = [];
var passageirosM = [];

do{
    var nome = prompt('Digite o nome do passageiro');

    while((nome.trim() == "")){
        nome = prompt("Digite um nome válido");
    }
    var sexo = prompt('Digite o gênero do passageiro ("h" para homens ou "m" para mulheres)');

    while((sexo.trim() == "") || (sexo.toLowerCase() != "h" && sexo.toLowerCase() != "m")){
        sexo = prompt("Digite um gênero válido");
    }

    nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
    
    if(sexo === "h"){
        passageirosH.push(nome);
    }
    else if(sexo === "m"){
        passageirosM.push(nome); 
    }

    var confirmacao = confirm("Deseja digitar mais um passageiro?");
} while(confirmacao);

passageirosH.sort();
passageirosM.sort(); 

document.write(`<h1 style="text-align:center";>Ônibus</h1>
    <table border="1" style="margin: 0 auto; border-collapse: separate; width: 20%; border-spacing: 30px 20px;">
    <thead>
        <tr>
            <th style="background-color: black; height: 40px; width:20px; margin-bottom:20px;"></th>
        </tr>
    </thead>
<tbody>`);

for(var i = 0; i < Math.max(passageirosM.length, passageirosH.length); i++){
    document.write(`
        <tr>
            <td style="text-align:center; width: 50%; height: 40px; border: 2px solid black;">${passageirosM[i] || ''}</td>
            <td style="text-align:center; width: 50%; height: 40px; border: 2px solid black;">${passageirosH[i] || ''}</td>
        </tr>
    `);
}

document.write(`</tbody>
    </table>
    <style>
        table {
            border: 5px solid #385D8A;
            border-radius: 40px;
            box-shadow: 2px 2px 10px #888888;
        }
        td {
            background-color: #fff;
            font-size: 25px;
        }
    </style>
`);




