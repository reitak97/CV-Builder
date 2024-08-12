import "../styles/resume.css";

export default function Resume({generalInfo,eduInfo,expInfo}) {
    return(
        <div className="resume">

            <div className="header">
                <div className="name">
                    <h1>{generalInfo.fullname}</h1>
                </div>
                
                <div className="header-details">
                    <p>{generalInfo.phone}</p>
                    <p>|</p>
                    <p>{generalInfo.email}</p>
                    <p>|</p>
                    <p>{generalInfo.linkedin}</p>
                    <p>|</p>
                    <p>{generalInfo.github}</p>
                </div>
            </div>

            <div className="eduSection">
                <h2>EDUCATION</h2>
                <div className="line"></div>
                <div className="top">
                    <p><b>{eduInfo.school}</b></p>
                    <p>{eduInfo.location}</p>
                </div>
                <div className="bottom">
                    <p><i>{eduInfo.degree}</i></p>
                    <p><i>Expcted {eduInfo.gradDate}</i></p>
                </div>
                
            </div>

            <div className="expSection">
                <h2>EXPERIENCE</h2>
                <div className="line"></div>

                <div className="jobs">
                

                {expInfo.map((expInfo, index) => (
                    <div className="exp" key={index}>
                
                        <div className="top">
                            <p><b>{expInfo.position}</b></p>
                            <p>{expInfo.startDate} - {expInfo.endDate}</p>
                        </div>
                        <div className="bottom">
                            <p><i>{expInfo.company}</i></p>
                            <p><i>{expInfo.location}</i></p>
                        </div>
                        
                        <div className="tasks">
                            <ul>
                               <li>{expInfo.tasks}</li>
                            </ul>
                        </div>
                     </div>
                ))}
            
                </div>

            </div>


              



        </div>
    );
}

