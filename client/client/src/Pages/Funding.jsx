import React from "react";
import "./Funding.css";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

function Funding() {
  const ToastProps = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };

  const [formData, setFormData] = useState({});
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFunding = async () => {
    const check = await axios.post("http://localhost:5000/funding", formData);

    if (check.data.status == "sucess") {
      toast.success("Funding Request Submitted", ToastProps);
    } else if (check.data.status == "failed") {
      toast.error("Something Went Wrong", ToastProps);
    }
  };
  return (
    <>
      <div className="funding-section">
        <div className="funding-introduction">
          <h2>Funding and Banking</h2>
          <p>
           Introduction...
          </p>
        </div>
        <div className="funding-services">
          <h4>Get Funding</h4>
          <ol className="funding-list">
            <li><a href="">Angel Investor</a></li>
            <li><a href="">Venture Capitalist</a></li>
            <li><a href="">Get Government Grants</a></li>
          </ol>
        </div>

        <div className="funding-services">
          <h4>Banking Support</h4>
          <ol className="banking-list">
            <li><a href="">Open Current Account</a></li>
            <li><a href="">Get Loan from Bank</a></li>
          </ol>
        </div>

        <h2>Registration Form:</h2>
        <div className="funding-container">
          <div className="left-funding-container">
            
              <label className="form-label" name="problem" for="question-1">
                1. Question 1
              </label>
              <input className="form-input" onChange={handleInputChange} name="fproblem" id="question-1" col="3" row="5"/>

              <label className="form-label" for="question-2">
                2. Question 2
              </label>
              <input className="form-input" onChange={handleInputChange} name="fothers" id="question-2" col="3" row="5"/>

              <label className="form-label" for="question-3">
                3. Question
              </label>
              <input className="form-input" onChange={handleInputChange} name="fbenifits" id="question-3" col="3" row="5"/>

              <label className="form-label" for="question-4">
                4. Question 4
              </label>
              <input className="form-input" onChange={handleInputChange} name="ffeatures" id="question-4" col="3" row="5"/>

              <label className="form-label" for="question-5">
                5. Question 5
              </label>
              <input className="form-input" onChange={handleInputChange} name="fexists" id="question-5" col="3" row="5"/>
              <button className="form-button"  onClick={handleFunding}>
                Submit
              </button>
          
            <ToastContainer />
          </div>

          <div className="right-funding-container">
            <h2>OR</h2>
            <h2>Connect directly to our expert.</h2>
            <button>Expert Advice</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Funding;
