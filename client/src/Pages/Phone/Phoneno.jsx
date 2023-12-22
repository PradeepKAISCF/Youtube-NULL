import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { num } from "../../actions/auth";
import "./PhoneNo.css"
function PhoneNo({ setPhoneNo }) {
  //   const CurrentUser = {
  //     result: {
  //       email: "abzxy50312@gmail.com",
  //       joinedOn: "2222-07-15T09:57:23.489Z",
  //     },
  //   };

  const CurrentUser = useSelector((state) => state.currentUserReducer);
  const [name, setName] = useState();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    const numstr = name.toString();
        dispatch(num({id:CurrentUser.result._id,num:name}))
        console.log(CurrentUser)
    console.log("submitted")
    console.log(name)
  };
  return (
    <div className="container_CreateEditChanel">
      <input
        onClick={() => setPhoneNo(false)}
        type="submit"
        name="text"
        value={"X"}
        className="ibtn_x"
      />
      <div className="container2_CreateEditChanel">
        <h1>
          Add/Change Phone Num
        </h1>
        <PhoneInput
        inputStyle={{color:'black'}}
        className = 'ibox'
        country={'us'}
        value={name}
        onChange={(name)=>setName("+"+name)}
        />
        <input
          type="submit"
          value={"Submit"}
          onClick={handleSubmit}
          className="ibtn"
        />
      </div>
    </div>
  );
}

export default PhoneNo;
