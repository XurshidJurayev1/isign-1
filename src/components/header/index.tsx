import { Link } from "react-router-dom"

const navLinks = [
    { name: "Bosh sahifa", link: "/home" },
    { name: "Monitoring", link: "/monitoring" },
    { name: "Hisob faktura", link: "/invoice" },
    { name: "Lot raqam aniqlash", link: "/generate-lot-id" },
    { name: "Buhgalteriya", link: "/book-keeping" },
    { name: "O'chirilgan shart.", link: "/removed-contracts" },
    { name: "Qarzdorlar", link: "/debitors" },
    { name: "Tokenlar", link: "/monitoring-tokens" },
    { name: "Tashkilotlar", link: "/organizations" },
]

const Header = () => {
    return (
        <header className="bg-white">
                <div className="header__top flex items-center px-4 py-3 justify-between border-b border-slate-200">
                    <div className="header__brand flex items-center">
                        <div className="mr-2">
                            <img 
                                src="https://isign.uz/assets/logo@1x.webp" 
                                alt="O'zbekiston gerbi"
                                className="h-16"
                            />
                        </div>
                        <div className="brand__body flex flex-col">
                            <span className="font-semibold text-md">IJRO INTIZOMI</span>
                            <span className="text-xs text-slate-600">IDORALARARO YAGONA ELEKTRON TIZIMI</span>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="user__img w-10 h-10 rounded-full bg-slate-400 mr-2"></div>
                        <span className="font-semibold">USERNAME</span>
                    </div>
                </div>
                <nav className="flex items-center justify-between py-3 px-4 border-b border-slate-200">
                    {
                        navLinks.map((el, index) => (
                            <Link to={el.link} key={"link" + index}>
                                { el.name }
                            </Link>
                        ))
                    }
                </nav>
            </header>
    )
}

export default Header