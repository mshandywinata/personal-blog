const auth = require("basic-auth");
const compare = require("tsscmp");

const check = (name, pass) => {
    let isValid = true;

    isValid = compare(name, "mshandywinata") && isValid;
    isValid = compare(pass, "admin") && isValid;

    return isValid;
}

const basicAuth = (req, res, next) => {
    const credentials = auth(req);

    if (credentials && check(credentials.name, credentials.pass)) {
        return next();
    }

    res.set('WWW-Authenticate', 'Basic realm="personal-blog"');
    return res.status(401).send("Unauthorized");
}

module.exports = basicAuth;