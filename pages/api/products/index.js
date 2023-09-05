import { allProducts } from "@pages/db"

export default function handler(req, res) {
    
    
    res.status(200).json(allProducts, {status: 200}) 

} 