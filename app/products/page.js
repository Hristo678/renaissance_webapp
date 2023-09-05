"use client"

import Image from "next/image";
import './products.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect, useState } from "react";
import StyledButton from "@components/StyledButton/StyledButton";
import EuroIcon from '@mui/icons-material/Euro';
import axios from "axios";


const Products = () => {

    const priceAndMassConst = { '25g': 4.99, '100g': 17.99, '200g': 33.99, '500g': 84.99 }
    const [priceAndMass, setPriceAndMass] = useState({})
    const [products, setProducts] = useState({})
    const [flavourSelectedMass, setFlavourSelectedMass] = useState({ 'Mango': '25g', 'RedBull': '25g', 'Watermelon': '25g', 'Lime': '25g', 'Strawberry': '25g', 'Lemonade': '25g', })

    useEffect(() => {
        if (Object.keys(products).length === 0) {
            axios.get('http://localhost:3000/api/products').then(result => {
                const updatedProducts = {}
                result.data.forEach(p => {

                    updatedProducts[p.name] = { price: p.pricePerMass['25g'], mass: '25g', image: p.image, quantity: 0, name: [p.name] }
                })
                setProducts(updatedProducts)
            })

            const temp = {
                'Mango': { ...priceAndMassConst }, 'RedBull': { ...priceAndMassConst }, 'Watermelon': { ...priceAndMassConst }, 'Lime': { ...priceAndMassConst },
                'Lemonade': { ...priceAndMassConst }, 'Strawberry': { ...priceAndMassConst }
            }
            setPriceAndMass(temp)
        }


    }, [products])

    const handleMassChange = (m, p) => {
        flavourSelectedMass[p] = m
        setFlavourSelectedMass(flavourSelectedMass)

        products[p].mass = m
        let temp = products[p]
        temp.mass = m
        setProducts((prev) => {
            return { ...prev, [p]: temp }
        })
    }

    const handleQunatityChange = (action, product) => {
        let tempProduct = products[product]
        action === 'increase' ? setProducts(prev => {
            tempProduct.quantity = tempProduct.quantity + 1
            return { ...prev, [product]: tempProduct }
        }) :
            setProducts(prev => {
                tempProduct.quantity = tempProduct.quantity - 1
                return { ...prev, [product]: tempProduct }
            })
    }

    return (
        <section className="slider bg-var(--bg) p-4 pt-40 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center font-sans" id="slider">
            {Object.keys(products).length > 0 ? Object.keys(products).map((p, index) => {
                return (
                    <div className="card" key={index + p}>
                        <Image onClick={() => console.log('clie')} src={'/assets/' + products[p].image} width={200} height={300} alt="sample" class="card-img" />
                        <div class="card-content">
                            <div class="card-body">
                                <h1 class="product-name">{p}</h1>
                                <div class="card-star">
                                </div>
                                <div className="flex">
                                    <p class="card-price">{products[p].price}</p>
                                    <EuroIcon sx={{ color: '#FFD700' }} />
                                </div>
                            </div>

                            <div class="card-footer">
                                <div className="flex items-center pb-2 justify-center">
                                    <StyledButton title={'More...'} hoverColor={'bg-[#00A859]'} />
                                </div>
                                <div class=" flex">
                                    <div class=" flex">
                                        <StyledButton title={'Add To Card'} hoverColor={'bg-[#00A859]'} />
                                        <div className="pl-1">
                                            <p id="quantityText" class="btn btn-border pb-2 flex">Quantity: {products[p].quantity}</p>
                                            <div className="quantityBtnsDiv flex">
                                                <div onClick={() => handleQunatityChange('increase', p)} className="cursor-pointer flex pr-2">
                                                    <AddIcon className="cursor-pointer addOrRemoveIcon" />

                                                </div>
                                                <RemoveIcon onClick={() => handleQunatityChange('decrease', p)} className="cursor-pointer addOrRemoveIcon" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="unitMass flex pl-1">
                                        <div class="dropup">
                                            <div>
                                                <button className="dropbtn bg-sky-700 hover:bg-sky-700" key={products[p]}>{products[p].mass}</button>
                                            </div>
                                            <div class="dropup-content">
                                                {masses.map(m => <a onClick={() => handleMassChange(m, p)} > {m}</a>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }) : <div>Loading</div>}
        </section>
    );
};


const masses = ['25g', '100g', '200g', '500g']

export default Products;