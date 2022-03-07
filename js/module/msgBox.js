const corRed = '#F50057'
const corGreen = '#00BFA6'
const corYellow = '#F9A826'

export function EditaMsg(msg) 
{
    switch (msg) 
    {
        case 1: 
            mostraMsg('Usuário cadastrdo com sucesso!', corGreen ,1)
            break;
        case 2: 
            mostraMsg('Ei, já existe um cadastro com esse email',corRed,1)
            break;
        case 3: 
            mostraMsg('foi excluido com sucesso!', corRed ,1)
            break;
        case 4: 
            mostraMsg('foi alterado com sucesso!', corGreen ,1)
            break;
        case 11:
            mostraMsg('Login realizado com sucesso!', corGreen ,2)
            break
        case 12:
            mostraMsg('Email ou Senha esta incorreto!', corRed ,2)
            break
        case 13:
            mostraMsg('Email não cadastrado', corYellow ,2)
            break
        case 14:
            mostraMsg('Olá, algo não saiu como esperado, tente novamente em breve.', corYellow ,1)
            break
        default:
            mostraMsg('Todo mundo erra e agora quem errou foi agente, desculpa estamos trabalhando para melhora. Tente mais tarde',corYellow,2)
            break;
    }
}

function mostraMsg(msg, bgCor, local) 
{
    // console.log(msg)
    // console.log(bgCor)
    // console.log(local)

    let templeteMsg = document.querySelector('.templeteMsg');

    templeteMsg.textContent = msg;

    templeteMsg.style.backgroundColor = bgCor;

    templeteMsg.classList.remove('templeteMsg');
    //console.log(msg)
    
    setTimeout(() => 
    {  
        templeteMsg.style.transition = "all .25s ease-in-out"
        templeteMsg.style.transform = "translateY(-100px)"
    },3000)
        //transition: all .6s ease-in-out;
    setTimeout(() => {
        templeteMsg.classList.add('templeteMsg')
       window.location.reload()
    },3550) 

}
