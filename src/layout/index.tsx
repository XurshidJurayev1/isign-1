import { Outlet } from "react-router-dom"
import Header from "../components/header"

const Layout = () => {
    return (
        <>
            <Header />
            <main className="bg-slate-200 min-h-screen">
                <Outlet />
            </main>
        </>
    )
}

export default Layout