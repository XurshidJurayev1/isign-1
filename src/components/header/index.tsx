import { Link } from "react-router-dom";
import {
  AppBar, Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography
} from "@mui/material";
import { FC, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const navLinks = [
  { name: "Bosh sahifa", link: "/home" },
  { name: "Monitoring", link: "/monitoring" },
  { name: "Hisob faktura", link: "/invoice" },
  { name: "Lot raqam aniqlash", link: "/generate-lot-id" },
  { name: "Buhgalteriya", link: "/book-keeping" },
  { name: "O'chirilgan shart.", link: "/removed-contracts" },
  { name: "Qarzdorlar", link: "/debitors" },
  { name: "Tokenlar", link: "/monitoring-tokens" },
  { name: "Tashkilotlar", link: "/organizations" }
];

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header: FC = (): JSX.Element => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">

        <Container maxWidth={false}>
          <Toolbar disableGutters>
            {/*<AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />*/}


            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <GiHamburgerMenu />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left"
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" }
                }}
              >
                {navLinks.map((page, idx) => (
                  <MenuItem key={idx + page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link to={page.link}>
                        {page.name}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/*<Typography*/}
            {/*  variant="h5"*/}
            {/*  noWrap*/}
            {/*  component="a"*/}
            {/*  href=""*/}
            {/*  sx={{*/}
            {/*    mr: 2,*/}
            {/*    display: { xs: "flex", md: "none" },*/}
            {/*    flexGrow: 1,*/}
            {/*    fontFamily: "monospace",*/}
            {/*    fontWeight: 700,*/}
            {/*    letterSpacing: ".3rem",*/}
            {/*    color: "inherit",*/}
            {/*    textDecoration: "none"*/}
            {/*  }}*/}
            {/*>*/}
            {/*  LOGO*/}
            {/*</Typography>*/}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {navLinks.map((page, idx) => (
                <MenuItem key={idx + page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={page.link}>
                      {page.name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>


        <>
          {/*<header className="bg-white">*/}

          {/*<div className="header__top flex items-center w-100 px-4 py-3 justify-between border-b border-slate-200">*/}
          {/*<div className="header__brand flex items-center">*/}
          {/*    <div className="mr-2">*/}
          {/*        <img */}
          {/*            src="https://isign.uz/assets/logo@1x.webp" */}
          {/*            alt="O'zbekiston gerbi"*/}
          {/*            className="h-16"*/}
          {/*        />*/}
          {/*    </div>*/}
          {/*    <div className="brand__body flex flex-col">*/}
          {/*        <span className="font-semibold text-md">IJRO INTIZOMI</span>*/}
          {/*        <span className="text-xs text-slate-600">IDORALARARO YAGONA ELEKTRON TIZIMI</span>*/}
          {/*    </div>*/}
          {/*</div>*/}

          {/*  <nav className="flex items-center justify-between py-3 px-4 ">*/}
          {/*    {*/}
          {/*      navLinks.map((el, index) => (*/}
          {/*        <Link to={el.link} key={"link" + index}>*/}
          {/*          {el.name}*/}
          {/*        </Link>*/}
          {/*      ))*/}
          {/*    }*/}
          {/*  </nav>*/}

          {/*  <div className="flex items-center">*/}
          {/*    <div className="user__img w-10 h-10 rounded-full bg-slate-400 mr-2"></div>*/}
          {/*    <span className="font-semibold">USERNAME</span>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<nav className="flex items-center justify-between py-3 px-4 border-b border-slate-200">*/}
          {/*  {*/}
          {/*    navLinks.map((el, index) => (*/}
          {/*      <Link to={el.link} key={"link" + index}>*/}
          {/*        {el.name}*/}
          {/*      </Link>*/}
          {/*    ))*/}
          {/*  }*/}
          {/*</nav>*/}
          {/*</header>*/}
        </>
      </AppBar>
    </Box>
  );
};

export default Header;