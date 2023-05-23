import React, { useEffect, useState } from "react";
import './description.css'
import { BlockDescription } from '../../components/blockDescription/blockDescription'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { userAuth } from '../../store/reducer/auth';
import { CardProducts } from "../../components/CardProduct/productsData";


function Description() {

    const { paramId } = useParams()
    console.log(paramId)

    const dispatch = useDispatch();
    const [params, setParams] = useState([])

    const cardAdd = (arr) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('arr', arr)
                
              resolve(arr)  
            },500)
            
     })
    }

    useEffect(() => {
        cardAdd(CardProducts).then(data => {
            const dataId = data.filter((item) => item.id === JSON.parse(paramId))
            console.log('dataId', dataId)
                 if(dataId) 
                {
            setParams(dataId)
        }})
    
    }, [])

    // колличество
    const count = useSelector(state => state.products.countProductInBascet)
    // сумма
    const allPrice = useSelector(state => state.products.allPriceProductsBascet)
    console.log('price', allPrice)
    return (
        <div className="main">
            <div className="description__container">
                <div className="description__header">
                    <button className="description__back"  >
                        <Link to = {'/'}>
                            <img className='description__arrow' src="/imeges/leftarrow 2.png" alt="" />
                        </Link>
                    </button>
                <div className='description__item'>
                    <p className='description__text'> {count} товара <br />на сумму {allPrice} ₽</p>
                    <Link to= { '/Bascet' } >
                        <img className = "description__img" src = "/imeges/korzinka.png" alt=""/>
                    </Link>
                    <button className='description__btn'>
                        <Link to = {'/enter'} onClick={() => dispatch(userAuth(false))}>
                            <p className="description__enter">выйти</p>
                        </Link>
                    </button>
                </div>
                </div>
                <div className="description"> 
                {params.map(item => {
                    console.log(params)
                    const  {id, imgCard, title, price, weight}= item
                    console.log(item)
                    return (
                        <BlockDescription
                            key = {id}
                            descriptionImg = {imgCard}
                            descriptionTitle = {title}
                            descriptionPrice = {price}
                            descriptionWeight = {weight}          
                        /> )
                      }) 
                      
                      }  
                </div>
            </div>
        </div>
    )
}

export { Description };