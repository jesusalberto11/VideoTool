import "../../styles/components/navbar/NavbarItem.css";

const NavbarItem = (props: { title: string; icon: string }) => {
  return (
    <li className="navbar-item">
      <svg width="16" height="16" fill="#000" viewBox="0 0 16 16">
        <path d={props.icon} />
      </svg>
      {props.title}
    </li>
  );
};

export default NavbarItem;
