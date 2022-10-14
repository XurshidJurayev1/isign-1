import { Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Home from './views/home';
import Tokens from './views/tokens';
import Invoice from './views/invoice';
import Monitoring from './views/monitoring';

import './App.css';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='home' element={<Home />} />
                <Route path='monitoring' element={<Monitoring />} />
                <Route path='invoice' element={<Invoice />} />
                <Route path='monitoring-tokens' element={<Tokens />} />
            </Route>
        </Routes>
    );
}

export default App;
