import Navbar from "./Navbar";

const Layout = (props) => {
    return ( 
        <div className="content">
        <Navbar/>
        {props.children}
        </div>
    );
}
 
export default Layout;