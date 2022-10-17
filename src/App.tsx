import {Route, Routes} from 'react-router-dom';
import Layout from './layout';
import Home from './views/home';
import Tokens from './views/tokens';
import Invoice from './views/invoice';
import Debitors from './views/debitors';
import Monitoring from './views/monitoring';
import Organizations from './views/organizations';

import './App.css';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="home" element={<Home />} />
                <Route path="invoice">
                    <Route path="list" element={<Home />} />
                </Route>
                <Route path='monitoring' element={<Monitoring />} />
                <Route path='invoice' element={<Invoice />} />
                <Route path='generate-lot-id' element={<Invoice />} />
                <Route path='book-keeping' element={<Invoice />} />
                <Route path='removed-contracts' element={<Invoice />} />
                <Route path='monitoring-tokens' element={<Tokens />} />
                <Route path='debitors' element={<Debitors />} />
                <Route path='organizations' element={<Organizations />} />
            </Route>
        </Routes>
    );
}

export default App;
