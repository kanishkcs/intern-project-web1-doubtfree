import React, { useState } from 'react'
import Category from './Category';
import About from './About'
import Contact from './Contact';
import Interest from './Interest';
import './Form.css';

function IdeaForm() {

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        startupLogo: "",
        startupName: "",
        startupType: "",
        startupStage: "",
        startupBrief: "",
        email: "",
        state: "", 
        website: "", 
        mobile: "", 
        city: "",
        mobileAppLink: "",
        startupIndustry: "",
        startupServices: "",
        sector: "",
        adhaar: "",
        interest: ""
    })

    const FormTitles = ["About Startup", "Contact", "Category", 'Your Interest']

    const PageDisplay = () => {
        if (page === 0){
            return <About formData={formData} setFormData={setFormData} />
        } else if (page === 1){
            return <Contact formData={formData} setFormData={setFormData} />
        } else if (page === 2){
            return <Category formData={formData} setFormData={setFormData} />
        } else {
            return <Interest formData={formData} setFormData={setFormData} />
        }
    }

  return (
    <div>
        <div className="progress-bar">
            <div style={{width: page === 0 ? "25%" : page === 1 ? "50%" : page === 2 ? "75%" : "100%"}}></div>
        </div>
        <div className="form-container">
            <div className="form-header">
                <h3 className="form-title">{ FormTitles[page] }</h3>
            </div>
            <div className="form-body">
                {PageDisplay()}
            </div>
            <div className="form-footer">
                <button onClick={() => {setPage((currPage) => currPage - 1)}} disabled={page === 0}>Prev</button>
                <button 
                    onClick={() => {
                        if(page === FormTitles.length - 1) {
                        alert('Form submitted');
                        console.log(formData);
                    } else {
                        setPage((currPage) => currPage + 1);
                    }
                }}>
                    {page === FormTitles.length - 1 ? "Submit" : "Next"}
                    </button>
            </div>
        </div>
    </div>
  )
}

export default IdeaForm