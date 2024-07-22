import axios from "axios";
import { Request, UserFail, UserSuc } from "../actions/userAction";

export  const getUser = () => {
    return (dispatch) => {     //nameless functions
      // Initial action dispatched
        dispatch(Request());
      // Return promise with success and failure actions
      return axios.get('https://jsonplaceholder.typicode.com/users').then(  
        user => dispatch(UserSuc(user.data)),
        err => dispatch(UserFail(err))
      );
    };
  };