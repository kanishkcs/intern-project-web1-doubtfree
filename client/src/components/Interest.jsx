import React from 'react'

function Interest() {
  return (
    <div className="interest-container">
        <div className="form-left">
            <label className="form-label" htmlFor="interest">You are interested in... <span className="red">*</span></label>
            <label className="form-label" htmlFor="all">All</label>
            <input name="interest" type="checkbox" id="all" className="form-input" value="all" />
            
            <label className="form-label" htmlFor="investors">Investors</label>
            <input name="interest" type="checkbox" id="investors" className="form-input" value="investors" />
            
            <label className="form-label" htmlFor="incubators">Incubators</label>
            <input name="interest" type="checkbox" id="incubators" className="form-input" value="incubators"/>
        </div>

        <div className="form-right">
           <label className="form-label" htmlFor="mentors">Mentors</label>
           <input name="interest" type="checkbox" id="mentors" className="form-input" value="mentors" />
           
           <label className="form-label" htmlFor="accelerators">Accelerators</label>
           <input name="interest" type="checkbox" id="accelerators" className="form-input" value="accelerators" />
           
           <label className="form-label" htmlFor="otherstartups">Other Startups</label>
           <input name="interest" type="checkbox" id="other-startups" className="form-input" value="other-startups" />
        </div>
    </div>
  )
}

export default Interest