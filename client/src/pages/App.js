import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
const App = () => {
    return (
       
        <BrowserRouter>
        <div>
        <Routes>
        <Route path="/login" exact element={<Login/>} />
        <Route path="/register" exact element={<Register/>} />
        </Routes>
        </div>
        </BrowserRouter>
        
    );
}
export default App;