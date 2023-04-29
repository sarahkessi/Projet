class HttpErreur extends error {
    constructor(message, codeErreur) {
        super(message);
        this.code = codeErreur;
    }
}

module.exports = HttpErreur;