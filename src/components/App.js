import React,{useState} from 'react';

import { NavBar,LoginForm,CustomerSection,InchargeSection } from '.';

const App = () => {
  const [option,setOption] = useState(0);
  const [customers,setCustomers] = useState([]);

  return (
    <div>
      <NavBar option={option} setOption={setOption} />
      {option===0 && <CustomerSection />}
      {option===1 && <LoginForm setOption={setOption} setCustomers={setCustomers} />}
      {option===2 && <InchargeSection customers={customers} />}
    </div>
  );
}

export default App;
