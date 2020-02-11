import React from "react";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
// import Navbar from "../components/Navbar";

const Directory = () => {
    const handleSubmit = e => {
        e.preventDefault();
    };
    return (
        <div>
            {/* <Navbar/> */}
            <div className="mt-5">
                <h2>Add a New Employee</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <Container className="mt-5 px-5">
                    <Row className="form-group">
                        <Col size="12">
                            <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Name"
                             name="name" />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Email"
                                name="email"
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Phone Number"
                                name="phone"
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Department"
                                name="department"
                            />
                        </Col>
                    </Row>
                    <button className="btn btn-primary" type="submit">
                        Add Employee
              </button>
                </Container>
                
            </form>
        </div>
    );
}
export default Directory;