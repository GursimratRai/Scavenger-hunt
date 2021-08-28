import { useState } from "react";
import { notification } from "antd";

//function used for encoding the form data
export function getFormBody(params) {
  let formBody = [];
  for (let property in params) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(params[property]);

    formBody.push(encodedKey + "=" + encodedValue);
  }
  return formBody.join("&");
}


//Custom React Hook for handling form input and changes
export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function reset(resetValue) {
    setValue(resetValue);
  }

  return {
    value,
    onChange: handleChange,
    reset,
  };
}


//function for notification
export function notify(type, data) {
    if (type === "success") {
      notification.success({
        message: data,
        style: {
          borderRadius: 5,
          backgroundColor: "#9cda7e",
          borderColor: "#2f6316",
        },
      });
    } else {
      notification.error({
        message: data,
        style: {
          borderRadius: 5,
          backgroundColor: "#e89795",
          borderColor: "#880411",
        },
      });
    }
  }
  
