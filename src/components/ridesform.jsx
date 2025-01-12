/* eslint-disable react-refresh/only-export-components */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ToastContainer, toast, Slide } from "react-toastify";
import { testridesForm } from "./api";
import { OfflineContext } from "../contextApi/offline_context";
import { FormContext } from "../contextApi/selectelement_context";
import useOnlineStatus from "../custom_hook/useOffline";
import { motion, AnimatePresence } from "framer-motion";

const SurveyForm = () => {
  const [isQuestion, setisQuestion] = useState(false);
  const isOnline = useOnlineStatus();
  const { addToOffline } = useContext(OfflineContext);
  const { state, dispatch } = useContext(FormContext);
  const form = useForm({
    defaultValues: {
      sub_1_1: "",
      sub_1_2: "",
      sub_1_3: "",
      sub_1_4: "",
      sub_1_5: "",
      sub_1_6: "",
      sub_1_7: "",
      sub_1_8: "",
      sub_1_10: "",
      sub_1_11: "",
      sub_1_12: "",
      sub_1_13: "",
      sub_1_14: "",
      sub_1_15: "",
      sub_1_16: "",
      sub_1_17: "",
    },
  });

  const { register, handleSubmit, reset, formState } = form;
  const { isSubmitSuccessful, isSubmitting } = formState;

  const onSubmit = async (data, event) => {
    try {
      const { sub_1_1, sub_1_2, sub_1_3, sub_1_4, sub_1_5 } = data;
      if (
        sub_1_1 === "" ||
        sub_1_2 === "" ||
        sub_1_3 === "" ||
        sub_1_4 === "" ||
        sub_1_5 === ""
      ) {
        event.preventDefault();
        toast.error("Please fill in all the required fields!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
      } else {
        const response = await testridesForm(data);
        if (response) {
          const MySwal = withReactContent(Swal);
          MySwal.fire({
            html: <i>Your data has been submitted successfully!</i>,
            icon: "success",
          });
        }
      }
    } catch (err) {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        html: <i>{err.message}</i>,
        icon: "error",
      });
    }
  };

  console.log(isSubmitSuccessful);
  console.log(isSubmitting);

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  // handling select form element

  function handleSelectElement(e) {
    if (e.target.value === "own vehicle") {
      dispatch({ type: "SELECT_YES" });
      setisQuestion(true);
      console.log(state.showNoQuestion);
    } else {
      dispatch({ type: "SELECT_NO" });
      console.log(state.showNoQuestion);
    }
  }

  function handleSelectElementTwo(e) {
    if (e.target.value === "yes") {
      dispatch({ type: "SELECT_YES" });
      setisQuestion(true);
    } else {
      dispatch({ type: "SELECT_NO" });
      setisQuestion(true);
    }
  }

  return (
    <>
      <div className="main_body">
        <div className="row parcel_form">
          <form
            className="form"
            id="form"
            method="post"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1>Data for Analysis and Summary</h1>

            <div className="input-field col s12">
              <span>1. Date</span>
              <br />
              <input id="sub_1_1" name="sub_1_1" placeholder="Date" type="date"  {...register("sub_1_1")}/>
            </div>

            <div className="input-field col s12">
              <span>2. Location</span>
              <br />
              <input id="sub_1_2" name="sub_1_2" placeholder="location" type="text" {...register("sub_1_2")}/>
            </div>

            <div className="input-field col s12">
              <span>3. TOTAL DAYS</span>
              <br />
              <input id="sub_1_3" name="sub_1_3" placeholder="TOTAL DAYS" type="text" {...register("sub_1_3")}/>
            </div>

            <div className="input-field col s12">
              <span>4. SERVICE TARGET</span>
              <br/>
              <input id="sub_1_4" name="sub_1_4" placeholder="SERVICE TARGET" type="text" {...register("sub_1_4")}/>
            </div>

            <div className="input-field col s12">
              <span>5. Service Done</span>
              <br />
              <input id="sub_1_5" name="sub_1_5" placeholder="Service Done" type="text"  {...register("sub_1_5")}/>

            </div>


            <div className="input-field col s12">
              <span>6. TOTAL GIVE AWAYS</span>
              <br />
              <input id="sub_1_6" name="sub_1_6" placeholder="TOTAL GIVE AWAYS" type="text" {...register("sub_1_6")}/>
            </div>


            <div className="input-field col s12">
              <span>7.  Give Aways Issued </span>
              <br />
              <input id="sub_1_7" name="sub_1_7" placeholder=" Give Aways Issued " type="text" {...register("sub_1_7")}/>
            </div>

            <div className="input-field col s12">
              <span>8. BIKE TO BE SERVICED BY ALL MECHANIC/DAY</span>
              <br />
              <input id="sub_1_8" name="sub_1_8" placeholder="BIKE TO BE SERVICED BY ALL MECHANIC/DAY" type="text" {...register("sub_1_8")}/>
            </div>

            <div className="input-field col s12">
              <span>9. Total Riders Served</span>
              <br />
              <input id="sub_1_9" name="sub_1_9" placeholder="Total Riders Served" type="text"  {...register("sub_1_9")}/>
            </div>

            <div className="input-field col s12">
              <span>10. Total Repairs Conducted</span>
              <br />
              <input id="sub_1_10" name="sub_1_10" placeholder="Total Repairs Conducted" type="text" {...register("sub_1_10")}/>
            </div>

            <div className="input-field col s12">
              <span>11. Total Spare Parts Sold</span>
              <br />
              <input id="sub_1_11" name="sub_1_11" placeholder="Enter your answer" type="text" {...register("sub_1_11")}/>
            </div>
            <div className="input-field col s12">
              <span>12. Total Amount</span>
              <br />
              <input id="sub_1_12" name="sub_1_12" placeholder="Warranty Activated" type="text" {...register("sub_1_12")}/>
            </div>


            <div className="input-field col s12">
              <span>13. Warranty Activated</span>
              <br />
              <input id="sub_1_13" name="sub_1_13" placeholder="Warranty Activated" type="text" {...register("sub_1_13")}/>
            </div>

            <h1>Engagement Activities </h1>

            <div className="input-field col s12">
              <span>1. Demo</span>
              <br />
              <input id="sub_1_14" name="sub_1_14" placeholder="Demo" type="text" {...register("sub_1_14")}/>
            </div>
            <div className="input-field col s12">
              <span>2. Q&A</span>
              <br />
              <input id="sub_1_15" name="sub_1_15" placeholder="Q&A" type="text" {...register("sub_1_15")}/>
            </div>

            <div className="input-field col s12">
              <span>3. Rider’s Perception of Brand Visibility </span>
              <br />
              <select className="select_els" name="sub_1_16" id="sub_1_16"  style={{ display: "block" }}  {...register("sub_1_16")}>
            <option value="">Select your answer</option>
            <option id="" value="High">High</option>
            <option id="" value="Moderate">Moderate</option>
            <option id="" value="Low">Low</option>
            </select>
            </div>

            <div className="input-field col s12">
              <span>4. Rider’s Willingness to Recommend </span>
              <br />
              <select className="select_els" name="sub_1_17" id="sub_1_17"  style={{ display: "block" }}  {...register("sub_1_17")}>
            <option value="">Select your answer</option>
            <option id="" value="Yes">YES</option>
            <option id="" value="No">NO</option>
            </select>
            </div>

            <div className="input-field col s12 center_it">
              <button
                className="btn-large  margin-bottom waves-effect waves-light pick_color"
                id="hide_icons"
                disabled={isSubmitting}
              >
                {isSubmitting ? <>submitting </> : <>submit </>}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SurveyForm;
