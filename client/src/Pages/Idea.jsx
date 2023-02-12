import React from 'react'
import './Idea.css'
import IdeaForm from '../components/IdeaForm'

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
            <div className="right-idea-container">
                <h2 >Connect directly to our expert.</h2>
                <button>Expert Advice</button>
                <h3>OR</h3>
                <h3>Fill the following form.</h3>
            </div>
            <div className="left-idea-container">
                <IdeaForm />
            </div>
        </div>
    </div>
  )
}

export default Idea