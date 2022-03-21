const pegaArquivo = require('../index');
const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::',()=>{
    it('1 - Deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    })
    it('2 - Deve retornar um array com resultado', async () => {
        const resultado = await pegaArquivo('C:\\@Programação\\NodeJS\\Estudos\\lib-nodejs-markdown\\test\\arquivos\\texto1link.md')
        expect(resultado).toEqual(arrayResult);
    })

})



