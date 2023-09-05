import { allProducts } from "@pages/db"

export default async function handler(req, res) {
    for (let i = 0; i < allProducts.length; i++) {
        if (allProducts[i].name.toLocaleLowerCase() === req.query.name.toLocaleLowerCase()) {
            return res.status(200).json(allProducts[i])
        }
    }
    return res.status(200).json({ response: 'No such product: ' + req.query.name })



} 