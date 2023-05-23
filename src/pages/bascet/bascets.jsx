import React from 'react';
import './bascets.css';
import { BlockBascet } from '../../components/BlockBascet/blockBascet';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeCardBascet } from '../../store/reducer/addBascets';
import { userAuth } from '../../store/reducer/auth';


function Bascet() {
    const bascet = useSelector(state => state.products.bascet)
    const price = useSelector(state => state.products.allPriceProductsBascet)
    console.log('bascet', bascet)
    console.log('price', price)
    const dispatch = useDispatch()

    return (
        <div className="main">
        <div className="container">
            <div className="header">
                <Link to={'/'}>
                <button className="header__btn">
                        <img className='header__img' src="/imeges/leftarrow 2.png" alt="" />
                </button>
                </Link>
                <h1 className="header__title"> корзина с выбранными товарами </h1>
                <button className='header__exit'>
                        <Link to = {'/enter'} onClick={() => dispatch(userAuth(false))}>
                            <p className="header__enter">выйти</p>
                        </Link>
                    </button>
            </div>
            <div className="basket__card">
                {bascet.map(item => {
                    console.log(bascet)
                    const  {id, imgCard, title, price }= item
                    return (
                        <BlockBascet
                            key = {id}
                            id = {id}
                            bascetImg = {imgCard}
                            bascetTitle = {title}
                            bascetPrice = {price}
                            remove = {() => dispatch(removeCardBascet(id))}
                        />   
                    )   
                })}
            
            </div>
            <div className="footer">
                <div className='footer__info'>
                <p className="footer__price"> заказ на сумму: </p>
                <p className='footer__check'>{price} ₽</p>
                </div>
                <button className="footer__btn">
                    <Link to = '/ordering'>
                    <p className="footer__text"> Оформить заказ </p>
                    </Link>
                </button>
            </div>
        </div>
        </div>
    )   
    
};

export { Bascet };