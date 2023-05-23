import React from "react";
import './enter.css';
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { userAuth } from '../../store/reducer/auth'

function Enter() {
        
        const user = useSelector(state => state.auth.user)
        console.log(user)

        const dispatch = useDispatch()
        const[entrlogin, setEntrLogin] = useState('');
        const[entrPassword, setEntrPassword] = useState('');
    
        const [entrLogError, setEntrLogError] = useState('');
        const [entrPassError, setEntrPassError] = useState('');

        const [errorLoginPassword, setLoginPasswordChekError] = useState('');
    
        let entrLogCheck = false;
        let entrPassCheck = false;
        let errorLoginPasswordCheck = false;

        
        const navigate = useNavigate();
    
        const entrLogHandler = (event) => {
            setEntrLogin(event.target.value)
          };
        
        const entrPassHandler = (event) => {
            setEntrPassword(event.target.value)
          };
        
        const handleUserCheck = (event) => {
        event.preventDefault();
            if(entrlogin === ''){
                setEntrLogError('Поле не должно быть пустым');
                entrLogCheck = false;
              }
              else if(entrlogin.length < 4){
                setEntrLogError('Логин должен содержать не менее 4-х символов');
                entrLogCheck = false;
              }
              else{
                setEntrLogError('');
                entrLogCheck = true;
              };
            
              if(entrPassword === ''){
                setEntrPassError('Поле не должно быть пустым');
                entrPassCheck = false;
              }
              else if(entrPassword.length < 4){
                setEntrPassError('Пароль должен содержать не менее 4-х символов');
                entrPassCheck = false;
              }
              else{
                setEntrPassError('');
                entrPassCheck = true;
              }

              console.log(entrLogCheck, entrPassCheck);
              console.log(entrlogin, entrPassword);
              console.log(typeof entrlogin, typeof entrPassword)

              const userEnter = ({login: entrlogin, password: entrPassword})
              localStorage.setItem('user2', JSON.stringify(userEnter))

              const person2 = JSON.parse(localStorage.getItem("user2"))
              console.log('person2', person2)

              if (entrLogCheck === true && entrPassCheck === true){
                  const person = user 
                  console.log(person)
                  for (let i = 0; i < person.length; i ++) {
                    let pers = person[i]
                    console.log(pers)
                   if(JSON.stringify(pers) === JSON.stringify(person2)){
                    dispatch(userAuth(true))
                    navigate('/');
                    setLoginPasswordChekError('');
                    errorLoginPasswordCheck = false;
                  } else {
                    setLoginPasswordChekError('логин или пароль не вырные');
                    errorLoginPasswordCheck = true
                  }
                }}
            };
              
    return(
        <div className="main">
            <div className="enter">
                <form action="#" class="registration" novalidate>
                    <button class="btn__enter">
                        <Link to={'/registration'}>
                        Зарегистрироваться
                        </Link>
                    </button>

                    <h1 class="title">вход</h1>


                    <div class="login">

                        <input class="login__input" placeholder="Логин" onChange = {event => entrLogHandler(event)} value={entrlogin} />

                        <span class="email__erorr">{entrLogError}</span>
                    </div>

                    <div class="password">

                        <input class="password__input" type="password" placeholder="Пароль" onChange = {event => entrPassHandler(event)} value={entrPassword}/>

                        <span class="password__erorr">{entrPassError}</span>
                    </div>

                    <div className="checkbox">
                        <input class="checkbox__input" type="checkbox"/>
                        <p class="checkbox__label" for="">
                    Я согласен получать обновление на почту
                        </p>
                    </div>
                    <div className="error">{errorLoginPassword}</div>
                    <button type="submit" class="btn__reg" onClick={handleUserCheck}>
                        <p class="btn__text">Войти </p>
                    </button>
                </form>
            </div>
        </div>
    )
}

export { Enter };