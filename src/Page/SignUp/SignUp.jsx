import {Link} from 'react-router-dom';

import Socials from '../../components/Socials/Socials';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import {FcGoogle} from 'react-icons/fc';
import {FaFacebook} from 'react-icons/fa';

import '../globalstyle.scss';

const SignUp = () => {
    return (
        <form className='form'>
            <div className='wrap'>
                <div className='form__head'>
                    <h1 className='form__head-title'>Sign Up</h1>
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

                <Input type='text' placeholder='name' id='name' />
                <Input type='email' placeholder='mail@website.com' id='email' />
                <Input
                    type='password'
                    placeholder='min.8 character'
                    id='password'
                />

                <div className='form__forgetPass'>
                    <div className='form__forgetPass-remember'>
                        <input type='checkbox' id='checkbox__remember' />
                        <label
                            htmlFor='checkbox__remember'
                            className='label__remember'
                        >
                            I agree to the{' '}
                            <Link to='#' className='label__remember-text'>
                                Terms & Conditions
                            </Link>
                        </label>
                    </div>
                </div>

                <Button type='submit' title='Sign Up' />

                <p className='form__createAccount'>
                    Already have an Account? <Link to='/'>Sign in</Link>
                </p>
            </div>
        </form>
    );
};

export default SignUp;
