import React from "react"
import MenuButton from "./MenuButton"

const MenuButtons = () => {
    return (
        <section className="pt-12 gap-y-1 flex flex-col justify-center items-center">
            <MenuButton url="public\menu-pdf-drinks.pdf" menu_type="Drinks" />
            <MenuButton url="/menu-pdf-weine.pdf" menu_type="Weine" />
            <MenuButton url="/menu-pdf-cocktails.pdf" menu_type="Cocktails" />
            <MenuButton url="/menu-pdf-kurze.pdf" menu_type="Kurze" />
            <MenuButton url="/menu-pdf-snachs.pdf" menu_type="Snacks" />
        </section>

    )
}
export default MenuButtons