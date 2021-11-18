import React, {useState} from 'react';
import style from '../style/phoneConfirm.module.css';
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input"


export default function PhoneConfirmation(){
  const [value, setValue] = useState();
  return (
    <div className={style.phoneConfirmContainer}>
      <Link to='/' className={style.backBtn}>
        <img src="/images/arrow.png"/>
      </Link>
      <h1>Enter your phone</h1>
      <PhoneInput international defaultCountry="US" value={value} onChange={setValue}/>
      <p>by entering your number, you're agreeing to our {" "}<span>Terms of Service and Privacy Policy.</span></p>
      <Link to='/code_confirm' className="primaryBtn d-flex align-items-center">
        Next <img src="/images/nextArrowIcon.svg" className="ml-1"/>
      </Link>
    </div>
  )
}