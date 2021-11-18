import React, {useState} from 'react';
import style from '../style/phoneConfirm.module.css';
import { Link } from "react-router-dom";


export default function PhoneConfirmation(){
  const [value, setValue] = useState();
  return (
    <div className={style.phoneConfirmContainer}>
      <h1>Enter your phone</h1>
      <p>by entering your number, you're agreeing to our {" "}<span>Terms of Service and Privacy Policy.</span></p>
    </div>
  )
}