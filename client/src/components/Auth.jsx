import React,{useState} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import signinImage from '../assets/signup.jpg';
const cookies = new Cookies();

const initialState = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    avatarURL: '',
}

const Auth = () => {

    const [form,setForm] = useState(initialState);

    const [isSignup,setIsSignup] = useState(true);

    const handleChange = (e) => {
        setForm({...form,[e.target.name]:e.target.value});
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !isSignup);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const{fullName,username,password,phoneNumber,avatarURL} = form;

        const URL = 'https://localhost:5000/auth';

        const {data : {token,userId,hashedPassword}} = await axios.post(
            `${URL}/${isSignup?'signup':'login'}`,
            {username,password,fullName,phoneNumber,avatarURL}
        );

        cookies.set('token', token);
        cookies.set('username', username);
        cookies.set('fullName', fullName);
        cookies.set('userId', userId);

        if(isSignup) {
            cookies.set('phoneNumber', phoneNumber);
            cookies.set('avatarURL', avatarURL);
            cookies.set('hashedPassword', hashedPassword);
        }
        window.location.reload();
    }

    const hahayt = isSignup ? ' (Sonra sorulacak olan)':' ';
  return (
    <div className='auth__form-container'>
        <div className='auth__form-container_fields'>
            <div className='auth__form-container_fields-content'>
                <p>{isSignup? 'Kayıt ol ( ˘ ³˘)':'Giriş yap ｼ'}</p>

                <form onSubmit={handleSubmit}>
                    {isSignup &&(
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='fullName'></label>
                            <input
                                name = 'fullName'
                                type='text'
                                placeholder='Ad - Soy Ad'
                                onChange={handleChange}
                            />
                        </div>
                    )}
                    <div className='auth__form-container_fields-content_input'>
                        <label htmlFor='username'></label>
                        <input
                            name = 'username'
                            type='text'
                            placeholder={'Takma ad ' + hahayt}
                            onChange={handleChange}
                        />
                    </div>
                    {isSignup &&(
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='phoneNumber'></label>
                            <input
                                name = 'phoneNumber'
                                type='text'
                                placeholder='Telefon Numarası'
                                onChange={handleChange}
                            />
                        </div>
                    )}
                    {isSignup &&(
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='avatarURL'></label>
                            <input
                                name = 'avatarURL'
                                type='text'
                                placeholder='Profil Bağlantısı'
                                onChange={handleChange}
                            />
                        </div>
                    )}
                    <div className='auth__form-container_fields-content_input'>
                        <label htmlFor='password'></label>
                        <input
                            name = 'password'
                            type='password'
                            placeholder='Parola  (Şifrelenecek kız merak etme güvendesin (｡•̀ᴗ-)  )'
                            onChange={handleChange}
                        />
                    </div>
                    {isSignup &&(
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='confirmPassword'></label>
                            <input
                                name = 'confirmPassword'
                                type='password'
                                placeholder='Parolanu Doğrula'
                                onChange={handleChange}
                            />
                        </div>
                    )}

                    <div className="auth__form-container_fields-content_button">
                        <button>{isSignup ? "Kayıt  ol" : "Giriş yap"}</button>
                    </div>

                </form>
                <br/>
                <br/>
                <div className='auth__form-container_fields-account'>
                    {isSignup?'Zaten bir hesabın var mı ? ':'Bir hesabın yok mu ? '}
                    <span onClick={switchMode}>&emsp;{isSignup?' Giriş yap':'Kayıt ol !'}</span>
                </div>

            </div>
        </div>

        
    </div>
  )
}
export default Auth;