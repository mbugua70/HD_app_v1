import { Link, useLocation, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const UserHeader = () => {
  const locaton = useLocation();
  const pathname = locaton.pathname;

  let isBackExpress;
  let isBackOn;
  isBackExpress = pathname === "/express/retail" || pathname === "/express/retail/edit" || pathname === "/express/fitment" || pathname === "/express/fitment/edit";

  isBackOn = pathname === "/on_go/wholesale" || pathname === "/on_go/wholesale/edit" || pathname === "/on_go/summary" || pathname === "/on_go/summry/edit";

  return (
    <>
      <nav>
        <div className=" topmenu left_menu">
           {isBackExpress &&  <NavLink to="express"><i className="large material-icons">arrow_back</i>
            </NavLink>}
            {isBackOn &&  <NavLink to="on_go"><i className="large material-icons">arrow_back</i>
              </NavLink>}
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
          {pathname === "/express" ? "HD EXPRESS SERVICE" : ""}
          {pathname === "/on_go" ? "HD ON GO" : ""}
          {pathname === "/registration" ? "Registration" : ""}
          {pathname === "/on_go/wholesale" ? "HD ON GO" : ""}
          {pathname === "/on_go/wholesale/edit" ? "HD ON GO" : ""}
          {pathname === "/on_go/summary" ? "SUMMARY" : ""}
          {pathname === "/on_go/summary/edit" ? "SUMMARY" : ""}
          {pathname === "/express/retail" ? "SUMMARY" : ""}
          {pathname === "/express/retail/edit" ? "SUMMARY" : ""}
          {pathname === "/express/fitment" ? "SERVICE INFORMATION" : ""}
          {pathname === "/express/fitment/edit" ? "SERVICE INFORMATION" : ""}

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
