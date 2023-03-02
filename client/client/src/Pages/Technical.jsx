import React from "react";
import "./Technical.css";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

function Technical() {
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

  const handleTechnical = async () => {
    const check = await axios.post("http://localhost:5000/technical", formData);

    if (check.data.status == "sucess") {
      toast.success("Technical Submitted", ToastProps);
    } else if (check.data.status == "failed") {
      toast.error("Something Went Wrong", ToastProps);
    }
  };
  return (
    <>
      <div className="technical-section">
        <div className="technical-introduction">
          <h2>Technical and Marketing</h2>
        </div>

        <div className="technical-services">
          <h3>Our Technical Services:</h3>
          <ol className="marketing-list">
            <li><a href="">Website Development</a></li>
            <li><a href="">App Development</a></li>
            <li><a href="">Designing Services</a></li>
            <li><a href="">Animation Services</a></li>
          </ol>
        </div>

        <div className="technical-services">
          <h3>Our Marketing Services:</h3>
          <ol className="technical-list">
            <li><a href="">Search Engine Optimization</a></li>
            <li><a href="">Search Engine Marketing</a></li>
            <li><a href="">Social Media Marketing</a></li>
            <li><a href="">Email & Video Marketing</a></li>
          </ol>
        </div>

        <h2>Registration Form:</h2>
        <div className="technical-container">
          <div className="left-technical-container">
         
              <label className="form-label"  for="question-1">
                1. Question 1
              </label>
              <input className="form-input"  onChange={handleInputChange}  name="tproblem" id="question-1" col="3" row="5"/>

              <label className="form-label" onChange={handleInputChange}  for="question-2">
                2. Question 2
              </label>
              <input className="form-input" onChange={handleInputChange}  name="tothers" id="question-2" col="3" row="5"/>

              <label className="form-label" for="question-3">
                3. Question
              </label>
              <input className="form-input" onChange={handleInputChange}  name="tbenifits" id="question-3" col="3" row="5"/>

              <label className="form-label" for="question-4">
                4. Question 4
              </label>
              <input className="form-input" onChange={handleInputChange}  name="tfeatures" id="question-4" col="3" row="5"/>

              <label className="form-label" for="question-5">
                5. Question 5
              </label>
              <input className="form-input"  onChange={handleInputChange} name="texists" id="question-5" col="3" row="5"/>
              <button className="form-button"   onClick={handleTechnical}>
                Submit
              </button>
          
            <ToastContainer />
          </div>

          <div className="right-technical-container">
            <h2>OR</h2>
            <h2>Connect directly to our expert.</h2>
            <button>Expert Advice</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Technical;
