import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import MenuIcon from "@material-ui/icons/Menu";
import { BsFillInfoCircleFill, BsDot } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";


const StyledMenu = withStyles({
    paper: {
        border: "1px solid #d3d4d5",
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center",
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        "&:focus": {
            backgroundColor: theme.palette.primary.main,
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

function TheMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}>
                <MenuIcon />
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <StyledMenuItem>
                    <ListItemIcon>
                        <BsFillInfoCircleFill fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemIcon>
                        <BsDot fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Kitchens" />
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemIcon>
                        <BsDot fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Wall Units" />
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemIcon>
                        <BsDot fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Vanities" />
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemIcon>
                        <BsDot fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Elevator Interiors" />
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemIcon>
                        <BsDot fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Gallery" />
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemIcon>
                        <IoMdMail fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Contact" />
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
}

export default TheMenu;
