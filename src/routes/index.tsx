import React, {FC, lazy} from 'react';
import {Routes, Route} from "react-router-dom";

// const Layout = lazy(() => import('../layout/Layout'))

const Index: FC = (): JSX.Element => {
    return (
        <Routes>
            {/*<Route path="/*" element={<Layout />}>*/}
            {/*    <Route path="home" element={<h1>home</h1>} />*/}
            {/*</Route>*/}
        </Routes>
    );
};

export default Index;