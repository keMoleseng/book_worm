import { AppBar, Badge, Grid, Toolbar, InputBase, IconButton } from "@mui/material";
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Header() {
     const handleClick = e => (
        alert("Clicked")
     )
    return (
            <AppBar position="static" 
                sx={{
                    transform: "translateZ(0)",
                    backgroundColor: "tan"
                    
                }}
            >
                <Toolbar>
                    <Grid container alignItems="center">
                        <Grid item >
                            <InputBase
                                placeholder="Search for book"
                                sx={{
                                    opacity: "0.6",
                                    padding: "0px 8px",
                                    fontSize: "0.8rem",
                                    "&.MuiInputBase-root:hover": {
                                        opacity: "0.6",
                                        width: "200px",
                                        backgroundColor: "beige",
                                        padding: "0px 8px",
                                        borderRadius: "15px"
                                    }
                                }}
                                startAdornment={
                                    <SearchIcon 
                                        fontSize="small"
                                    />
                                }
                            >

                            </InputBase>
                        </Grid>
                        <Grid item sm></Grid>
                        <Grid item>
                            <IconButton onClick={handleClick}>
                                <Badge badgeContent={2} 
                                    sx={{
                                        "& .MuiBadge-badge": {
                                            backgroundColor: "#333996",
                                            color: "#fff",
                                        }
                                    }}
                                >
                                    <NotificationsIcon 
                                    />
                                </Badge>
                            </IconButton>
                            <IconButton onClick={handleClick}>
                                <LogoutIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
    )
}