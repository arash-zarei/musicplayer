import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AiOutlineMore } from "react-icons/ai";
import { Link } from "react-router-dom";

const options = [
  { title: "صفحه اصلی", path: "/" },
  { title: "آهنگ ها", path: "/musics" },
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AiOutlineMore color="#fcba03" size={35} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{ "aria-labelledby": "long-button" }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{ style: { maxHeight: ITEM_HEIGHT * 4.5, width: "20ch" } }}
      >
        {options.map((option) => (
          <Link
            to={option.path}
            style={{ textDecoration: "none", color: "#1c2340" }}
            key={option.path}
          >
            <MenuItem
              selected={option === "Pyxis"}
              onClick={handleClose}
              sx={{ direction: "rtl" }}
            >
              {option.title}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}
