function add(...rest) {
    return rest.reduce((p, c) => p + c, 0)
}
module.exports = add;