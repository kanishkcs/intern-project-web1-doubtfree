import React from 'react'

function Category(formData, setFormData) {
  return (
    <div className="category-container">
        <div className="form-left">
            <label className="form-label" htmlFor="startup-industry">Industry <span className="red">*</span></label>
            <input className="form-input" type="text" name="startup-industry" id="startup-industry" value={formData.startupIndustry} required />
    
            <label className="form-label" htmlFor="startup-services">Services <span className="red">*</span></label>
            <select name="startup-services" id="startup-services" className="form-input" value={formData.startupServices} required>
               <option value="">Select services</option>
               <option value="Government">Government</option>
               <option value="Hyperlocal">Hyperlocal</option>
               <option value="Discovery">Auto, Truck & Motorcycle Parts</option>
               <option value="Locationbasedservices">Location based services</option>
               <option value="Manufacturing">Manufacturing</option> 
               <option value="others">Others</option>                 
            </select>
        </div>
        
        <div className='form-right'>
            <label className="form-label" htmlFor="sector">Sector <span className="red">*</span></label>
            <select name="sector" id="sector" className="form-input" value={formData.sector} required>
               <option value="">Select sector</option>
               <option value="Auto&TruckManufacturers">Government</option>
               <option value="AutoTruck&MotorcycleParts">Auto, Truck & Motorcycle Parts</option>
               <option value="ElectricVehicles">Electric Vehicles</option>
               <option value="Tires&RubberProducts">Tires & Rubber Products</option>   
               <option value="Others">Others</option>              
            </select>
    
            <label className="form-label" htmlFor="adhaar">Adhaar</label>
            <input className="form-input" type="text" name="adhaar" value={formData.adhaar} id="adhaar" />
        </div>
    </div>
  )
}

export default Category