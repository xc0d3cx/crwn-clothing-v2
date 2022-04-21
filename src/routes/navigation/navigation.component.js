import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrownLogo } from "../../assests/crown.svg";
import './navigation.styles.scss';

const Navigation = () => {
    return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
            <CrownLogo className='logo' />
        </Link>
        <div class='nav-links-container'>
            <Link className='nav-link' to='/'>Home</Link>
        </div>
        <div class='nav-links-container'>
            <Link className='nav-link' to='/shop'>Shop</Link>
        </div>
        <div class='nav-links-container'>
            <Link className='nav-link' to='/contact'>Contact</Link>
        </div>
        <div class='nav-links-container'>
            <Link className='nav-link' to='/sign-in'>Sign In</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
    )
  }

  export default Navigation;