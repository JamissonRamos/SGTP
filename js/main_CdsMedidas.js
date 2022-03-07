import {masks} from './module/mascaraCampos.js'
import {ValidatorCampos} from './module/validacaoCampos.js'
import {cadastrar,dadosCadastrados,excluir,buscaDados,alterar} from './module/regraCdsMedidas.js'


//#region Variaveis
    let validator = new ValidatorCampos(); //fazendo a chmada e criando um array

//#endregion

//#region funções

    const statusModal = () => 
    {
        idDivModal.classList.toggle("hidden");
        idFormCdsMedidas.classList.toggle("hidden");
    }

    function calcularIMC(kilos, altura) 
    {
        altura = altura / 100
        console.log(altura)
        return (kilos / (altura * altura));
    }

    function resultadoImc()
    {

        const kilos = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);
        let status = ''

        console.log(kilos)
        console.log(altura)

      
        //*****Calcular  */

        let imc  = calcularIMC(kilos,altura)

        console.log(imc)
        
        console.log(parseFloat(imc).toFixed(2))
        
              
        // console.log(peso.value)
        // console.log(altura.value)
        // console.log(imc)
  
        if (imc !== NaN )
        {

            if(imc < 18.5)
            {
                status = 'MAGREZA'

            }else if( imc >= 18.5 && imc <= 24.99)
            {
                status = 'NORMAL'

            }else if( imc >= 25 && imc <= 29.99)
            {
                status = 'SOBREPESO' 

            }else if( imc >= 30 && imc <= 39.99)
            {
                status = 'OBESIDADE' 

            }else
            {
                status = 'OBESIDADE GRAVE'
            }

            valorImc.value = parseFloat(imc).toFixed(2)
            statusImc.value = status
        }
       
    }

    function formulario(frm) 
    {   
        //mandando o meu form para ser valiado
        validator.validate(frm);

        let erro = document.querySelectorAll('form .e')

        if(erro.length === 0)
        {
            console.log(idCadastro.innerHTML)
            idCadastro.innerText == -1 ? conexaoCrud(1) : conexaoCrud(2,idCadastro.innerHTML)
        }
    }

    function CriarObj(peso,altura,bracos,coxas,abdome,peito,valorImc,statusImc)
    {
        this.peso = peso,           
        this.altura = altura,
        this.bracos = bracos,
        this.coxas = coxas,
        this.abdome = abdome,
        this.peito = peito,
        this.valorImc = valorImc,
        this.statusImc = statusImc,
        this.dataCadastro = tratarData()
    }

    function tratarData() 
    {
        let data = new Date(),
        dia  = data.getDate().toString().padStart(2, '0'),
        mes  = (data.getMonth()+1).toString().padStart(2, '0'),
        ano  = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    async function conexaoCrud (tipo, id)
    {
        switch (tipo)
        {
            case 1: //fazer cadastro de medidas
              
                let novaMedida = new CriarObj
                (
                    peso.value,           
                    altura.value,
                    bracos.value,
                    coxas.value,
                    abdome.value,
                    peito.value,
                    valorImc.value,
                    statusImc.value
                )

                console.log(novaMedida)
                cadastrar(novaMedida, 'cdsMedidas')
                break;
            case 2: //Alterar o cadastro 
                let alterarCadastro = new CriarObj
                (
                    peso.value,           
                    altura.value,
                    bracos.value,
                    coxas.value,
                    abdome.value,
                    peito.value,
                    valorImc.value,
                    statusImc.value
                )

                console.log(alterarCadastro)
                console.log(id)
                alterar(id,alterarCadastro, 'cdsMedidas');
            
                break;
            case 3:
                dadosCadastrados('cdsMedidas')
            default:
                break;
        }
    }

    export function carregarDadosTabela(obj)
    {
        let criarLinha = document.querySelector('table tbody')

        criarLinha.innerHTML = '';

        for(let i = 0; i < obj.length; i++)
        {
            
            criarLinha.innerHTML +=`
                <tr>
                    <th>${obj[i].obj.dataCadastro}</th>
                    <td>${obj[i].obj.peso}</td>
                    <td>${obj[i].obj.altura}</td>
                    <td>${obj[i].obj.bracos}</td>
                    <td>${obj[i].obj.coxas}</td>
                    <td>${obj[i].obj.abdome}</td>
                    <td>${obj[i].obj.peito}</td>
                    <td >${obj[i].obj.valorImc}</td>
                    <td class="${definirStausImc(obj[i].obj.statusImc)}">${obj[i].obj.statusImc}</td>

                    <td>
                        <button type="button" class="btn btn-outline-warning" onclick="editarRegistro('${obj[i].id}')">
                            <span class="material-icons">edit</span>
                        </button>
                    </td>

                    <td>
                        <button type="button" class="btn btn-outline-danger" onclick="excluirRegistro('${obj[i].id}')">
                            <span class="material-icons">delete</span>
                        </button>
                    </td>

                </tr>
            `   
        };

    }

    function definirStausImc(status)
    {
        let definirClass = ''

        if(status == 'MAGREZA')
        {
            definirClass = 'nivelImcM'

        }else if(status == 'NORMAL')
        {
            definirClass = 'nivelImcN'

        }else if(status == 'SOBREPESO')
        {
            definirClass = 'nivelImcS'

        }else if(status == 'OBESIDADE')
        {
            definirClass = 'nivelImcO'

        }else if(status == 'OBESIDADE GRAVE')
        {
            definirClass = 'nivelImcOG'
        }
       
        return definirClass
    }

    function excluirRegistro(indiceDaLista)
    {

        excluir(indiceDaLista,'cdsMedidas')
    }

    async function editarRegistro(indiceCadatro) 
    {      
        let retornoCadastro = await buscaDados(indiceCadatro,'cdsMedidas')

        console.log(retornoCadastro)

        statusModal()

        peso.value = retornoCadastro.peso 
        altura.value = retornoCadastro.altura
        bracos.value = retornoCadastro.bracos
        coxas.value = retornoCadastro.coxas
        abdome.value = retornoCadastro.abdome
        peito.value = retornoCadastro.peito
        valorImc.value = retornoCadastro.imc
        statusImc.value = retornoCadastro.statusImc
        
        idCadastro.innerHTML = indiceCadatro
        idSpanFrm.innerHTML = 'Editar'

    }
//#endregion


//#region Eventos do Html

    document.onreadystatechange = conexaoCrud(3);

    //Vericar as mascaras dos campos
    document.querySelectorAll('input').forEach($input => {
        const field = $input.dataset.js

        $input.addEventListener('input', e => {
            e.target.value = masks[field](e.target.value)
        }, false)
    });

    //Btn do frm para salvar dados 
    idBtnCadastro.addEventListener('click', (event) =>  
    {
        event.preventDefault(); 

        console.log(idFormCdsMedidas);

        formulario(idFormCdsMedidas);
    });

    //Btn para abrir o frm
    idBtnNovoCadastro.addEventListener('click', (event) =>  {event.preventDefault(); statusModal();});

    //Btn do frm para fechar 
    idBtnFecharCds.addEventListener('click', (event) =>  {event.preventDefault(); statusModal();});
//#endregion


window.excluirRegistro=excluirRegistro;
window.editarRegistro=editarRegistro;
window.resultadoImc=resultadoImc