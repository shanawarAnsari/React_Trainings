import React, { useState,useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Form from "./Form";
import { Button } from "@material-ui/core";
const AllCustomer = (props) => {
       
  const [customer,setCustomer]= useState();
  const [isAddCustClicked, setIsAddCustClicked] = useState(false);
  const [isEditCustClicked, setIsEditCustClicked] = useState(false);
  const handleAddUserClick = () => {
    setIsAddCustClicked(!isAddCustClicked);
  };
  const handleDelete = (id) => {
    props.delCustomer(id);
  };
  const handleEdit = (id) => {
    setIsEditCustClicked(!isEditCustClicked);
    getIndividualUser(id)
  };
  function getIndividualUser(id){
    const abc=props.customerList.filter(
      (customer) => customer.CustId === id);   
      setCustomer(abc)     
      console.log(abc)
  }

  return (
    <>
      <TableContainer style={{ maxHeight: "100vh" }}>
        <Table stickyHeader size="small">
          <TableHead style={{ backgroundColor: "lightgray" }}>
            <TableRow>
              <TableCell>Customer Id</TableCell>
              <TableCell align="left">First Name</TableCell>
              <TableCell align="left">Middle Name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">Location</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          {props.customerList.length < 1 ? (
            <TableBody>
              <TableRow>
                <TableCell>
                  {" "}
                  <h3>No Customers To Display</h3>
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {props.customerList.map((cust) => (
                <TableRow key={cust.CustId}>
                  <TableCell component="th" scope="row">
                    {cust.CustId}
                  </TableCell>
                  <TableCell align="left">{cust.FirstCustName}</TableCell>
                  <TableCell align="left">{cust.MiddleCustName}</TableCell>
                  <TableCell align="left">{cust.LastCustName}</TableCell>
                  <TableCell align="left">{cust.CustLocation}</TableCell>
                  <TableCell align="left">
                    <Button
                      size="small"
                      onClick={() => handleEdit(cust.CustId)}
                    >
                      <EditIcon style={{ color: "black" }} />
                    </Button>
                    <Button
                      size="small"
                      onClick={() => handleDelete(cust.CustId)}
                    >
                      <HighlightOffIcon style={{ color: "#cc3b3b" }} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
          <Button
            variant="contained"
            size="small"
            color="primary"
            style={{ float: "right" }}
            onClick={handleAddUserClick}
          >
            {isAddCustClicked ? "Close" : "Add Customer"}
          </Button>
       
        {(isAddCustClicked)  ? (
          <Form
            onSubmit={props.addNewCustomer}
            onSave={handleAddUserClick}
            onEdit={props.editCustomer}
            customer={customer}
            isAddCustClicked={isAddCustClicked}
           
          />
        ) : (
          ""
        )}
      </TableContainer>
    </>
  );
};
export default AllCustomer;
