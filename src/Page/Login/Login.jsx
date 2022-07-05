import React, {useState} from 'react';

import {Link} from 'react-router-dom';

import Socials from '../../components/Socials/Socials';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import {FcGoogle} from 'react-icons/fc';
import {FaFacebook} from 'react-icons/fa';

import '../globalstyle.scss';

const Login = ({login, error}) => {
    const [details, setDetails] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        login(details);
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='wrap'>
                <div className='form__head'>
                    <h1 className='form__head-title'>Login</h1>
                    <p className='form__head-desc'>
                        See your growth and get consulting support!
                    </p>
                </div>

                <Socials title='Google' icon={<FcGoogle />} />
                <Socials title='FaceBook' icon={<FaFacebook />} />

                <div className='form__signin-gmail'>
                    <div className='form__signin-gmail_dash'></div>
                    <p className='form__signin-gmail_title'>
                        or Sign in with Email
                    </p>
                    <div className='form__signin-gmail_dash'></div>
                </div>

                <Input
                    type='email'
                    placeholder='mail@website.com'
                    id='email'
                    onChange={(e) =>
                        setDetails({...details, email: e.target.value})
                    }
                    value={details.email}
                />
                {/* {error !== '' ? <div className='error'>{error}</div> : ''} */}
                <Input
                    type='password'
                    placeholder='min.8 character'
                    id='password'
                    onChange={(e) =>
                        setDetails({...details, password: e.target.value})
                    }
                    value={details.password}
                />

                <div className='form__forgetPass'>
                    <div className='form__forgetPass-remember'>
                        <input type='checkbox' id='checkbox__remember' />
                        <label
                            htmlFor='checkbox__remember'
                            className='label__remember'
                        >
                            Remember me
                        </label>
                    </div>

                    <div className='form__forgetPass-forget'>
                        <p>Forget password?</p>
                    </div>
                </div>

                <Button type='submit' title='Login' />

                <p className='form__createAccount'>
                    Not registered yet?{' '}
                    <Link to='signup'>Create an Account</Link>
                </p>
            </div>
        </form>
    );
};

export default Login;
