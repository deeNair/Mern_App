import { Link } from "react-router-dom";
import { logOut } from "../utilities/users-service";

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <nav>
      <Link to="/">Interview prep</Link>
      &nbsp; | &nbsp;
      <Link to="/all">JobHistory</Link>
      &nbsp; | &nbsp;
      <Link to="/add">AddJobs</Link>
      &nbsp; | &nbsp;
      <Link to="/orders">order History</Link>
      &nbsp; | &nbsp;
     
      <Link to="/orders/new">New order</Link>       &nbsp; | &nbsp;<span>Welcome, {user.name}</span>{" "}
      <Link to="" onClick={handleLogOut}>
        Logout
      </Link>
    </nav>
  );
}

export default NavBar;
