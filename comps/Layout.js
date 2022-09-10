import Navbar from "./Navbar";
import {motion} from 'framer-motion'
const Layout = (props) => {
    return ( 
        <motion.div className="page_container">
        <Navbar/>
        {props.children}
        </motion.div>
    );
}
 
export default Layout;