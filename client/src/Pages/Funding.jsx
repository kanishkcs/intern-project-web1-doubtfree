import React from 'react'
import'./Funding.css'

function Funding() {
  return (
    <div className="idea-validation-section">
        <div className="service-introduction">
            <h2>Funding</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        
     <div className='funding-container'>
        <div className="left-funding-container">
            <h2>Get Funding</h2>
            <button>Angel Investor</button>
            <button>Venture Capitalist</button>
            <button>Get Government Grant</button>
        </div>
        <div className="right-funding-container">
            <h2>Banking Support</h2>
            <button>Open Current Account</button>
        </div>
     </div>
    </div>
    
     
  )
}

export default Funding