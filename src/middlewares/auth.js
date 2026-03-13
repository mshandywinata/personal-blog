const auth = require("basic-auth");
const compare = require("tsscmp");

const check = (name, pass) => {
    let isValid = true;

    isValid = compare(name, "admin") && isValid;
    isValid = compare(pass, "admin") && isValid;

    return isValid;
}

const basicAuth = (req, res, next) => {
    const credentials = auth(req);

    if (credentials && check(credentials.name, credentials.pass)) {
        req.isAdmin = true;
    } else {
        req.isAdmin = false;
    }

    next();
}

const requireAdmin = (req, res, next) => {
    if (!req.isAdmin) {
        return res.status(403).send("Access Denied");
    }
    next();
}

module.exports = { basicAuth, requireAdmin };