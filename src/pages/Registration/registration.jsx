import React from "react";
import './registration.css';
import { useDispatch } from "react-redux";
import { addAuth } from '../../store/reducer/auth';
import { useNavigate} from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

function Registration() {

    const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [logError, setLogError] = useState('');
    const [passError, setPassError] = useState('');

    let logCheck = false;
    let passCheck = false;

    const navigate = useNavigate();
  //const back = navigate(-1);

    const logHandler = (event) => {
    setLogin(event.target.value)
    };

    const passHandler = (event) => {
    setPassword(event.target.value)
    };

   const handleUserReg = (event) => {
    event.preventDefault();
      if(login === ''){
        setLogError('Поле не должно быть пустым');
        logCheck = false;
      }
      else if(login.length < 4){
        setLogError('Логин должен содержать не менее 4-х символов');
        logCheck = false;
      }
      else{
        setLogError('');
        logCheck = true;
      };
    
      if(password === ''){
        setPassError('Поле не должно быть пустым');
        passCheck = false;
      }
      else if(password.length < 4){
        setPassError('Пароль должен содержать не менее 4-х символов');
        passCheck = false;
      }
      else{
        setPassError('');
        passCheck = true;
      };
      console.log(logCheck, passCheck);
      console.log(login, password);

      

      if(logCheck === true && passCheck === true){
        dispatch(addAuth({
          login, password
        }));
        navigate('/enter');
      };
    };

    
    

    return(
        <div className="main">
            <div className="registration__container">
                <form action="#" class="registration__form" novalidate>
                    <button class="btn__ent">
                      <Link to='/enter'>Авторизоваться</Link></button>

                    <h1 class="title__reg">регистрация</h1>

                    <div class="login">

                        <input class="login__inp" placeholder="Логин" onChange={event => logHandler(event)} value={login}/>

                        <span class="email__erorr1">{logError}</span>
                    </div>

                    <div class="password">

                        <input class="password__inp" type="password" placeholder="Пароль" onChange={event => passHandler(event)} value={password}/>

                        <span class="password__erorr1">{passError}</span>
                    </div>

                    <div className="checkbox1">
                        <input class="checkbox__inp" type="checkbox"/>
                        <p class="checkbox__lab" for="">
                    Я согласен получать обновление на почту
                        </p>
                    </div>

                    <button type="submit" class="btn__reg1" onClick={handleUserReg}>
                        <p class="btn__text">Зарегистрироваться </p>
                    </button>
                </form>
            </div>
        </div>
    )
}

export { Registration };