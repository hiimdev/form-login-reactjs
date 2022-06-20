import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from './Page/Login/Login'
import SignUp from './Page/SignUp/SignUp'

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
