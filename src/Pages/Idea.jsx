import React from 'react'
import './Idea.css'

function Idea() {
  return (
    <div className="idea-validation-section">
        <div className="idea-introduction">
            <h2>Idea Validation</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="idea-benefits">
            <h2>Benefits</h2>
            <p>Following are the benefits of idea validation:</p>
            <ol>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            </ol>
        </div>
        <div className='idea-container'>
            <div className="left-idea-container">
                <form>
                    <label className='form-label' for="question-1"> 
                        1. What problem are you solving?
                    </label>
                    <textarea className='form-input' id="question-1" col="3" row="5" />
    
                    <label className='form-label' for="question-2">
                         2. How have others attempted to solve this problem before, and why did their solutions succeed or fail?
                    </label>
                    <textarea className='form-input' id="question-2" col="3" row="5" />
                    
                    <label className='form-label' for="question-3"> 
                        3. How many specific benefits for your product or idea can you list?
                    </label>
                    <textarea className='form-input' id="question-3" col="3" row="5" />
    
                    <label className='form-label' for="question-4">
                        4. Can you state, in clear language, the key features of your product or service?
                    </label>
                    <textarea className='form-input' id="question-4" col="3" row="5" />
    
                    <label className='form-label' for="question-5">
                        5. Does your idea already exist in the same way you were going to create it?
                    </label>
                    <textarea className='form-input' id="question-5" col="3" row="5" />
                    <button className="form-button" type="submit">Submit</button>
                </form>
            </div>
    
            <div className="right-idea-container">
                <h2 >Connect directly to our expert.</h2>
                <button>Expert Advice</button>
            </div>
        </div>
    </div>
  )
}

export default Idea