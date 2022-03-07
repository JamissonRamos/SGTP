
import {addcl,remcl} from './module/animacaoHtml.js'
import {ValidatorCampos} from './module/validacaoCampos.js'
import {verificarEmail, login} from './module/login.js'
import {EditaMsg} from './module/msgBox.js'
import {cadastrar} from './module/crud.js'

//#region Variaveis
    
    //Pega os btns dos paineis
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
    let validator = new ValidatorCampos(); //fazendo a chmada e criando um array

//#endregion

//#region funções
    function CriarObj(nome, email, senha)
    {
        this.nome = TratarCase(nome),
        this.email = email,
        this.senha = senha,
        this.dataCadastro = tratarData()
    }

    const TratarCase = text => 
    {
	    return text.toLowerCase()
		    .split(' ')
		    .map((word) => 
            {
			    return word[0].toUpperCase() + word.slice(1);
		    }).join(' ')
    }

    function tratarData() {
        let data = new Date(),
        dia  = data.getDate().toString().padStart(2, '0'),
        mes  = (data.getMonth()+1).toString().padStart(2, '0'),
        ano  = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    function formulario(frm) 
    {   
        //mandando o meu form para ser valiado
        validator.validate(frm);

        let erro = document.querySelectorAll('form .e')

        if(erro.length === 0)
        {
            frm.id == 'formIn' ? conexaoCrud(1) : conexaoCrud(2)
        }
    }

    async function conexaoCrud (tipo)
    {
        switch (tipo)
        {
            case 1: //fazer o login
                let respEmail = await verificarEmail(idinputEmail.value)  

                if(respEmail == true) login(idinputEmail.value, idInputPassword.value);

                else EditaMsg(13)

                break;
            case 2: //Fazer o cadastro de user
                let respEmailCds = await verificarEmail(idInputEmailCadastro.value)
               
                if(respEmailCds == true) EditaMsg(2)
                else
                {
                    let novoUsuario = new CriarObj
                    (
                        idInputNomeCompleto.value,
                        idInputEmailCadastro.value,
                        idInputPasswordCds.value
                    )
                    
                    cadastrar(novoUsuario, 'cdsClientes')
                }

                break;
            default:
                break;
        }
    }
    
//#endregion

//#region Eventos do Html

    //Animação do painel, ao clica no btn do painel vai add a class
    sign_up_btn.addEventListener("click", () => 
    {
        container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => 
    {
        container.classList.remove("sign-up-mode");
    });

    //Animações dos inputs ao receber e perder o foco 
    document.querySelectorAll('input').forEach(input => 
    {
        input.addEventListener("focus", addcl);
        input.addEventListener("blur", remcl);
            
    });

    //Crinado o evento para chamar as vlidações
    formIn.addEventListener('submit', (event) =>  
    {  
        event.preventDefault(); 
        //console.log('formin')
        console.log(idinputEmail.value)
        formulario(formIn) 
    });

    formUp.addEventListener('submit', (event) =>  
    {  
        event.preventDefault(); 
       //console.log('formup')
        formulario(formUp) 
    });

//#endregion