import { Link, useLocation, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const UserHeader = () => {
  const locaton = useLocation();
  const pathname = locaton.pathname;

  return (
    <>
      <nav>
        <div className=" topmenu left_menu">

        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring" }}
          className=" topmenu centered_menu"
        >

          {pathname === "/registration" ? "Registration" : ""}
          {pathname === "/retail" ? "SUMMARY" : ""}
          {pathname === "/retail/edit" ? "SUMMARY" : ""}
          {pathname === "/fitment" ? "SERVICE INFORMATION" : ""}
          {pathname === "/fitment/edit" ? "SERVICE INFORMATION" : ""}

        </motion.div>
        <div className=" topmenu right_menu">
          <Link href="index.html">
            <i className="fa fa-home fa-2x"></i>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default UserHeader;
