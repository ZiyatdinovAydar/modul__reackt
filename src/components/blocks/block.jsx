import React from 'react';
import './blocks.css';
import { useDispatch } from 'react-redux';
import { addBascet, removeCardBascet } from '../../store/reducer/addBascets';
import { Link} from 'react-router-dom';
import { useState } from 'react';


function Card ({id,imgCard, title, text, price, weight, plusPrice}) {

    const [added, setAdded] = useState(false)
    
    const dispatch = useDispatch()
    
    const add = () => {
        
       setAdded(!added)
        const item = {
            id: id, 
            imgCard: imgCard,
            // idx: uuidv4(),
            title: title,
            price: price,
            weight: weight,
        } 
        // console.log(uuidv4());
        if (!added){
            dispatch(addBascet(item))
        console.log(item)
     } else {
        dispatch(removeCardBascet(id))
     }  
    }

    return (
        <div className="card" >
            <Link to = {`/${id}`}>
                <img className="card__img" src={imgCard} alt=""/>
            </Link>
            <div className="card__info">
                <h2 className="card__title">{title}</h2>
                <p className="card__text">{text}</p>
            </div>
            <div className="price">
                <div className="price__item">
                    <p className="price__name">{price} ₽</p>
                    <p className="price__weight">/ {weight} г.</p>
                </div>
                {added
                    ?<button onClick={add} className="price__btn" type='button'>
                        <img className="price__img"  src={plusPrice} alt="добивать в корзину"/>
                    </button>
                    :<button onClick={add} className="price__btn1" type='button'>
                        <img className="price__img1"  src={plusPrice} alt="удалить из кознины"/>
                    </button>
                    }
                
            
            </div>
        
        </div>
    )
};

export  { Card };