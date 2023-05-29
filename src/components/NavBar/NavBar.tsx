import * as React from "react";

import Image from "next/image";
import Link from "next/link";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import logoIcon from "../../../public/icons/cliLogo.png";


const pages = ["Home", "Prayers", "API", "About Us"];

/**
 * A simple navbar that contains links to all the pages in the application. Has a logo for the site.
 */
function NavBar(): JSX.Element {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleCloseNavMenu = (): void => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" style={{ background: "#008F11" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Box
                        position="relative"
                        minWidth="64px"
                        minHeight="64px"
                        sx={{
                            marginLeft: {
                                xs: "-14px",
                                md: "-20px",
                            },
                        }}
                    >
                        <Image
                            src={logoIcon}
                            alt="site logo"
                            fill={true}
                        />
                    </Box>
                    <Box>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        {pages.map((page) => (
                            <Link
                                key={page}
                                href={page === "Home" ? "/" : (page === "About Us" ? "AboutUs" : `/${page}`)} passHref
                                style={{ textDecoration: "none" }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: "white", display: "block" }}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;