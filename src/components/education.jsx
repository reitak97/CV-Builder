import "../styles/education.css";

import down from "../assets/down.png";
function Education({eduInfo, setEduInfo}){
    
    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        
        setEduInfo(prevInfo => ({
                ...prevInfo,
                [name]: value
            }));
            
    }

    const toggleForm = () => {
        const form = document.querySelector(".eduForm");
        form.classList.toggle("show");
    }
    

    return(
    
        <div className="education"> 
            <div className="eduHeader" onClick={toggleForm}>
                <h1>Education <img id="eduImg"src={down}></img></h1>
            </div>
            <div className="eduForm">
                <label htmlFor="school">School</label>
                <input type="text" name="school" value={eduInfo.school} onChange={handleChange} placeholder="Enter school / university"></input>
                <label htmlFor="location">Location</label>
                <input type="text" name="location" onChange={handleChange} value={eduInfo.location} placeholder="Enter location"></input>
                <label htmlFor="degree">Degree</label>
                <input type="text" name="degree" onChange={handleChange} value={eduInfo.degree} placeholder="Enter Degree / Field of Study"></input>
                <label htmlFor="gradDate">Graduation Year</label>
                <input type="text" name="gradDate" onChange={handleChange} value={eduInfo.gradDate} placeholder="Enter graduation year"></input>
            </div>
            
                
            
           
            
        </div>
    );
}

export default Education