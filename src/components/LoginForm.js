import React from "react";

//Custom React Hook for inputing form data and handling the change
import { useFormInput ,getFormBody, notify } from "../helpers/utils";
import {APIUrls} from '../helpers/urls';

//Login Form
const LoginForm = (props) => {
  const branchName = useFormInput("");
  const password = useFormInput("");
 
  const {setCustomers,setOption} = props;
  //Handling the submission of the form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (branchName.value && password.value) {
        const url = APIUrls.login();
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: getFormBody({
            branchName:branchName.value,
            password:password.value,
        }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
                setOption(2);
                setCustomers(data.data.customers);
              //notified success
              notify('success',data.message);
              return;
            }
            //notified error
            notify('error',data.error);
          });
    } 
    else {
      notify('error',"Invalid Username / Password");
    }
    branchName.reset("");
    password.reset("");
  };


  return (
    <div className="container">
      <form className="login-form" onSubmit={(e) => handleFormSubmit(e)}>
        <div className="field">
        <i class="fas fa-code-branch"></i>
        <input
            type="text"
            placeholder="Enter Exact Branch Name"
            required
            value={branchName.value}
            onChange={branchName.onChange}
          />
        </div>
        <div className="field">
          <i className="fas fa-unlock-alt"></i>
          <input
            type="password"
            placeholder="Password"
            required
            value={password.value}
            onChange={password.onChange}
          />
        </div>
        <div className="form-button">
            <button type="Submit">
              Log In
            </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
