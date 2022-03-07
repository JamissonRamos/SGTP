import {firebaseConfig} from "./dataBaseConf.js"

firebase.initializeApp(firebaseConfig)

const dataBase = firebase.firestore()

export async function colecaoDB(colecao) {
  let dataBaseJson = []

  await dataBase.collection(colecao)
    .get()
    .then((snapshot) => {

      snapshot.forEach(documento => {
        dataBaseJson.push(documento.data());
        console.log(dataBaseJson)
      });

    })

  return dataBaseJson
}

export async function salvar(obj, colecao) {
  // obj => São os dados para ser add no banco de dados 
  //Colecao: esta vinculado ao nome da coleção do banco dedos(tabela)
  let { dataCadastro, email, nome, senha } = obj;
  let resultado = ''

  await dataBase.collection(colecao)
    .add({ dataCadastro, email, nome, senha })
    .then(() => {resultado = true })
    .catch(err => { resultado = err })

    return resultado
    
}