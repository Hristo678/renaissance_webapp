"use client"

import styles from "@styles/style";
import { tobacco_cup, smoke3, smoke4, mango } from "@public/assets";
import Image from "next/image";
import './products.css';


const Products = () => {
  return (
    // <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <section class="slider" id="slider"> 
        <div class="card">
        <Image src={mango} alt="" class="card-img" />
            <div class="card-content">
                
                <h1 class="card-title">HP Spectre x360 15</h1>
                <div class="card-body">
                    <div class="card-star">
                        <span class="rating-value">4.5</span>
                        <span class="star">&#9733;</span>
                    </div>
                    <p class="card-price">$650.99</p>
                </div>
                <div class="card-footer flex">
                    {/* <button class="btn btn-success">Buy Now</button> */}
                    <button class="btn btn-border">Add To Cart</button>
                    <button class="btn btn-border">Quantity: 1</button>
                </div>
            </div>
        </div>
        <div class="card">
        <Image src={mango} alt="" class="card-img" />
            <div class="card-content">
                
                <h1 class="card-title">HP Spectre x360 15</h1>
                <div class="card-body">
                    <div class="card-star">
                        <span class="rating-value">4.5</span>
                        <span class="star">&#9733;</span>
                    </div>
                    <p class="card-price">$650.99</p>
                </div>
                <div class="card-footer flex">
                    {/* <button class="btn btn-success">Buy Now</button> */}
                    <button class="btn btn-border">Add To Cart</button>
                    <button class="btn btn-border">Quantity: 1</button>
                </div>
            </div>
        </div>

      
    </section>
  );
};

export default Products;