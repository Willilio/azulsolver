import MenuLink from "./MenuLink";

const MenuLinkList = ({ linkList }) => {
    return (
        <div className="azul-menubar-links">
            {linkList.map((link, index) => {
                const listID = `menu-link-${index}`;
                return <MenuLink id={listID} key={listID} text={link.text} />;
            })}
        </div>
    )
}
export default MenuLinkList;