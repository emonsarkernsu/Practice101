
import {NavLink} from 'react-router-dom';

const Navbar = () =>{

    return (
      <>
      <div className="navlinks">

      <NavLink exact activeClassName="active_class" to='/Signin'> Signin </NavLink>
      <NavLink exact activeClassName="active_class" to='/Signout'> Tracker </NavLink>
      <NavLink exact activeClassName="active_class" to='/Employee'> Employee </NavLink>
      </div>
      </>
    );
};

export default Navbar
