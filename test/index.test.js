const pegaArquivo = require('../index');

test('1 - Deve ser uma função', () => {
    expect(typeof pegaArquivo).toBe('function');
});