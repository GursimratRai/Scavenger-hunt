import React from "react";
//Use ant design components
import {Button, Row, Col } from "antd";

//Nav bar contains the title/logo and button for adding new contact
const NavBar = (props) => {
  const {option,setOption} = props;
  return (
    <div>

      <Row className='header'>

        <Col span={4}><h1 onClick={()=> option!==2 && setOption(0)}>Scavenger Hunt</h1></Col>
      
        <Col span={2} offset={18}>

         {option!==2 ? ( <Button type='primary' onClick={() => setOption(1)}>Login</Button>
          ) : (<Button type='primary' onClick={() => setOption(0)}>Log Out</Button>
          )}
        </Col>
      
      </Row>
    
    </div>
  );
}

export default NavBar;
