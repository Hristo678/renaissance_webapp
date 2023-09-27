"use client"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import './productsInfo.css'
import { StyledAddButton, StyledIncreaseQunatity, StyledDecreaseQunatity } from "@components/StyledButton/StyledButton"
import { addToCart, getCart } from "@utils/cart"

const ProductInfo = (props) => {
    const [product, setProduct] = useState({})
    const [masses, setMasses] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [selectedMass, setSelectedMass] = useState('')
    useEffect(() => {
        axios.get('http://localhost:3000/api/products/' + props.params.name).then(result => {

            setProduct(result.data)
            let massesTemp = []
            Object.keys(result.data.pricePerMass).forEach((mass, index) => {
                if (index === 0) {
                    setSelectedMass(mass)
                    massesTemp.push({ selected: true, mass })
                } else {
                    massesTemp.push({ selected: false, mass })
                }
            })
            setMasses(massesTemp)
        })
    }, [])

    const toggleSelected = (mass) => {
        setSelectedMass(mass)
        const updatedMasses = masses.map(m => {
            return m.mass === mass ? { selected: true, mass: m.mass } : { selected: false, mass: m.mass }
        })
        setMasses(updatedMasses)
    }

    const handleQuantityChange = (newQuantity) => {
        if(newQuantity > -1){
            setQuantity(newQuantity)
        }
    }
    
    const handleAddToCart = (product) => {
        addToCart( {...product, quantity, mass: selectedMass})
        console.log(getCart())
    }
    return (
        <div>

        
    {product.image ? 
        <div className="card flex justify-center rounded-md z-10 pt-32">
        <div className="wrap-content bg-[#493a52] xl:flex md:flex l:flex sm:block rounded-md md:w-2/4 xl:w-2/5 z-20">
            <div>
                <Image className="card-img rounded-md w-80 md:w-96 xl:w-5/6" src={'/assets/' + product.image} alt="Image" height={900} width={500} />
            </div>
            <div className="content justify-center text-center ">
                <h1 className="text-4xl pt-4 text-white">{product.name}</h1>
                <ul className="flex justify-center pt-6 pb-4">
                    {masses.map(m => {
                        return (<div className="pr-2">
                            <li className='pr-3 e rounded-md text-center p-2 cursor-pointer' style={{ backgroundColor: m.selected ? '#498efc' : 'white' }} onClick={() => toggleSelected(m.mass)}>{m.mass}</li>
                        </div>)
                    })}
                </ul>


                <div className="flex justify-center">
                    <div>
                        <div className="pl-1">
                            <p id="quantityText" class=" pb-2 flex pr-4 text-white" >{'Quantity: ' + quantity} </p>
                            <div className="quantityBtnsDiv flex">
                                <div className="cursor-pointer flex pr-2" onClick={() => handleQuantityChange(quantity + 1)}>
                                    <StyledIncreaseQunatity />
                                </div>
                                <div  onClick={() => handleQuantityChange(quantity - 1)}>
                                    <StyledDecreaseQunatity />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => handleAddToCart(product)}>
                    <StyledAddButton title={'Add To Card'} hoverColor={'green'} ></StyledAddButton>
                    </div>
                </div>
                <div className="pt-8 text-white">
                    {product.description}
                </div>
            </div>
        </div>
    </div> : <div>Loading</div>}
    </div>)
}

export default ProductInfo