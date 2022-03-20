function geraArrayDeURLS(arrayLinks) {
    return arrayLinks.map(ObjetoLink => Object.values(ObjetoLink).join())
}

function validaUrls(arrayLinks) {
    return geraArrayDeURLS(arrayLinks);
}

module.exports = validaUrls;