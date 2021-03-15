import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Join from './component/Join/Join';
import Chat from './component/Chat/Chat';

const App = () => {
    return (
    <BrowserRouter>
        <Route path='/' exact component={Join} />
        <Route path='/chat' exact component={Chat} />
    </BrowserRouter>
    )
    
}

export default App;