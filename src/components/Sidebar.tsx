import { Nav } from "react-bootstrap"
import { AiTwotoneSetting } from "react-icons/ai"
import { BsGridFill } from "react-icons/bs"
import { FaHornbill, FaUsers } from "react-icons/fa"
import { GrNotes } from "react-icons/gr"
import { HiShoppingBag } from "react-icons/hi"
import { IoIosSend } from "react-icons/io"

function Sidebar() {
    return (
        <>
            <div className="col-lg-2 pt-lg-4 pb-0">
                <Nav className="sidebar">
                    <div className="position-sticky d-flex">
                        <ul className="nav flex-lg-column">
                            <li className="nav-item mt-2 d-flex py-2">
                                <FaHornbill style={{ fontSize: '40px' }} className="rounded-circle bg-primary text-white p-2 me-2" />
                                <span className="d-none d-lg-block text-primary align-bottom" style={{ fontSize: '25px', fontWeight: 'bold' }}>Tumbas</span>
                            </li>
                            <div className='d-flex mt-4 '>
                                <span className="d-none d-lg-block" style={{ fontSize: '18px', fontWeight: 'bold' }}>Menu</span>
                            </div>
                            <li className="nav-item d-flex mt-4 pe-2" id="activeLink">
                                <BsGridFill style={{ fontSize: '25px' }} className="me-3" />
                                <span className="d-none d-lg-block" style={{ fontSize: '18px', fontWeight: 'normal' }}>Overview</span>
                            </li>
                            <li className="nav-item d-flex mt-4  text-dark">
                                <GrNotes style={{ fontSize: '25px' }} className="me-3" />
                                <span className="d-none d-lg-block" style={{ fontSize: '18px', fontWeight: 'normal' }}>Orders</span>
                            </li>
                            <li className="nav-item d-flex mt-4  text-dark">
                                <HiShoppingBag style={{ fontSize: '25px' }} className="me-3" />
                                <span className="d-none d-lg-block" style={{ fontSize: '18px', fontWeight: 'normal' }}>Product</span>
                            </li>
                            <li className="nav-item d-flex mt-4  text-dark">
                                <AiTwotoneSetting style={{ fontSize: '25px' }} className="me-3" />
                                <span className="d-none d-lg-block" style={{ fontSize: '18px', fontWeight: 'normal' }}>Settings</span>
                            </li>
                            <div className='d-flex mt-5 align-bottom'>
                                <span className="d-none d-lg-block" style={{ fontSize: '18px', fontWeight: 'bold' }}>Business</span>
                            </div>
                            <li className="nav-item d-flex mt-4 text-dark">
                                <IoIosSend style={{ fontSize: '25px' }} className="me-3" />
                                <span className="d-none d-lg-block" style={{ fontSize: '18px', fontWeight: 'normal' }}>Shipment</span>
                            </li>
                            <li className="nav-item d-flex mt-4  text-dark">
                                <FaUsers style={{ fontSize: '25px' }} className="me-3" />
                                <span className="d-none d-lg-block" style={{ fontSize: '18px', fontWeight: 'normal' }}>Employee</span>
                            </li>
                            <div style={{ textAlign: 'left', paddingTop: '150px' }}>
                                <p className="d-none d-lg-block" style={{ fontSize: '15px', fontWeight: 'bold', textAlign: 'left', marginBottom: '0' }}>&copy; Tumbas 2020</p>
                                <p className="d-none d-lg-block" style={{ fontSize: '12px', marginTop: '8px' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </ul>
                    </div>
                </Nav>
            </div>
        </>
    )
}

export default Sidebar
