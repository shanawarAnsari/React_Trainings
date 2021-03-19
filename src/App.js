import "./App.css";
import "fontsource-roboto";
import Paper from "@material-ui/core/Paper";
import Header from "./Components/Header";
import React, { useState,useEffect } from "react";
import AllCustomer from "./Components/AllCustomer";
import Form from "./Components/Form";
function App() {
 
  const [customerList, setCustomerList] = useState([    
    {
      CustId: 1,
      LastCustName: "Meena",
      MiddleCustName: "Kumar",
      FirstCustName: "Anil",
      CustLocation: "Bangalore",
    },
    {
      CustId: 2,
      LastCustName: "Ansari",
      MiddleCustName: "Shanawar",
      FirstCustName: "Ahmad",
      CustLocation: "Lucknow",
    },
    {
      CustId: 3,
      LastCustName: "Anmol",
      MiddleCustName: "",
      FirstCustName: "Jaiswal",
      CustLocation: "Delhi",
    },
    {
      CustId: 4,
      LastCustName: "Zareena",
      MiddleCustName: "Hasan",
      FirstCustName: "Ansari",
      CustLocation: "Mumbai",
    },
  ]);
  const addNewCustomer = (newCust) => {
    setCustomerList([...customerList, newCust]);
  };
  const delCustomer = (custid) => {    
       setCustomerList(customerList.filter(
        (customer) => customer.CustId != custid))
   
  };

  

  return (
    <div className="appbox">
      <Paper elevation={3}>
        <Header />
        <hr />
        
        <AllCustomer
          customerList={customerList}
          addNewCustomer={addNewCustomer}
          delCustomer={delCustomer}
         
         
        />
      </Paper>
    </div>
  );
}

export default App;
