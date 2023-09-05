"use client"
import { Stack } from "@mui/material"
import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"

const ProductInfo = (props) => {
    const [product, setProduct] = useState({})
    console.log(props.params.name)
    useEffect(() => {
        axios.get('http://localhost:3000/api/products/' + props.params.name).then(result => {
            console.log(result.data)

            setProduct(result.data)

        })
    }, [])

    return (<div className="card flex justify-center rounded-md">
        <div className="wrap bg-white flex rounded-md">
            <div>
                <Image className="card-img rounded-md" src={'/assets/' + product.image} alt="Image" height={800} width={400} />
            </div>
            <div className="description">
                <p>Some descr</p>
            </div>
        </div>

    </div>)
}

export default ProductInfo