import React from "react";
function Form(){
    return(
  <>
  <label> Bride's name:</label>
      <input type="text" id="name" placeholder="Please enter your name here"/>
        <br/><br/><br/>
      <label> MOBILE NUMBER:</label>
      <input type="tel" id="MOB" placeholder="Please enter your mobile number"/>
        <br/><br/><br/>
      <label> ADRESS:</label>
      <input type= "text" id="ADRESS" placeholder="Please enter your email adress"/>
        <br/><br/><br/>
      <label> Date of Birth:</label>
      <input type="date" id="DOB" placeholder="Please enter yout DOB"/>
        <br/><br/><br/>
      <label> Age:</label>
      <input type="number" id="AGE" placeholder="Please enter your age"/>
        <br/><br/><br/>


      
  </>
    );
}
export default Form