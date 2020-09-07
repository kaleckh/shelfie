let getAll = (req, res) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_products()
        .then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
            console.log(err)
        });

}

let createProduct = (req, res) => {

    const dbInstance = req.app.get('db');

    var body = req.body
    dbInstance.create_product([body.name, body.price, body.image])
        .then(product => res.status(200).send(product))
        .catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
            console.log(err)
        });
}

module.exports = {
    getAll,
    createProduct


}