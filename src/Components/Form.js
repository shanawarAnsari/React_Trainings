import React, { useState } from "react";
import Alert from "@material-ui/lab/Alert";
import {
  FormControl,
  Input,
  TextField,
  Button,
} from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import { ValidatorForm } from "react-material-ui-form-validator";
const Form = (props) => {
  const [custId, setCustId] = useState(props.customer.CustId);
  const [firstName, setFirstName] = useState(props.customer.FirstCustName);
  const [lastName, setLastName] = useState(props.customer.LastCustName);
  const [MiddleName, setMiddleName] = useState(props.customer.MiddleCustName);
  const [location, setLocation] = useState(props.customer.CustLocation);
  const [error, setError] = useState("");

  const handleAddCust = (e) => {
    e.preventDefault();
    console.log("Add Cust");
    props.onSubmit({
      CustId: Math.floor(Math.random() * 100),
      LastCustName: lastName,
      MiddleCustName: MiddleName,
      FirstCustName: firstName,
      CustLocation: location,
    });
    props.onSave() 
   
  };
  const handleLastNameChange = (e) => {
    setError("");
    let correctLname = /^[a-zA-Z\\s]*$/.test(e.target.value);
    if (!correctLname) {
      setError("Please check your Last Name");
    }
    setLastName(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setError("");
    let correctFname = /^[a-zA-Z\\s]*$/.test(e.target.value);
    if (!correctFname) {
      setError("Please check your First Name");
    }
    setFirstName(e.target.value);
  };
  const handleMiddleNameChange = (e) => {
    setError("");
    let correctMname = /^[a-zA-Z\\s]*$/.test(e.target.value);
    if (!correctMname) {
      setError("Please check your Middle Name");
    }
    setMiddleName(e.target.value);
  };
 
  return (
    <div className="form">
      <ValidatorForm  onSubmit={handleAddCust}>
        <FormGroup style={{ maxWidth: "350px", margin: "auto" }}>
          {error && <Alert severity="error">{error}</Alert>}
          <FormControl required style={{ marginBottom: "10px" }}>
            <Input
              name="LastName"
              type="text"
              autoComplete="on"
              onChange={handleLastNameChange}
              placeholder="Last Name"
              value={lastName}          

            />
          </FormControl>
          <FormControl required style={{ marginBottom: "10px" }}>
            <TextField
              name="FirstName"
              type="text"
              autoComplete="on"
              onChange={handleFirstNameChange}
              maxLength={12}
              placeholder="First Name"
              value={firstName}
           
            />
          </FormControl>
          <FormControl required style={{ marginBottom: "10px" }}>
            <TextField
              name="MiddleName"
              type="text"
              autoComplete="on"
              onChange={handleMiddleNameChange}
              maxLength={12}
              placeholder="Middle Name"
              value={MiddleName}
              
            />
          </FormControl>
          <FormControl required style={{ marginBottom: "10px" }}>
            <TextField
              name="Location"
              type="text"
              autoComplete="on"
              onChange={(e) => setLocation(e.target.value)}
              maxLength={20}
              placeholder="Location"
              value={location}
              
            />
          </FormControl>
          <Button variant="contained" color="secondary" type="Submit" disabled={error ? true: false}>
            Add Customer
          </Button>
        </FormGroup>
      </ValidatorForm >
    </div>
  );
};
export default Form;
