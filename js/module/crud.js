import {salvar} from './dataBaseLogin.js'
import {EditaMsg} from './msgBox.js'

export async function cadastrar (obj, nomeColecao)
{
    let retorno = await salvar(obj, nomeColecao)

    retorno === true ? EditaMsg(1) : EditaMsg(14)
}