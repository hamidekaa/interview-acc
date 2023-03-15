import { useState } from "react";
import { arrowdown, arrowup } from "./helper/icons";
const Question = ({id,question,answer}) => {
  const [show, setShow] = useState(false);
  const handleToggle=()=> { setShow(!show)}

  return (
    <div className="card-group">
      {
        show ? <div className="card">
          <div className="quess-answer">
           <h5> {id}.{question} </h5>
           <button onClick={handleToggle}>
            {arrowup}
           </button>
           <p className="answer"> {answer} </p>
          </div>
        </div> : (<div className="card">
          <div className="quess">
           <h5> {id}.{question} </h5>
           <button onClick={handleToggle} >
            {arrowdown}
           </button>
          </div>
        </div>

        ) 
      }
    </div>
  )
}

export default Question
