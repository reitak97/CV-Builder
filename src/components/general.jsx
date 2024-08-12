import "../styles/general.css";


function General({generalInfo, setGeneralInfo}){
    

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        

        setGeneralInfo(prevInfo => ({
                ...prevInfo,
                [name]: value
            }));
            
    }

    return(
        <div className="general">
            <h1>Personal Details</h1>
            <label htmlFor="fullname">Full Name</label>
            <input type="text" name="fullname" value={generalInfo.fullname} onChange={handleChange} placeholder="First and last name"></input>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" name="phone" onChange={handleChange} value={generalInfo.phone} placeholder="Enter phone number"></input>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={handleChange} value={generalInfo.email} placeholder="Enter email"></input>
            <label htmlFor="linkedin">LinkedIn</label>
            <input type="text" name="linkedin" onChange={handleChange} value={generalInfo.linkedin} placeholder="Enter LinkedIn"></input>
            <label htmlFor="github">Github</label>
            <input type="text" name="github" onChange={handleChange} value={generalInfo.github} placeholder="Enter github"></input>
            
        </div>
    );
}


export default General