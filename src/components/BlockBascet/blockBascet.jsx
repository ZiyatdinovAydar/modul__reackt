import React from 'react';
import './blockBascet.css';
import { Link } from 'react-router-dom';

function BlockBascet ({id, bascetImg, bascetTitle, bascetPrice,  remove}) {

    

    return (
        <div className="bascet">
            <div className='bascet__left'>
            <Link to = {`/${id}`}>
            <img className="bascet__img" src={bascetImg} alt="" />
            </Link>
            <p className="bascet__title">{bascetTitle}</p>
            </div>
            <div className='bascet__ringth'>
            <p className="bascet__price">{bascetPrice} ₽</p>
            <button className="bascet__btn" onClick={remove}>
                <img className="bascet__cross" src="/imeges/krestik2.png" alt="" />
            </button>
            </div>
        </div>
    )
};

export { BlockBascet };