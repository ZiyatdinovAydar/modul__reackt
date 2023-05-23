import React from "react";
import { Link } from "react-router-dom";
import './ordering.css';
import { useDispatch } from "react-redux";
import { removeAllBascet } from "../../store/reducer/addBascets";

function Ordering() {
    
    const dispatch = useDispatch()

    return (
        <div className="main">
        <div className="ordering">
            <div className="ordering__block">
                <h1 className="orderin__title">Ваш заказ оформлен</h1>
                <button className="ordering__close" onClick={() => dispatch(removeAllBascet())}>
                    <Link to = '/'>
                        <p className="ordering__text">ЗАКРЫТЬ ЗАКАЗ</p>
                    </Link>
                </button>
            </div>
        </div>
        </div>
    )
}

export { Ordering }