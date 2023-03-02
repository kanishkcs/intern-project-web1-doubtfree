import React from "react";
import "./Idea.css";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";


function Idea() {
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

  const handleIdea = async () => {
    const check = await axios.post("http://localhost:5000/idea", formData);

    if (check.data.status == "sucess") {
      toast.success("Idea Validation Request Genrated", ToastProps);
    } else if (check.data.status == "failed") {
      toast.error("Something Went Wrong", ToastProps);
    }
  };
  return (
    <div className="idea-validation-section">
      <div className="idea-introduction">
        <h2>Idea Validation</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="idea-benefits">
        <h2>Benefits</h2>
        <p>Following are the benefits of idea validation:</p>
        <ol>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
        </ol>
      </div>
      <h2>Fill your response here:</h2>
      <div className="idea-container">
        <div className="left-idea-container">
         
            <label className="form-label" name="problem" htmlFor="question-1">
              1. What problem are you solving?
            </label>
            <input
            onChange={handleInputChange}
              className="form-input"
              name="problem"
              id="question-1"
              col="3"
              row="5"
            />

            <label className="form-label" htmlFor="question-2">
              2. How have others attempted to solve this problem before, and why
              did their solutions succeed or fail?
            </label>
            <input
            onChange={handleInputChange}
              className="form-input"
              name="others"
              id="question-2"
              col="3"
              row="5"
            />

            <label className="form-label" htmlFor="question-3">
              3. How many specific benefits htmlFor your product or idea can you
              list?
            </label>
            <input
            onChange={handleInputChange}
              className="form-input"
              name="benifits"
              id="question-3"
              col="3"
              row="5"
            />

            <label className="form-label" htmlFor="question-4">
              4. Can you state, in clear language, the key features of your
              product or service?
            </label>
            <input
            onChange={handleInputChange}
              className="form-input"
              name="features"
              id="question-4"
              col="3"
              row="5"
            />

            <label className="form-label" htmlFor="question-5">
              5. Does your idea already exist in the same way you were going to
              create it?
            </label>
            <input
            onChange={handleInputChange}
              className="form-input"
              name="exists"
              id="question-5"
              col="3"
              row="5"
            />
            <button className="form-button" type="submit" onClick={handleIdea}>
              Submit
            </button>
            <ToastContainer />
        </div>

        <div className="right-idea-container">
          <h2>OR</h2>
          <h2>Connect directly to our expert.</h2>
          <button>Expert Advice</button>
          
        </div>
      </div>
    </div>
  );
}

export default Idea;
