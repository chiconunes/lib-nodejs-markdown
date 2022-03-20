const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const chalk = require('chalk');

function manejaErros(erro) {
    throw new Error(chalk.red(erro.message));    
}

async function checaStatus(arrayURLs) {
    try {
        const arrayStatus = await Promise
            .all(arrayURLs
                .map(async url =>{
                const res = await fetch(url)
                return res.status;
        }))
        return arrayStatus;        
    } catch (error) {
        manejaErros(error);
        
    }
}

function geraArrayDeURLS(arrayLinks) {
    return arrayLinks
        .map(ObjetoLink => Object
            .values(ObjetoLink).join())
}

async function validaUrls(arrayLinks) {
    const links =  geraArrayDeURLS(arrayLinks);
    const statusLinks = await checaStatus(links);

    const resultado = arrayLinks.map((objeto,indice)=>({
        ...objeto,
        status: statusLinks[indice]
    }))
    return resultado;
}

module.exports=  validaUrls;