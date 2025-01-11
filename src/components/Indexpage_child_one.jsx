import { NavLink } from "react-router-dom";
import HomeNavBar from "./homenavbar";
import { motion } from "framer-motion";

import "react-toastify/dist/ReactToastify.css";

const IndexPageChildOne = () => {
  return (
    <>
      <div className="main_body">
        <motion.div
          layout
          variants={{
            hidden: { opacity: 1, scale: 1 },
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, x: -30 }}
          className="row"
          id="p_to center_it"
          style={{ textAlign: "center" }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: [0.6, 1.2, 1] },
            }}
            transition={{ type: "spring" }}
            className="col s12 m12"
          >
            <p>
              <NavLink
                to="fitment"
                className="waves-effect block waves-light black btn-large w80"
              >
                SERVICE INFORMATION
              </NavLink>
            </p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: [0.6, 1.2, 1] },
            }}
            transition={{ type: "spring" }}
            className="col s12 m12"
          >
            <p>
              <NavLink
                to="retail"
                className="waves-effect block waves-light black  btn-large w80"
                style={{ textAlign: "center" }}
              >
                SUMMARY
              </NavLink>
            </p>
          </motion.div>


        </motion.div>
      </div>
      {/* <Outlet /> */}
    </>
  );
};

export default IndexPageChildOne;
