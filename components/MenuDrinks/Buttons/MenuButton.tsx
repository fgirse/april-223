import React from "react";

interface MenuButtonProps {
    /** The menu's type */
    menu_type: string;
    /** The menu's URL */
    url: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ menu_type, url }) => {
    const newLocal = "s:w-[66%] 3xl:w-[50%] block w-[86%] p-[1%] justify-content align-content bg-yellow-600 hover:bg-slate-500 border rounded-lg  uppercase m-button-margin";
    return (
        <button className={newLocal}>
            <a className="mt-5 text-white hover:bg-red-700 visited:text-medium-brown" href={url}>{menu_type} Menu</a>
        </button>
    )
}

export default MenuButton
