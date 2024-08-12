import "../styles/form.css"
import General from "./general";
import Education from "./education";
import down from "../assets/down.png";
import Experience from "./experience";



function Form({generalInfo, setGeneralInfo, eduInfo, setEduInfo, expInfo, setExpInfo}){
    const toggleForm = () => {
        const form = document.querySelector(".expForm");
        form.classList.toggle("show");
    }
    
    const addExperience = () => {
        expInfo.push({ company: "", position: "", startDate: "", endDate: "", location: "", tasks: "" });
        setExpInfo([...expInfo]);
    }


    return(
        <div className="form">
            
            <General generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}/>
            <Education eduInfo={eduInfo} setEduInfo={setEduInfo}/> 
            
            <div className="experience">
                <div clasName="expHeader" onClick={toggleForm}>
                    <h1>Experience <img src={down}></img></h1>
                </div>
               
             
                <div className="expForm">
                    {expInfo.map((expInfo, index) => (
                    <Experience key={index} index={index} expInfo={expInfo} setExpInfo={setExpInfo}/>
                    ))


                    }
                
              
                <button className="add" onClick={addExperience}>Add Experience</button>
                </div>

             
          
            
            </div> 
            
           
           
            
        </div>
    );
}
export default Form
