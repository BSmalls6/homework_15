import React, { Component } from "react";
import Container from "../components/Container";
// import api from "../Utils/api";
import gatherEmployees from "../Utils/employeemodel";

class Table extends Component {
componentDidMount() {
    gatherEmployees();
   
  };

  

  render() {
    console.log(this.state);
    return (

      <Container>
        <div className="mt-4">
                <h2>Employee List</h2> <button className="btn btn-success" type="submit">
                        Sort
              </button>
            </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Department</th>
            </tr>
          </thead>
          <tbody>
         
            <tr>
              <th scope="row">Scotty</th>
              <td>beammeup@gmail.com</td>
              <td>2064065067</td>
              <td>Technology</td>
            </tr>
            <tr>
              <th scope="row">Kirk</th>
              <td>Ih8rulez@gmail.com</td>
              <td>2064065067</td>
              <td>LEadership</td>
            </tr>
            <tr>
              <th scope="row">Spock</th>
              <td>neckpincher24@starfleet.net</td>
              <td>2064065067</td>
              <td>Stick in the mud</td>
            </tr>
          </tbody>
        </table>
      </Container>
    )
  };

};

export default Table;