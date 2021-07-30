import React from 'react';
import './App.css';
import { Card, Col, Dropdown, InputGroup, Row, Table } from 'react-bootstrap';
import { FiSearch } from "react-icons/fi";
import { HiShoppingBag } from "react-icons/hi";
import { AiTwotonePieChart } from "react-icons/ai";
import Sidebar from './components/Sidebar';
import Userbar from './components/Userbar';
import { Form } from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import BarChart from './components/BarChart';
import { FaCartPlus, FaUsers } from 'react-icons/fa';
function App(): JSX.Element {
  return (
    <div className="App container-fluid">
      <div className="row d-md-flex flex-lg-nowrap">
        <Sidebar />
        <div className=" col-lg-7 pt-md-4">
          <div className="col-lg-10 offset-lg-1">
            <Form>
              <InputGroup className="mt-2">
                <InputGroup.Text className="border-0" style={{ paddingLeft: '30px', paddingRight: '0', borderTopLeftRadius: '40px', borderBottomLeftRadius: '40px', background: 'rgba(246,249,254)' }}>
                  <FiSearch style={{ fontSize: '20px' }} />
                </InputGroup.Text>
                <Form.Control className="border-0 py-3" placeholder="Search for product" style={{ borderTopRightRadius: '40px', borderBottomRightRadius: '40px', background: 'rgba(246,249,254)' }} />
              </InputGroup>
            </Form>
            <div className='d-flex mt-4 mb-2'>
              <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Overview</span>
            </div>
            <Row className="mb-3">
              <Col className="mb-3">
                <Card>
                  <Card.Header className="bg-transparent border-0">
                    <HiShoppingBag style={{ fontSize: '22px', color: 'rgba(208,125,71)' }} />
                    <span className="float-end text-success">+24%</span>
                  </Card.Header>
                  <Card.Body className="card-body pt-2 pb-2">
                    <h5 className="card-title fw-bold">$27,340.00</h5>
                    <h6 className="card-subtitle mb-2 text-muted ">Total Sales</h6>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mb-3">
                <Card>
                  <Card.Header className="bg-transparent border-0">
                    <AiTwotonePieChart style={{ fontSize: '22px', color: 'rgba(129,99,182)' }} />
                    <span className="float-end text-danger">+24%</span>
                  </Card.Header>
                  <Card.Body className="card-body pt-2 pb-2">
                    <h5 className="card-title fw-bold">$27,340.00</h5>
                    <h6 className="card-subtitle mb-2 text-muted ">Total Expenses</h6>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mb-3">
                <Card>
                  <Card.Header className="bg-transparent border-0">
                    <FaUsers className="text-success" style={{ fontSize: '22px' }} />
                    <span className="float-end text-success">+24%</span>
                  </Card.Header>
                  <Card.Body className="card-body pt-2 pb-2">
                    <h5 className="card-title fw-bold">$18,280.00</h5>
                    <h6 className="card-subtitle mb-2 text-muted ">Total Visitors</h6>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mb-3">
                <Card>
                  <Card.Header className="bg-transparent border-0">
                    <FaCartPlus className="text-danger" style={{ fontSize: '22px' }} />
                    <span className="float-end text-danger">+24%</span>
                  </Card.Header>
                  <Card.Body className="card-body pt-2 pb-2">
                    <h5 className="card-title fw-bold">$11,340.00</h5>
                    <h6 className="card-subtitle mb-2 text-muted ">Total Orders</h6>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <Card >
                  <Card.Header className="border-0 bg-transparent">
                    <span className="fs-4 me-3 fw-bold">Income</span>
                    <span className="fs-4 fw-bold" style={{ color: 'rgba(171,174,182)' }}>Expense</span>
                    <Dropdown className="float-end">
                      <DropdownToggle className="fs-6 bg-transparent text-dark border-dark">2020</DropdownToggle>
                    </Dropdown>
                  </Card.Header>
                  <Card.Body className="py-3" style={{ height: '150px' }}>
                    <BarChart />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card >
                  <Card.Header className="border-0 bg-transparent">
                    <span className="fs-4 me-3 fw-bold">Popular Products</span>
                  </Card.Header>
                  <Card.Body className="py-0">
                    <Table responsive size="sm" borderless>
                      <thead className="thead" style={{ background: 'rgb(207,210,214)' }}>
                        <tr className="table-light border-0" style={{ color: 'rgba(183,186,200)' }}>
                          <th>Photos</th>
                          <th>Name</th>
                          <th>Date</th>
                          <th>Category</th>
                          <th>Brand</th>
                          <th>Price</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody className="fs-6">
                        <tr>
                          <td><img className="p-1" src={process.env.PUBLIC_URL + 'headset.jpg'} width="50" height='50' alt="" /></td>
                          <td>
                            <p className="fw-bold mb-0">Cowboy Hat</p>
                            <span style={{ fontSize: '14px', color: 'rgb(163,165,175)' }}>#2807856940</span>
                          </td>
                          <td className="fw-bold">Aug 12,2020</td>
                          <td className="fw-bold">Fashion</td>
                          <td className="fw-bold">Swallow</td>
                          <td className="text-success fw-bold">$99.89</td>
                          <td>
                            <p className="fw-bold mb-0">Available</p>
                            <span style={{ fontSize: '14px', color: 'rgb(163,165,175)' }}>18k viewers</span>
                          </td>
                        </tr>
                        <tr>
                          <td><img className="p-1" src={process.env.PUBLIC_URL + 'phone.jpeg'} width="50" height='50' alt="" /></td>
                          <td>
                            <p className="fw-bold mb-0">Cowboy Hat</p>
                            <span style={{ fontSize: '14px', color: 'rgb(163,165,175)' }}>#2807856940</span>
                          </td>
                          <td className="fw-bold">Aug 12,2020</td>
                          <td className="fw-bold">Fashion</td>
                          <td className="fw-bold">Swallow</td>
                          <td className="text-success fw-bold ">$99.89</td>
                          <td>
                            <p className="fw-bold mb-0">Available</p>
                            <span style={{ fontSize: '14px', color: 'rgb(163,165,175)' }}>18k viewers</span>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <Userbar />
      </div>
    </div >
  );
}

export default App;
