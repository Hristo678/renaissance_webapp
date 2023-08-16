"use client"

import styles from "@styles/style";
import {
    mango, mango2, banana, lemonade,
    lime, strawberry, watermelon, black_currant, RedBull
} from "@public/assets";
import Image from "next/image";
import './products.css';
import { Autocomplete, Box, TextField } from "@mui/material";
import styled from "@emotion/styled";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect, useState } from "react";


const Products = () => {

    const [mass, setMass] = useState('25g')
    const priceAndMassConst = { '25g': 5, '100g': 18, '200g': 34, '500g': 85 }
    const [priceAndMass, setPriceAndMass] = useState({})
    const [quantity, setQuantity] = useState(0)
    const [products, setProducts] = useState({})
    const [massMango, setMassMango] = useState('25') 
    const [flavourSelectedMass, setFlavourSelectedMass] = useState({ 'Mango':'25g', 'RedBull': '25g', 'Watermelon': '25g' })
    let key = '1'

    useEffect(() => {
        const temp = { 'Mango': { ...priceAndMassConst }, 'RedBull': { ...priceAndMassConst }, 'Watermelon': { ...priceAndMassConst } }
        setPriceAndMass(temp)
        let productsTemp = {}
        Object.keys(temp).forEach(k => {
            products[k] = { price: temp[k]['25g'], mass: '25g', image: mango2 }
        })
        setProducts(products)


    }, [flavourSelectedMass, products])

    const handleClick = async (e, m, p) => {
        console.log(m)
        console.log(flavourSelectedMass)
        key = key + 1
        flavourSelectedMass[m] = '26g'
        setFlavourSelectedMass(flavourSelectedMass)
        products[m].mass = '26g'
        setProducts(products)
    }
console.log(products)
    return  (
        // <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <section class="slider" id="slider">
            <div class="card">
                <Image src={mango2} alt="" class="card-img" />
                <div class="card-content">

                    <div class="card-body">
                        <h1 class="product-name">Mango</h1>
                        <div class="card-star">

                        </div>
                        <p class="card-price">$650.99</p>
                    </div>
                    <div class="card-footer flex">
                        <div class="flex ">
                            {/* <button class="btn btn-success">Buy Now</button> */}
                            <button id="add-to-card-btn" className="btn btn-border border-2 ">Add To Cart</button>
                            <div >
                                <button id="quantityText" class="btn btn-border pb-2">Quantity: {quantity}</button>
                                <div className="quantityBtnsDiv flex">
                                    <div onClick={() => setQuantity(prev => prev + 1)} className="cursor-pointer flex pr-2">
                                        <AddIcon className="cursor-pointer addOrRemoveIcon" />

                                    </div>
                                    <RemoveIcon onClick={() => setQuantity(prev => prev - 1)} className="cursor-pointer addOrRemoveIcon" />
                                </div>
                            </div>

                        </div>


                        <div class="dropup">
                            <div>
                                <button class="dropbtn">Dropup</button>

                            </div>
                            <div class="dropup-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {Object.keys(products).length > 0 && Object.keys(products).map((p) => {
                return (
                    <div class="card" >
                        <Image src={products[p].image} class="card-img" />
                        <div class="card-content">

                            <div class="card-body">
                                <h1 class="product-name">{p}</h1>
                                <div class="card-star">

                                </div>
                                <p class="card-price">{products[p].price}</p>
                            </div>
                            <div class="card-footer flex">
                                <div class=" flex">
                                    {/* <button class="btn btn-success">Buy Now</button> */}
                                    <button id="add-to-card-btn flex" className="btn btn-border border-2 ">Add To Cart</button>
                                    <div >
                                        <button id="quantityText" class="btn btn-border pb-2 flex">Quantity: {quantity}</button>
                                        <div className="quantityBtnsDiv flex">
                                            <div onClick={() => setQuantity(prev => prev + 1)} className="cursor-pointer flex pr-2">
                                                <AddIcon className="cursor-pointer addOrRemoveIcon" />

                                            </div>
                                            <RemoveIcon onClick={() => setQuantity(prev => prev - 1)} className="cursor-pointer addOrRemoveIcon" />
                                        </div>
                                    </div>

                                </div>

                                <div className="unitMass flex pl-6">
                                    <div class="dropup">
                                        <div>
                                            <span class="dropbtn " key={products[p]}>{products[p].mass}</span>

                                        </div>
                                        <div class="dropup-content">
                                            {masses.map(m => <a onClick={  () =>  handleClick(m, p)} > {m}</a>)}

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                )
            })}

        </section>
    );
};






export const WhiteBorderTextField = styled(TextField)(({ theme }) => ({
    '& label.Mui-focused': {
        color: 'white',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
            color: 'white'
        },
        '&:hover fieldset': {
            borderColor: 'white',
            color: 'white'

        },
        '&.Mui-focused fieldset': {
            borderColor: 'black',

        },
    }
}));

const masses = ['25g', '100g', '200g', '500g']

export default Products;