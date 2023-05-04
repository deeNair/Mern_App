import { Link } from "react-router-dom";
import { logOut } from "../utilities/users-service";
import { AppBar,Toolbar,styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header =styled(AppBar)`background: #40513B`;
const Tab = styled(NavLink)`font-size:20px ;margin-right:40px; color:inherit;text-decoration:none`;


function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
   <Header>
      <Toolbar >
      <Tab to="/">Interview prep</Tab>
    
      <Tab to="/all">JobHistory</Tab>

      <Tab to="/add">AddJobs</Tab>

      <Tab to="/stats">Stats</Tab>
    
      
      <Tab to="" onClick={handleLogOut}>
        Logout
      </Tab>
      </Toolbar>
    
    </Header>
  );
}

export default NavBar;

/**<Link to="/orders">order History</Link>
      &nbsp; | &nbsp;
     
      <Link to="/orders/new">New order</Link>  */