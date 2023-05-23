import React from "react";
import { Link } from "react-router-dom";
import './blockDescription.css';

function BlockDescription ({descriptionImg, descriptionTitle, descriptionPrice, descriptionWeight}) {


    return (
        <div className="block__description">
            <img src={descriptionImg} alt="" className="block__img" />
            <div className="block__info">
                <h1 className="block__title">{descriptionTitle}</h1>
                <p className="block__text">Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений. Разнообразный и богатый опыт начало повседневной работы по формированию позиции требуют от нас анализа позиций.Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений.</p>
                <div className="block__footer">
                    <div className="block__item">
                        <div className="block__price">{descriptionPrice} ₽ </div>
                        <div className="block__weight">/ {descriptionWeight}г</div>
                    </div>
                    <button className="block__bascet">
                        <Link to = '/Bascet' className="block__subtitle">В корзину</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export { BlockDescription };