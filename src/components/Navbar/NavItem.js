import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../store";
import { pageContentsSet, activeNavItemSet } from "../../actions";
import { getArtistJSON } from "../../api";

export default function NavItem(props) {
  const { children, to, className, activeClassName } = props;
  const { state, dispatch } = useContext(StoreContext);

  const onClick = () => {
   pageContentsSet(dispatch, children, getArtistJSON(to));
   activeNavItemSet(dispatch, to);
  };
  
  return (
    <Link to={to}>
      <div
        onClick={onClick}
        className={`
            ${className} 
            ${state.navBar.activeItem === to ? activeClassName : ""}`}
      >
        {children}
      </div>
    </Link>
  );
}
