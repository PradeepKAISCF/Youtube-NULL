import * as api from "../api";
import { setCurrentUser } from "./currentUser";
export const login = (authData) => async (dispatch) => {
  try {
    // console.log(authData);
    const { data } = await api.login(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  } catch (error) {
    alert(error);
  }
};
export const otpverify = (number) => async (dispatch) => {
  try {
    // console.log(authData);
    const { data } = await api.otp(number);
    if(data.message === 'sucess'){
      dispatch({ type: "AUTH", data });
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    }else{
      alert(data.message)
    }
    
  } catch (error) {
    alert(error);
  }
};
export const num = (usernum) => async (dispatch) => {
  try {
    // console.log(authData);
    const { data } = await api.numchange(usernum);
    //dispatch({ type: "AUTH", data });
  } catch (error) {
    alert(error);
  }
};
