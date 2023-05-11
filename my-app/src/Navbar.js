import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Student Data Processing</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/StudentDetails"> Student Information</Link>
          <Link to="/InputStudent">Add Student</Link>
         </div>
      </nav>
    );
}
 
export default Navbar;