import MenuLinkList from "./MenuLinkList";
import MenuSettings from "./MenuSettings";

/**
 * @typedef {Object} MenuLinkInfo
 * @property {string} text
 */
/** @typedef {Array<MenuLinkInfo>} MenuLinksInfo */

const /**@type {MenuLinksInfo} */ LinksList = [
    { text: "Hello" },
    { text: "World" },
]

const MenuBar = () => {
    return (
        <div className="azul-menubar">
            <MenuLinkList linkList={LinksList} />
            <MenuSettings />
        </div>
    )
}
export default MenuBar;