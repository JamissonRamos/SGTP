
export const masks = {

    phone (value) {
      return value
        .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1')
    },
  
    formtoMedida (value) {
      return value
        .replace(/\D+/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(,\d{2})\d+?$/, '$1')
    },

    formtoMedidaAltura (value) {
      return value
        .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '$1$2')
        .replace(/(\d{3})\d+?$/, '$1')
    },
  
    date (value) {
        return value
        .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\/\d{2})(\d)/, '$1/$2') 
        .replace(/(\/\d{4})(\d{1})/, '$1-$2')
        .replace(/(-\d{2})(\d{2})/, '$1:$2')
        .replace(/(:\d{2})\d+?$/, '$1')//data
    }
    }





































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



