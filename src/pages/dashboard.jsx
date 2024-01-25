
import Header from '../components/Header';
import { Col, Container, Row } from 'react-bootstrap';
import ConnectSwap from '../components/ConnectSwap';
import Accordion from 'react-bootstrap/Accordion';


const Dashboard = () => {
    return (
        <>
            <Header />
            <div className="dashboard">
                <Container>
                    <Row>
                        <Col lg={5} xxl={4} className='mb-4 mb-md-5 mb-lg-0'>
                            <ConnectSwap />
                        </Col>
                        <Col lg={7} xxl={8}>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <div className="div">
                                            <strong className='d-block fw-bold fs-16 text-white mb-2 mb-md-3'>1 ETH = 1,817.4662 ORDI <span>($1,826.68)</span></strong>
                                            <strong className='d-block fw-bold fs-16 text-white'>1 ORDI = 0.0006 ETH <span>($1)</span></strong>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li className="d-flex align-items-center justify-content-between">
                                                <span>Pair type</span>
                                                <span className="text-gradient text-uppercase fw-semibold">ORDI</span>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between">
                                                <span>ETH swap rate</span>
                                                <span className='text-white'>
                                                    1 ETH
                                                    <svg className='mx-2' width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.4596 5.45962C11.7135 5.20578 11.7135 4.79422 11.4596 4.54038L7.32304 0.403806C7.0692 0.149965 6.65765 0.149965 6.40381 0.403806C6.14996 0.657646 6.14996 1.0692 6.40381 1.32304L10.0808 5L6.40381 8.67695C6.14997 8.9308 6.14997 9.34235 6.40381 9.59619C6.65765 9.85003 7.0692 9.85003 7.32305 9.59619L11.4596 5.45962ZM5.68248e-08 5.65L11 5.65L11 4.35L-5.68248e-08 4.35L5.68248e-08 5.65Z" fill="white" />
                                                    </svg>

                                                    1,747.747 ORDI
                                                </span>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between">
                                                <span>ORDI swap rate</span>
                                                <span className='text-white'>
                                                    1 ORDI
                                                    <svg className='mx-2' width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.4506 5.45962C16.7045 5.20578 16.7045 4.79422 16.4506 4.54038L12.314 0.403805C12.0602 0.149965 11.6486 0.149965 11.3948 0.403805C11.141 0.657646 11.141 1.0692 11.3948 1.32304L15.0718 5L11.3948 8.67695C11.141 8.9308 11.141 9.34235 11.3948 9.59619C11.6486 9.85003 12.0602 9.85003 12.314 9.59619L16.4506 5.45962ZM0.205078 5.65L15.991 5.65L15.991 4.35L0.205078 4.35L0.205078 5.65Z" fill="white" />
                                                    </svg>
                                                    0.0005486 ETH
                                                </span>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between">
                                                <span>ETH / ORDI liquidity ratio</span>
                                                <span className='text-white'>1,817.466217</span>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between">
                                                <span>ORDI / ETH liquidity ratio</span>
                                                <span className='text-white'>0.0005502</span>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between">
                                                <span>Pool share</span>
                                                <span className='text-white'>0.001%</span>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between">
                                                <span>LP address</span>
                                                <span>0x54B2...8F732c
                                                    <svg className='ms-2' width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.70243 0.0324011C1.17399 0.135661 0.709314 0.61248 0.606054 1.15004C0.587832 1.25634 0.575684 3.03606 0.575684 6.30394V11.2969H1.27421H1.97273V6.36164V1.42641L6.21855 1.42034L10.4613 1.41123L10.4704 0.703592L10.4765 -0.00100708L6.15781 0.00203037C3.77979 0.00506687 1.77532 0.0172157 1.70243 0.0324011Z" fill="#B8B8B9" />
                                                        <path d="M4.5016 2.87064C3.96404 2.98909 3.51759 3.4568 3.42951 3.9974C3.39003 4.24036 3.39003 14.1351 3.42951 14.3781C3.52063 14.946 4.00352 15.4289 4.57145 15.52C4.82049 15.5625 12.6318 15.5595 12.8475 15.52C13.4002 15.4137 13.8618 14.9521 13.9681 14.3993C14.0106 14.1746 14.0106 4.20088 13.9681 3.97614C13.8922 3.57828 13.5885 3.16828 13.2423 2.99213C12.9021 2.82205 13.0206 2.82509 8.68364 2.82813C5.44005 2.82813 4.65345 2.83724 4.5016 2.87064ZM12.6014 9.18774V14.123H8.71401H4.82656V9.18774V4.25251H8.71401H12.6014V9.18774Z" fill="#B8B8B9" />
                                                    </svg>
                                                </span>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Dashboard;