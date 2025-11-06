import "./App.css"
import Form from "./components/form"
import Resume from "./components/resume"
import {useState} from "react"
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function App(){

  const initialGeneralInfo = {
    fullname: "John Johnson",
    phone: "248-231-3219",
    email: "johnj@gmail.com",
    linkedin: "linkedin.com/in/johnj",
    github: "github.com/johnj"
  }

  const initialEduInfo = {
    school: "Michigan State University",
    location: "East Lansing, MI",
    degree: "Bachelor of Science in Computer Science", 
    gradDate: "May 2027"
  }

  const initialExpInfo = [{
    company: "Google",
    position: "Software Engineering Intern",
    startDate: "May 2022",
    endDate: "Aug 2022",
    location: "Mountain View, CA",
    tasks:"Developed new features for Google Chrome, Collaborated with team members to debug and fix issues, Participated in daily standup meetings to discuss progress and blockers"
  },
  {
    company: "Microsoft",
    position: "Software Engineering Intern",
    startDate: "May 2023",
    endDate: "Aug 2023",
    location: "Redmond, WA",
    tasks:"Developed new features for Microsoft Edge, Collaborated with team members to debug and fix issues, Participated in daily standup meetings to discuss progress and blockers"
  }
  ]
 

  const [generalInfo, setGeneralInfo] = useState(initialGeneralInfo)
  const [eduInfo, setEduInfo] = useState(initialEduInfo)
  const [expInfo, setExpInfo] = useState(initialExpInfo)


    return(
        <div className="App">
           
            <Form generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} eduInfo={eduInfo} setEduInfo={setEduInfo} expInfo={expInfo} setExpInfo={setExpInfo}/>
            <Resume generalInfo={generalInfo} eduInfo={eduInfo} expInfo={expInfo}/>

            

        </div>
    )

}


export default App;