import React from 'react'

function About({ formData, setFormData }) {

    const handleChange = (e) =>{
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      }
      
  return (
    <div className="about-container">    
        <div className="form-left">
            <label className="form-label" for="startup-image">Startup Logo</label>
            <input className="form-input" type="file" id="startup-image" name="startup-image" accept="image/*" value={formData.startupLogo}></input>
            
            <label className="form-label" htmlFor="startup-name">Startup Name <span className="red">*</span></label>
            <input className="form-input" 
                   type="text" 
                   name="startup-name" 
                   id="startup-name" 
                   value={formData.startupName} 
                   onChange={handleChange} required />
            
            {/* <label className="form-label" htmlFor="startup-type">Funded/Bootstraped?</label> */}
            <label className="form-label form-radio" htmlFor="funded" >
                <input 
                      className="form-input form-radio" 
                      type="radio" 
                      name="startup-type" 
                      id="funded" checked 
                      value={formData.startupType}
                      onChange={handleChange} 
                      /> Funded</label>
    
            <label className="form-label" htmlFor="bootstrapped"><input className="form-input" type="radio" name="startup-type" id="bootstrapped" value={formData.startupType} onChange={handleChange} required /> Bootstrapped</label>
        </div>
        
        <div className="form-right">
           <label className="form-label" htmlFor="startup-stage">Stage <span className="red">*</span></label>
           <input className="form-input" type="text" name="startup-stage" id="startup-stage" value={formData.startupStage} required
                   onChange={handleChange} />
   
           <label className="form-label" htmlFor="startup-brief">Brief <span className="red">*</span></label>
           <textarea className="form-input" col="3" row="10" name="startup-brief" id="startup-brief" value={formData.startupBrief} required 
                   onChange={handleChange} />
        </div>
    </div>
  )
}

export default About