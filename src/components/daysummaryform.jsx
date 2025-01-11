/* eslint-disable react-refresh/only-export-components */
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ToastContainer, toast, Slide } from "react-toastify";
import { summaryForm } from "./api";
import { OfflineContext } from "../contextApi/offline_context";
import useOnlineStatus from "../custom_hook/useOffline";

const DaySummaryForm = () => {
  const isOnline = useOnlineStatus();
  const { addToOffline } = useContext(OfflineContext);
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
    },
  });

  const { register, handleSubmit, reset, formState } = form;
  const { isSubmitSuccessful, isSubmitting } = formState;

  const onSubmit = async (data) => {

      try {

        const {sub_1_1, sub_1_2, sub_1_3, sub_1_4, sub_1_5} = data;
        if(sub_1_1 === "" || sub_1_2 === "" || sub_1_3 === "" || sub_1_4 === "" || sub_1_5 === "") {
          event.preventDefault()
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
        }else{

          const response = await summaryForm(data);
          if (response) {
            const MySwal = withReactContent(Swal);
            MySwal.fire({
              html: <i>Your data has been submitted successfully!</i>,
              icon: "success",
            });
          }
        }


      } catch (err) {
        console.log(err)
        const MySwal = withReactContent(Swal);
        MySwal.fire({
          html: <i>{err.message}</i>,
          icon: "error",
        });
      }

  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

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
            <h1>Job Card Details</h1>

            <div className="input-field col s12">
              <span>1. Job Card Number</span>
              <br />
              <input id="sub_1_1" name="sub_1_1" placeholder="Job Card Number" type="text" title="Card Number" {...register("sub_1_1")}/>
            </div>

            <div className="input-field col s12">
              <span>2. Job Card Date</span>
              <br />
              <input id="sub_1_2" name="sub_1_2" placeholder="Job Card Date " title="Job Card Date" type="date" {...register("sub_1_2")}/>
            </div>

            <h1>Basic Rider Information</h1>

            <div className="input-field col s12">
              <span>1. Rider Name</span>
              <br />
              <input
                id="sub_1_3"
                name="sub_1_3"
                title="Rider Name"
                type="text"
                placeholder="Rider Name"
                {...register("sub_1_3")}
              />
            </div>

            <div className="input-field col s12">
              <span>2. Contact Number</span>
              <br />
              <input
                id="sub_1_4"
                name="sub_1_4"
                title="Contact Number"
                type="tel"
                placeholder="Contact Number"
                {...register("sub_1_4")}
              />
            </div>

            <div className="input-field col s12">
              <span>3. Location (Town/Area)</span>
              <br />
              <input
                id="sub_1_5"
                name="sub_1_5"
                title="Location"
                type="text"
                placeholder="Location"
                {...register("sub_1_5")}
              />
            </div>

            <div className="input-field col s12">
              <span>4. Motorcycle Model</span>
              <br />
              <input
                id="sub_1_6"
                name="sub_1_6"
                title="Model"
                type="text"
                placeholder="Enter Model Number"
                {...register("sub_1_6")}
              />
            </div>

            <div className="input-field col s12">
              <span>5. Chasis Number</span>
              <br />
              <input id="sub_1_7" name="sub_1_7" title="Chasis Number" placeholder="Chasis Number" type="text" {...register("sub_1_7")}/>
            </div>

            <div className="input-field col s12">
              <span>6. Engine Number </span>
              <br />
              <input id="sub_1_8" name="sub_1_8" placeholder="Engine Number" type="text" title="Engine Number "  {...register("sub_1_8")}/>
            </div>

            <div className="input-field col s12">
              <span>7. KMS Run/Mileage</span>
              <br />
              <input id="sub_1_9" name="sub_1_9" placeholder="KMS Run/Mileage" type="text" title="KMS Run/Mileage " {...register("sub_1_9")}/>
            </div>

            <div className="input-field col s12">
              <span>8. Age of Motorcycle (Months/Years)</span>
              <br />
              <input id="sub_1_10" name="sub_1_10" placeholder="Age of motorcycle"  type="text"  {...register("sub_1_10")}/>
            </div>

            <div className="input-field col s12">
              <span>9. Park Name</span>
              <br />
              <input id="sub_1_11" name="sub_1_11" placeholder="Park Chairman Name" type="text" title="Park Chairman Name"  {...register("sub_1_11")}/>
            </div>

             <h1>Service Details</h1>
            <div className="input-field col s12">
              <span>1. Check Venue / Name Service Station </span>
              <br />
              <input id="sub_1_12" name="sub_1_12" placeholder="Venue or Service station" type="text"   {...register("sub_1_12")}/>
            </div>

            <div className="input-field col s12">
              <span>2. Service / Check Date</span>
              <br />
              <input id="sub_1_13" name="sub_1_13" placeholder="Service or Check date" type="text"   {...register("sub_1_13")}/>
            </div>


            <div className="input-field col s12">
              <span>3. Type of Service </span>
              <br />
              <input id="sub_1_14" name="sub_1_14" placeholder="(e.g., 10-point check, warranty repair, etc." type="text"   {...register("sub_1_14")}/>
            </div>

            <div className="input-field col s12">
              <span>4. Technician Name</span>
              <br />
              <input id="sub_1_15" name="sub_1_15" placeholder="Technician Name" type="text"  {...register("sub_1_15")}/>
            </div>

            <h1>10-Point Check Outcomes</h1>

            <div className="input-field col s12">
              <span>1a.  Status - Air Filter Check up & Cleaning</span>
              <br />
            <select className="select_els" name="sub_1_16" id="sub_1_16"  style={{ display: "block" }}  {...register("sub_1_16")}>
            <option value="">Select your answer</option>
            <option id="" value="PASS">PASS</option>
            <option id="" value="FAIL">FAIL</option>
            </select>
            </div>

            <div className="input-field col s12">
              <span>1b. Point Check Remarks</span>
              <br />
              <input id="sub_1_17" name="sub_1_17" placeholder="Point Check Remarks" type="text"  {...register("sub_1_17")}/>
            </div>

            <div className="input-field col s12">
              <span>2a. Status - Cables Adjustment (Accelerator & Clutch)</span>
              <br />
              <select className="select_els" name="sub_1_18" id="sub_1_18"  style={{ display: "block" }}  {...register("sub_1_18")}>
            <option value="">Select your answer</option>
            <option id="" value="PASS">PASS</option>
            <option id="" value="FAIL">FAIL</option>
            </select>
            </div>

            <div className="input-field col s12">
              <span>2b. Point Check Remarks</span>
              <br />
              <input id="sub_1_19" name="sub_1_19" placeholder="Point Check Remarks" type="text"  {...register("sub_1_19")}/>
            </div>

            <div className="input-field col s12">
              <span>3a. Status - Spark plug cleaning , Gap Adjustment & HT Cables Inspection</span>
              <br />
              <select className="select_els" name="sub_1_20" id="sub_1_20"  style={{ display: "block" }}  {...register("sub_1_20")}>
            <option value="">Select your answer</option>
            <option id="" value="PASS">PASS</option>
            <option id="" value="FAIL">FAIL</option>
            </select>
            </div>

            <div className="input-field col s12">
              <span>3b. Point Check Remarks</span>
              <br />
              <input id="sub_1_21" name="sub_1_21" placeholder="Point Check Remarks" type="text"  {...register("sub_1_21")}/>
            </div>

            <div className="input-field col s12">
              <span>4a. Status - Rubber boot fitment on Acceleration & Choke. Check & Adjust</span>
              <br />
              <select className="select_els" name="sub_1_22" id="sub_1_22"  style={{ display: "block" }}  {...register("sub_1_22")}>
            <option value="">Select your answer</option>
            <option id="" value="PASS">PASS</option>
            <option id="" value="FAIL">FAIL</option>
            </select>
            </div>

            <div className="input-field col s12">
              <span>4b. Point Check Remarks</span>
              <br />
              <input id="sub_1_23" name="sub_1_23" placeholder="Point Check Remarks" type="text"  {...register("sub_1_23")}/>
            </div>

            <div className="input-field col s12">
              <span>5a. Status - Check & Adjust Brake Front & Rear</span>
              <br />
              <select className="select_els" name="sub_1_24" id="sub_1_24"  style={{ display: "block" }}  {...register("sub_1_24")}>
            <option value="">Select your answer</option>
            <option id="" value="PASS">PASS</option>
            <option id="" value="FAIL">FAIL</option>
            </select>
            </div>

            <div className="input-field col s12">
              <span>5b. Point Check Remarks</span>
              <br />
              <input id="sub_1_25" name="sub_1_25" placeholder="Point Check Remarks" type="text"  {...register("sub_1_25")}/>
            </div>

            <div className="input-field col s12">
              <span>6. Status - Check & Change Battery Voltage (if Voltage isless than 12.4 V put in Charge )</span>
              <br />
              <select className="select_els" name="sub_1_26" id="sub_1_26"  style={{ display: "block" }}  {...register("sub_1_26")}>
            <option value="">Select your answer</option>
            <option id="" value="PASS">PASS</option>
            <option id="" value="FAIL">FAIL</option>
            </select>
            </div>

            <div className="input-field col s12">
              <span>6b. Point Check Remarks</span>
              <br />
              <input id="sub_1_27" name="sub_1_27" placeholder="Point Check Remarks" type="text"  {...register("sub_1_27")}/>
            </div>

            <div className="input-field col s12">
              <span>7a. Status - Tyre Pressure Check & Adjust.</span>
              <br />
              <select className="select_els" name="sub_1_28" id="sub_1_28"  style={{ display: "block" }}  {...register("sub_1_28")}>
            <option value="">Select your answer</option>
            <option id="" value="PASS">PASS</option>
            <option id="" value="FAIL">FAIL</option>
            </select>
            </div>

            <div className="input-field col s12">
              <span>7b. Point Check Remarks</span>
              <br />
              <input id="sub_1_29" name="sub_1_29" placeholder="Point Check Remarks" type="text"  {...register("sub_1_29")}/>
            </div>

            <div className="input-field col s12">
              <span>8a. Status - Electrical check up - Bulbs & Switches</span>
              <br />
              <select className="select_els" name="sub_1_30" id="sub_1_30"  style={{ display: "block" }}  {...register("sub_1_30")}>
            <option value="">Select your answer</option>
            <option id="" value="PASS">PASS</option>
            <option id="" value="FAIL">FAIL</option>
            </select>
            </div>

            <div className="input-field col s12">
              <span>8b. Point Check Remarks</span>
              <br />
              <input id="sub_1_31" name="sub_1_31" placeholder="Point Check Remarks" type="text"  {...register("sub_1_31")}/>
            </div>

            <div className="input-field col s12">
              <span>9a. Status - Check the Rear Shock absorbers Setting should be in 3rd Notch </span>
              <br />
              <select className="select_els" name="sub_1_32" id="sub_1_32"  style={{ display: "block" }}  {...register("sub_1_32")}>
            <option value="">Select your answer</option>
            <option id="" value="PASS">PASS</option>
            <option id="" value="FAIL">FAIL</option>
            </select>
            </div>

            <div className="input-field col s12">
              <span>9b. Point Check Remarks</span>
              <br />
              <input id="sub_1_32" name="sub_1_32" placeholder="Point Check Remarks" type="text"  {...register("sub_1_32")}/>
            </div>

            <h1>Follow Up post service</h1>
            <div className="input-field col s12">
              <span>1. Fleet Owner</span>
              <br />
              <input id="sub_1_33" name="sub_1_33" placeholder="Fleet Owner" type="text"  {...register("sub_1_33")}/>
            </div>

            <div className="input-field col s12">
              <span>2. Contact Number </span>
              <br />
              <input id="sub_1_34" name="sub_1_34" placeholder="Contact Number" type="text"  {...register("sub_1_34")}/>
            </div>

            <div className="input-field col s12">
              <span>3. Chasis Number</span>
              <br />
              <input id="sub_1_35" name="sub_1_35" placeholder="Chasis Number" type="text"  {...register("sub_1_35")}/>
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

export default DaySummaryForm;
