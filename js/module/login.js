import {EditaMsg} from './msgBox.js'
import {colecaoDB} from './dataBaseLogin.js'

let dataBase = []

export function login(email, senha) 
{
    dataBase.forEach(item => 
    {
        if(item.email == email && item.senha == senha)
        {                
            //Vai quebra o a seguencia do forEach, como se fosse o break
            dataBase.length = 0
            
            EditaMsg(11)

            window.location.assign("../../pages/home.html")

        } else if(item.email == email && item.senha != senha) { EditaMsg(12) }
    });
}

export async function verificarEmail(valor) 
{   
    let arrayEmail = [];
    
    dataBase = await colecaoDB('cdsClientes')

    console.log(valor)
    console.log(dataBase)

    dataBase.forEach(item => { arrayEmail.push(item.email) });

   return arrayEmail.includes(valor) ?  true :  false
}
   
