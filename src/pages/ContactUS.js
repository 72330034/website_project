import React ,{useState} from "react";
import Logo11 from "../assets/Logo11.jpeg";
import "../styles/Contact.css";

const ContactUS=()=> {
  const [state, setState] = useState({ fname: "" ,email: "", feedback: "" });

  const handleChange = e =>{
    const name = e.target.name;
    const value = e.target.value;
    

    setState({ ...state, [name] : value });

  };
  const handleSubmit = e => {
    alert (JSON.stringify(state));
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Logo11})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" >
          <label htmlFor="name">Full Name</label>
          <input name="fname" placeholder="Enter full name..." type="text" onChange={handleChange}/>
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" onChange={handleChange} />
          <label htmlFor="feedback">Feedback</label>
          <textarea
            rows="6"
            placeholder="Enter Feedback..."
            name="feedback"
            required onChange={handleChange}
          ></textarea>
          <button type="submit" onClick = {handleSubmit}> Done</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUS;