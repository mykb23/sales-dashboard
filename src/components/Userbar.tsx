import { Card, Col, Form, Nav, Row } from "react-bootstrap";
import { IoIosNotifications } from "react-icons/io"
import { BsPencilSquare } from "react-icons/bs"
import { HiShoppingBag } from "react-icons/hi";
import { GiNorthStarShuriken } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";


function Userbar() {
    return (
        <>
            <div className="col-lg-3 pt-md-4">
                <div className="col-12 leftSide">
                    <Row>
                        <div className="py-2 d-flex justify-content-between collapse">
                            <IoIosNotifications style={{ fontSize: '55px' }} className="float-start me-5 rounded-circle border border-2  py-2 px-3" />
                            <BsPencilSquare style={{ fontSize: '55px' }} className="float-end rounded-circle border border-2  py-2 px-3" />
                        </div>
                    </Row>
                    <Row className="d-flex justify-content-center mt-2">
                        <div className="bg-primary p-5 rounded-circle" style={{ width: '120px', height: '120px' }}></div>
                        <h1 className="text-center fs-6 fw-bolder pt-4">Konter Pulsa</h1>
                    </Row>
                    <Row className="px-3 py-2 mt-2">
                        <Card>
                            <Card.Body>
                                <div className="d-flex justify-content-between w-100">
                                    <div className="d-flex align-items-center pe-4 border border-1 border-start-0 border-top-0 border-bottom-0">
                                        <HiShoppingBag className="me-1" style={{ background: "rgb(248,248,251)", padding: '5px', fontSize: '25px' }} />
                                        <div className="align-middle m-0 pe-3" style={{ fontSize: '12px' }}>
                                            <span className="fw-bold m-0 d-block">218</span>
                                            <span>Products</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center ms-2">
                                        <FaUsers className="me-1" style={{ background: "rgb(248,248,251)", padding: '5px', fontSize: '25px' }} />
                                        <div className="align-middle m-0  pe-4" style={{ fontSize: '12px' }}>
                                            <span className="fw-bold m-0 d-block">2580</span>
                                            <span>Followers</span>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row className="mt-3 px-3">
                        <p className="px-0 mb-3 fw-bold" style={{ fontSize: '12px' }}>Reputation</p>
                        <Card>
                            <Card.Body>
                                <div className="d-flex align-items-center">
                                    <GiNorthStarShuriken className="me-2" style={{ background: "rgb(249,243,238)", color: 'rgb(207,138,91)', padding: '2px', fontSize: '25px' }} />
                                    <div className="w-100">
                                        <div className="fw-bold " style={{ fontSize: '10px' }}>
                                            <p className="mb-0 d-inline" >Star seller</p>
                                            <p className="d-inline mb-0 float-end">89%</p>
                                            <div className="progress mt-1" style={{ height: '2px' }}>
                                                <div className="progress-bar" style={{ width: "89%", background: 'rgb(207,138,91)' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row className="mt-4 px-3">
                        <div className="mb-1 p-0">
                            <span className="p-0 m-0 d-inline fw-bolder float-start" style={{ fontSize: "12px" }}>Recent Orders</span>
                            <span className="p-0 m-0 d-inline fw-bold float-end text-primary" style={{ fontSize: "12px" }}>See All</span>
                        </div>
                        <Card>
                            <Card.Body>
                                <div className="d-flex justify-content-between">
                                    <img className="ps-0 p-1" src={process.env.PUBLIC_URL + 'headset.jpg'} width="30" height="50" alt="" />
                                    <div className="px-1 pt-2" style={{ fontSize: '12px' }}>
                                        <p className="fw-bold mb-1">Redmi 4X</p>
                                        <span style={{ fontSize: '10px', color: 'rgb(163,165,175)' }}>2 Minutes Ago</span>
                                    </div>
                                    <p className="text-success pt-3" style={{ fontSize: '12px' }}>
                                        +$99.89
                                    </p>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <img className="ps-0 p-1" src={process.env.PUBLIC_URL + 'phone.jpeg'} width="30" height="50" alt="" />
                                    <div className="px-1 pt-2" style={{ fontSize: '12px' }}>
                                        <p className="fw-bold mb-1">Redmi 4X</p>
                                        <span style={{ fontSize: '10px', color: 'rgb(163,165,175)' }}>2 Minutes Ago</span>
                                    </div>
                                    <p className="text-success pt-3" style={{ fontSize: '12px' }}>
                                        +$99.89
                                    </p>
                                </div>
                                <div className="d-flex justify-content-between mt-2 mb-2">
                                    <img className="ps-0 p-1" src={process.env.PUBLIC_URL + 'phone2.jpeg'} width="30" height="50" alt="" />
                                    <div className="px-1 pt-2" style={{ fontSize: '12px' }}>
                                        <p className="fw-bold mb-1">Redmi 4X</p>
                                        <span style={{ fontSize: '10px', color: 'rgb(163,165,175)' }}>2 Minutes Ago</span>
                                    </div>
                                    <p className="text-success pt-3" style={{ fontSize: '12px' }}>
                                        +$99.89
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Row>

                </div>
            </div>

        </>
    )
}

export default Userbar;
