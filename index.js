const chalk = require('chalk');
const fs = require('fs'); 

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;

  while ((temp = regex.exec(texto)) !== null) {
    arrayResultados.push({ [temp[1]]: temp[2] });
  }
  return arrayResultados.length === 0 ? 'não há links' : arrayResultados ;
}
 
function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'não há arquivo no camino'));
}

async function pegaArquivo(caminhoDoArquivo) {
  const enconding = 'utf-8';
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo,enconding)
    // console.log(chalk.blue(texto))
    // console.log(extraiLinks(texto))
    return extraiLinks(texto)
  } catch (error) {
    trataErro(error);    
  }
  
  // fs.readFile(caminhoDoArquivo, enconding, (erro, texto) => {
  //   if (erro) {
  //     trataErro(erro);
  //   }
  //   console.log(chalk.green(texto));

  // })

}
// pegaArquivo('./arquivos/texto1.md');

module.exports =  pegaArquivo;



async function pegarArquivoDir(caminho) {
  const caminhoAbsoluto = path.join(__dirname, '..', caminho);
  const encoding = 'utf-8';
  try {
    const arquivos = await fs.promises.readdir(caminhoAbsoluto, { encoding });
    const result = await Promise.all(arquivos.map(async (arquivo) => {
      const localArquivo = `${caminhoAbsoluto}/${arquivo}`;
      const texto = await fs.promises.readFile(localArquivo, encoding);
      return extraiLinks(texto);
    }));
    return result;
  } catch (erro) {
    return trataErro(erro);
  }
 }