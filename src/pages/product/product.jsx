import React from 'react';
import './product.css';
import { Card } from '../../components/blocks/block';
import { CardProducts } from '../../components/CardProduct/productsData';
import { Link } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { userAuth } from '../../store/reducer/auth'



function Products() {

    const dispatch = useDispatch()
    // колличество
    const count = useSelector(state => state.products.countProductInBascet)
    // сумма
    const allPrice = useSelector(state => state.products.allPriceProductsBascet)
    console.log(allPrice)
    console.log(count)

    return (   
        <div className="main">
        < div className = "products">
            <div className="products__header">
                <h1 className = "products__title"> наша продукция </h1>
                <div className='Product__item'>
                    <p className='product__text'> {count} товара <br />на сумму {allPrice} ₽</p>
                    <Link to= { '/Bascet' }>
                        <img className = "products__img" src = "/imeges/korzinka.png" alt=""/>
                    </Link>
                    <button className='products__btn'>
                        <Link to = {'/enter'} onClick={() => dispatch(userAuth(false))}>
                            <p className="products__enter">Выйти</p>
                        </Link>
                    </button>
                </div>
            </div>
            
            <div className='products__card' >
             {CardProducts.map(item => {
                const  {id, imgCard, title, text, price, weight, plusPrice}= item
                return (
                    <Card
                    key = {id}
                    id = {id}
                    imgCard = {imgCard}
                    title = {title}
                    text = {text}
                    price = {price}
                    weight = {weight}
                    plusPrice = {plusPrice}
                    />                
                )
            })}
            </div>
       </div>
       </div>
    )
    
}
console.log(CardProducts)
export { Products };