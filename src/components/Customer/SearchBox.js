import React from 'react';
import { useFormInput ,notify,getFormBody} from '../../helpers/utils';
import {APIUrls} from '../../helpers/urls';
import {Row,Col } from 'antd';

const Form = (props) => {
    const username = useFormInput("");
    const contact = useFormInput("");
    const pin = useFormInput("");
    const {setBranches} = props;
    
  //Handling the submission of the form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (username.value && contact.value && pin.value) {

        const url = APIUrls.getBranches();
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: getFormBody({
            username:username.value,
            contact:contact.value,
            pin:pin.value
        }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              if(data.data.branches.length===0){
                notify('error',"Bad Bad Luck,No Donut for you !!!");
              }
                setBranches(data.data.branches);
              return;
            }
            //notified error
            notify('error',data.error);
          });
      }else {
      notify('error',"Invalid Username / Password");
    }
    username.reset("");
    contact.reset("");
    pin.reset("");
  };

    return (
        <div>
            <form onSubmit={(e) => handleFormSubmit(e)}>
            <Row style={{padding:10}}>
                <Col span={6}>
                  <div className='field' style={{margin:0}}>
               <label htmlFor='username'>Name : </label>
                <input id='username' type='text' style={{width:'60%'}} placeholder='Enter Your Name' value={username.value} onChange={username.onChange} required/>
                </div>
                </Col>
                <Col span={7} offset={1}>
                <div className='field' style={{margin:0}}>
             
                <label htmlFor='contact'>Contact Number : </label>
                <input id='contact' type='number' style={{margin:0,width:'60%'}} placeholder='Enter Your Number' value={contact.value} onChange={contact.onChange} required />
 </div>
                </Col>
                <Col span={6} offset={1}>
                <div className='field' style={{margin:0}}>
             
                <label htmlFor='pin'>Pin Code : </label>
                <input id='pin' type='number' style={{margin:0,width:'60%'}} placeholder='Enter Pin Code' value={pin.value} onChange={pin.onChange} required />
                </div>
                </Col>
                <Col span={2} offset={1} className='form-button'>
                <button style={{backgroundColor:'red',color:'white',margin:0,padding:5}} type='submit'>Search</button>
                </Col>
                </Row>
            </form>
        </div>
    );
}

export default Form;