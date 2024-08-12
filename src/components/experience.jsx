import "../styles/experience.css";

function Experience({index,expInfo, setExpInfo}){
    
    const handleChange = (e) => {
        
            
            const name = e.target.name;
            const value = e.target.value;
            
           
            setExpInfo(prevInfo => {
                const newInfo = [...prevInfo];
                newInfo[index] = {
                    ...newInfo[index],
                    [name]: value
                }
                return newInfo;
            });
    }
            
    const removeExperience = () => {
        setExpInfo(prevInfo => {
            const newInfo = [...prevInfo];
            newInfo.splice(index, 1);
            return newInfo;
        });
    }


    
 
    return(
  
        
       
            <div className="exp">
                <label htmlFor="company">Company</label>
                <input type="text" name="company" value={expInfo.company} onChange={handleChange} placeholder="Enter company"></input>
                <label htmlFor="position">Position</label>
                <input type="text" name="position" onChange={handleChange} value={expInfo.position} placeholder="Enter position"></input>
                <label htmlFor="startDate">Start Date</label>
                <input type="text" name="startDate" onChange={handleChange} value={expInfo.startDate} placeholder="Enter start date"></input>
                <label htmlFor="endDate">End Date</label>
                <input type="text" name="endDate" onChange={handleChange} value={expInfo.endDate} placeholder="Enter end date"></input>
                <label htmlFor="location">Location</label>
                <input type="text" name="location" onChange={handleChange} value={expInfo.location} placeholder="Enter location"></input>
                <label htmlFor="tasks">Tasks</label>
                <input type="text" name="tasks" onChange={handleChange} value={expInfo.tasks} placeholder="Enter tasks"></input>
                
                <button className="remove" onClick={removeExperience}>Remove</button>
                <div className="form-line"></div>

            </div>

            
            

        
    );
}
export default Experience
