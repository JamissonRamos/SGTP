import {firebaseConfig} from "./dataBaseConf.js"

firebase.initializeApp(firebaseConfig)

const dataBase = firebase.firestore()

export async function colecaoDB(colecao) {
  
  let dataBaseJson = []

  // await dataBase.collection(colecao)

  await dataBase.collection(colecao)
    .get()
    .then((snapshot) => 
    {
      snapshot.forEach(documento => 
      {
        dataBaseJson.push(new criarObjDadosSalvos(documento.data(),documento.id));

      });

    })

  return dataBaseJson
}

function criarObjDadosSalvos(obj, id)
{
  this.obj = obj,
  this.id = id
}



export async function salvar(obj, colecao) {
  // obj => São os dados para ser add no banco de dados 
  //Colecao: esta vinculado ao nome da coleção do banco de dados (tabela)
  let { peso, altura, bracos, coxas, abdome, peito, valorImc, statusImc, dataCadastro} = obj;

  let resultado = ''

  await dataBase.collection(colecao)
    .add({ peso, altura, bracos, coxas, abdome, peito, valorImc, statusImc, dataCadastro})
    .then(() => {resultado = true })
    .catch(err => { resultado = err })

    return resultado
    
}

export async function excluirDadaos(id, colecao) {
  //let { peso, altura, bracos, coxas, abdome, peito, valorImc, statusImc, dataCadastro} = obj;

  let resultado = ''

  await dataBase.collection(colecao).doc(id)
    .delete()
    .then(() => {resultado = true })
    .catch(err => { resultado = err })

    return resultado
    
}

export async function bucarCadastro(id, colecao) {
  let docRef = dataBase.collection(colecao).doc(id);
  let resultado = ''

  await docRef.get()
    .then((doc) => {resultado = doc.data() })
    .catch(err => { resultado = err })

  // await dataBase.collection(colecao).doc(id)
  //   .delete()
  //   
    console.log(resultado)
    return resultado
    
}

export async function alterarDadaos(id, obj, colecao) {
  let { peso, altura, bracos, coxas, abdome, peito, valorImc, statusImc, dataCadastro} = obj;

  let resultado = ''

  await dataBase.collection(colecao).doc(id)
    .update({ peso, altura, bracos, coxas, abdome, peito, valorImc, statusImc, dataCadastro})
    .then(() => {resultado = true })
    .catch(err => { resultado = err })

    return resultado
    
}