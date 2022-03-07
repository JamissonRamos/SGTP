
export class ValidatorCampos
{
    constructor()
    {
        this.validations =
        [
            'data-required',
            'data-min-length',
            'data-email-validate',

        ];
    };/* Fim do constructior */

    validate(form)
    {
        let percorrerValidations = document.querySelectorAll('form .error-validation');

        if(percorrerValidations.length > 0)
        {
            this.limparValidations(percorrerValidations);
        }

        let inputs = form.getElementsByTagName('input');

        let arrayInputs = [...inputs]

        arrayInputs.forEach(item =>
        {
            for (let i = 0; this.validations.length > i; i++) {
                
                if(item.getAttribute(this.validations[i]) != null)
                {                    
                    let nomeMetodo = this.validations[i].replace('data-','').replace('-','');

                    let valorAtributo = item.getAttribute(this.validations[i]);

                    this[nomeMetodo](item, valorAtributo)
                }   
            }
        }, this);
    };

    required(input)
    {
        let mssgboxErro = `Olá, o preenchiemnto desse campo é obrigatório`

        if(input.value.length <= 0)
        {
            this.imprimirMsgbox(input, mssgboxErro);
        }
    }

    minlength(input, minValue)
    {
        let mssgboxErro = `Olá, o campo deve ter pelo menos ${minValue} caracacteres`

        if(input.value.length < minValue)
        {
            this.imprimirMsgbox(input, mssgboxErro);

        }
    }

    emailvalidate(input) 
    {
        let re = /\S+@\S+\.\S+/;
     
        let email = input.value;
     
        let errorMessage = `Insira um e-mail no padrão jamisson@email.com`;

        if(!re.test(email)) 
        {
          this.imprimirMsgbox(input, errorMessage);
        }
     
    }
     
    imprimirMsgbox(input, msg)
    {
        let qtdErros = input.parentNode.querySelector('.error-validation');

        if(qtdErros === null)
        {
            let novaDivErro = document.querySelector('.error-validation').cloneNode(true);

            novaDivErro.textContent = msg;

            let inputPai = input.parentNode;

            novaDivErro.classList.remove('template');

            inputPai.appendChild(novaDivErro);

            novaDivErro.classList.add('e');

            novaDivErro.style.backgroundColor = 'rgba(252, 14, 14, 0.233)';
            novaDivErro.style.borderLeftColor = 'red';
        }
    };

    limparValidations(validations)
    {
        validations.forEach(item => {item.remove()})
    };

};/* Fim da Class */





































//let avisoErro = 0 //Verificar se exite mensagens


    //Class vai receber os meus atributos dos meu inputs
// export class Validator
// {
//     constructor()
//     {
//         this.validator =
//         [
//             'data-required', //Campos obrigatorios
//             'data-min-length', //Minimo de letra
//             'data-email-validate', //Campo de email 
//         ];
//     };


//     validete(form)
//     {
//         let currentValidations = document.querySelectorAll('form .error-validation');

//         if(currentValidations.length) 
//         {
//             this.cleanValidations(currentValidations);
//         }

//         let inputs = form.getElementsByTagName('input');

//         let inputsArray = [...inputs];

//         //Percorrendo todos os meus inputs no meu form, e recuperar meus atributos e fazer validações de acordo a necessidades
//         inputsArray.forEach((input) =>
//         {

//             for(let i = 0; this.validator.length > i; i++)
//             {
//                 if(input.getAttribute(this.validator[i]) != null) {

//                     let method = this.validator[i].replace("data-", "").replace("-", "");

//                     let value = input.getAttribute(this.validator[i])

//                     //coloca nesse ponto a verificação para gera uma valor nulo quando ja ouver uma mensagem de erro no html
//                     // invoca o método

//                     this[method](input,value);
//                 }
//             }

//         }, this);
//     }

//     // método para imprimir mensagens de erro
//     printMessage(input, msg)
//     {
//         // checa os erros presentes no input
//         let errorsQty = input.parentNode.querySelector('.error-validation');

//         // imprimir erro só se não tiver erros
//         if(errorsQty === null)
//         {
//             let template = document.querySelector('.error-validation').cloneNode(true);

//             template.textContent = msg;

//             let inputParent = input.parentNode;

//             template.classList.remove('template');

//             inputParent.appendChild(template);
//         }
//     }

//     // // método para validar se tem um mínimo de caracteres
//     // minlength(input, minValue) 
//     // {
//     //     let inputLength = input.value.length;

//     //     let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;

//     //     if(inputLength < minValue) {
//     //         this.printMessage(input, errorMessage);
//     //     }
//     // }

//     // // método para exibir inputs que são necessários
//     // required(input)
//     // {
//     //     let inputValue = input.value;

//     //     if(inputValue === '')
//     //     {
//     //         let errorMessage = `Opa, Este campo é obrigatório`;

//     //         this.printMessage(input, errorMessage);
//     //     }
//     // }

//     // // método para validar e-mail
//     //     emailvalidate(input) {
//     //     let re = /\S+@\S+\.\S+/;

//     //     let email = input.value;

//     //     let errorMessage = `Insira um e-mail no padrão jamisson@email.com`;

//     //     if(!re.test(email)) {
//     //     this.printMessage(input, errorMessage);
//     //     }
//     // }

//     // remove todas as validações para fazer a checagem novamente
//     cleanValidations(validations)
//     {
//         validations.forEach(elementos => elementos.remove());
//     }

// };

   
   
   





  
//#endregion

//#region => Regra de Negocio




//#endregion



