import Logo from "../Header/Logo/Logo";
import List from "../Header/List/List";
import Switch from "../Header/Switch/Switch";

import "../Header/Header.scss";
const Header = () => {
  return (
    <header>
      <div className="container">
        <Logo />
        <List />
        <Switch />
      </div>
    </header>
  );
};

export default Header;
