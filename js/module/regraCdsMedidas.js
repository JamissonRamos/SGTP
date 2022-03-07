// import {EditaMsg} from './msgBox.js'
//import {colecaoDB} from './dataBaseLogin.js'

import {salvar,colecaoDB,excluirDadaos,bucarCadastro,alterarDadaos} from './dataBaseMedidas.js'
import {EditaMsg} from './msgBox.js'
import {carregarDadosTabela} from '../main_CdsMedidas.js'

let dataBase = []


//#endregion Regra da Página


//===================================================================================================
   
//Crud da Página


export async function dadosCadastrados(nomeColecao)
{
    let retornoLista = await colecaoDB(nomeColecao)

    retornoLista.length > 0 ? carregarDadosTabela(retornoLista) : console.log('sem nada ')//EditaMsg(14)
}

export async function cadastrar(obj, nomeColecao)
{
    let retorno = await salvar(obj, nomeColecao)

    if (retorno === true)
    {
        EditaMsg(1); 
        dadosCadastrados(nomeColecao); 

    }else EditaMsg(14)
}

export async function excluir(id, nomeColecao)
{
    let retorno = await excluirDadaos(id, nomeColecao)

    if (retorno === true)
    {
        EditaMsg(3); 

        dadosCadastrados(nomeColecao); 

    }else EditaMsg(14)
}

export async function buscaDados(id, nomeColecao)
{
    let retorno = await bucarCadastro(id, nomeColecao)

    //if (retorno.length > 0)
    //{
        //EditaMsg(3); 

        //dadosCadastrados(nomeColecao); 
        console.log(retorno)
        return retorno

    //}else EditaMsg(14)
}

export async function alterar(id, obj, nomeColecao)
{
    let retorno = await alterarDadaos(id, obj, nomeColecao)

    if (retorno === true)
    {
        EditaMsg(4); 

        dadosCadastrados(nomeColecao); 

    }else EditaMsg(14)
}