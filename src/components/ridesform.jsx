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
            <h1>Questionnaire</h1>

            <div className="input-field col s12">
              <span>1. Promoter Name</span>
              <br />
              <input id="sub_1_1" name="sub_1_1" placeholder="Promoter Name" type="text"  {...register("sub_1_1")}/>
            </div>

            <div className="input-field col s12">
              <span>2. Date</span>
              <br />
              <input id="sub_1_2" name="sub_1_2" placeholder="Date" type="date" {...register("sub_1_2")}/>
            </div>

            <div className="input-field col s12">
              <span>3. Customer Name</span>
              <br />
              <input id="sub_1_3" name="sub_1_3" placeholder="Enter Name" type="text" {...register("sub_1_3")}/>
            </div>

            <div className="input-field col s12">
              <span>4. Phone Number</span>
              <br/>
              <input id="sub_1_4" name="sub_1_4" placeholder="Phone Number" type="tel" {...register("sub_1_4")}/>
            </div>

            <div className="input-field col s12">
              <span>5. Registartion Number</span>
              <br />
              <input id="sub_1_5" name="sub_1_5" placeholder="Registartion Number" type="text"  {...register("sub_1_5")}/>

            </div>


            <div className="input-field col s12">
              <span>6. District</span>
              <br />
              <input id="sub_1_6" name="sub_1_6" placeholder="District" type="text" {...register("sub_1_6")}/>
            </div>


            <div className="input-field col s12">
              <span>7. Location</span>
              <br />
              <input id="sub_1_7" name="sub_1_7" placeholder="Location" type="text" {...register("sub_1_7")}/>
            </div>

            <div className="input-field col s12">
              <span>8. Near BY Landmark</span>
              <br />
              <input id="sub_1_8" name="sub_1_8" placeholder="E.g Mosque" type="text" {...register("sub_1_8")}/>
            </div>

            <h2>STOCK PURCHASED</h2>

            <div className="input-field col s12">
              <span>1. 1L</span>
              <br />
              <input id="sub_1_9" name="sub_1_9" placeholder="Enter 1L stock purchased" type="text"  {...register("sub_1_9")}/>
            </div>

            <div className="input-field col s12">
              <span>2. 0.5L</span>
              <br />
              <input id="sub_1_10" name="sub_1_10" placeholder="Enter 0.5L stock purchased" type="text" {...register("sub_1_10")}/>
            </div>

            <h2>G BOOSTY ENERGY</h2>

            <div className="input-field col s12">
              <span>1. Apple</span>
              <br />
              <input id="sub_1_11" name="sub_1_11" placeholder="Enter your answer" type="text" {...register("sub_1_11")}/>
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
