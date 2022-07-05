import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './Page/Login/Login';
import SignUp from './Page/SignUp/SignUp';

import './App.scss';

function App() {
    const adminUser = {
        email: 'admin@gmail.com',
        password: '123456',
    };

    const [user, setUser] = useState({
        email: '',
    });

    // const [error, setError] = useState('');

    const login = (details) => {
        // console.log(details);

        if (
            details.email === adminUser.email &&
            details.password === adminUser.password
        ) {
            // console.log('logged in');
            setUser({
                email: details.email,
            });
            toast.success('🦄 Login success!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            // console.log('error');
            // setError('Email or Password invalid');
            toast.error('🦄 Email or Password invalid!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const logout = () => {
        // console.log('logout');
        setUser({
            email: '',
        });
    };

    return (
        <BrowserRouter>
            <div className='App'>
                {user.email !== '' ? (
                    <div className='wellcome'>
                        <h2>
                            Welcome: <span>{user.email}</span>
                        </h2>
                        <button onClick={logout}>Logout</button>
                    </div>
                ) : (
                    <Routes>
                        <Route path='/' element={<Login login={login} />} />
                        <Route path='/signup' element={<SignUp />} />
                    </Routes>
                )}
                <ToastContainer
                    position='top-right'
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <ToastContainer />
            </div>
        </BrowserRouter>
    );
}

export default App;
