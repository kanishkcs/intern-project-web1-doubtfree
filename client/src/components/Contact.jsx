import React from 'react'

function Contact() {
  return (
    <div className="contact-container">
        <div className="form-left">
            <label className="form-label" htmlFor="user-email">Email <span className="red">*</span></label>
            <input className="form-input" type="email" name="user-email" id="user-email" required />
    
            <label className="form-label" htmlFor="state">State <span className="red">*</span></label>
            <select name="state" id="state" className="form-input" required>
                <option value="">Select State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
            </select>
            <label className="form-label" htmlFor="website">Website <span className="red">*</span></label>
            <input className="form-input" type="url" name="website" id="website" required />
        </div>
        
        <div className="form-right">
            <label className="form-label" htmlFor="mobile">Mobile</label>
            <input className="form-input" type="tel" name="mobile" id="mobile" />
    
            <label className="form-label" htmlFor="city">City <span className="red">*</span></label>
            <select id="city" name="city" className="form-input" required>
                <option value="">Select City</option>
                <option value="Alipur">Alipur</option>
                <option value="Bawana">Bawana</option>
                <option value="Central Delhi">Central Delhi</option>
                <option value="Delhi">Delhi</option>
                <option value="Deoli">Deoli</option>
                <option value="East Delhi">East Delhi</option>
                <option value="Karol Bagh">Karol Bagh</option>
                <option value="Najafgarh">Najafgarh</option>
                <option value="Nangloi Jat">Nangloi Jat</option>
                <option value="Narela">Narela</option>
                <option value="New Delhi">New Delhi</option>
                <option value="North Delhi">North Delhi</option>
                <option value="North East Delhi">North East Delhi</option>
                <option value="North West Delhi">North West Delhi</option>
                <option value="Pitampura">Pitampura</option>
                <option value="Rohini">Rohini</option>
                <option value="South Delhi">South Delhi</option>
                <option value="South West Delhi">South West Delhi</option>
                <option value="West Delhi">West Delhi</option>
            </select>
    
    
            <label className="form-label" htmlFor="app-link">Mobile app link</label>
            <input className="form-input" type="url" name="app-link" id="app-link" />
        </div>
    </div>
  )
}

export default Contact