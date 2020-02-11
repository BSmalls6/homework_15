import api from "./API";

import { Component } from "react";


function gatherEmployees() {
    return new Promise((resolve, reject) => {
        api.search()
            .then((res) => {
                const users = res.data.results;
                const results = users.map((user) => {
                    return {
                        name: user.name,
                        email: user.email,
                        phone: user.phone,
                        department: user.department,
                    };
                });
                resolve(results);
                console.log(results);
            }).catch(err => reject(err))
        




    });
};

class employeeModel extends Component {
    constructor(props) {
        super(props);
        this.state = {

            name: "",
            email: "",
            phone: "",
            department: ""

        }
        
    }
    
};

export default gatherEmployees;