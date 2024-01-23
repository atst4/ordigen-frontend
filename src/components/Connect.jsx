import { Component, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';

import icon_1 from '../assets/img/icon/1.svg'
import icon_2 from '../assets/img/icon/2.svg'
import icon_3 from '../assets/img/icon/3.svg'
import icon_4 from '../assets/img/icon/4.svg'
import icon_5 from '../assets/img/icon/5.svg'
import icon_6 from '../assets/img/icon/6.svg'
import icon_7 from '../assets/img/icon/7.svg'


const Connect = () => {
    const swapItem = [
        {
            icon: icon_1,
            title: 'ETH'
        },
        {
            icon: icon_2,
            title: 'ORDI'
        },
        {
            icon: icon_3,
            title: 'AVAX'
        },
        {
            icon: icon_4,
            title: 'ARB'
        },
        {
            icon: icon_5,
            title: 'BASE'
        },
        {
            icon: icon_6,
            title: 'BRC'
        },
        {
            icon: icon_7,
            title: 'POLY'
        },
    ];

    const [itemSelected, setItemSelected] = useState({ icon: swapItem[0].icon, title: swapItem[0].title });
    const [itemSelectedTwo, setItemSelectedTwo] = useState({ icon: swapItem[1].icon, title: swapItem[1].title });
   
    const handleClick = (item) => {
        setItemSelected(item);
    };
    const handleClickTwo = (item) => {
        setItemSelectedTwo(item);
    };


    return (
        <div className="buy section-padding">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} lg={6}>
                        <div className="buy-content">
                            <h2>Buy ANY BRC-20 Token With Ease</h2>
                            <p className="p1">Exploring the BRC-20 ecosystem, even for active crypto enthusiasts, can feel daunting. Our mission is to transform this experience by crafting a secure and user-friendly platform. </p>
                            <p>With the OrdiGen swap protocol, users can effortlessly purchase ANY BRC-20 tokens using their EVM wallets.</p>
                        </div>
                        <div className="buy-btn">
                            <div className="buy-btn-inner d-flex align-items-center justify-content-center justify-content-md-between">
                                <p>For more info on how it works see <a href="#">gitbook</a></p>
                                <a href="#" className="primary-btn ">Documents</a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className="buy-connect mx-auto">
                            <div className="buy-connect-single d-flex justify-content-between">
                                <div className="buy-connect-single-left">
                                    <p>Spend Amount</p>
                                    <span className="d-block">0.0</span>
                                </div>
                                <div className="buy-connect-single-right">
                                    <Dropdown>
                                        <Dropdown.Toggle>
                                            <img src={itemSelected.icon} alt="" />
                                            <p>{itemSelected.title}</p>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {swapItem.map((item, index) => (
                                                <Dropdown.Item href='#' key={index} onClick={() => handleClick(item)}>
                                                    <img src={item.icon} alt="" />
                                                    {item.title}
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <p className="balance text-end">Balance: 0</p>
                                </div>
                            </div>
                            <button className="data-icon d-flex align-items-center justify-content-center">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1_1847)">
                                        <path d="M1.61906 11.8332C1.29504 11.8332 1.00426 12.0322 0.886792 12.3341C0.769329 12.6361 0.849282 12.9792 1.08813 13.1982L7.37384 18.96C7.60352 19.1706 7.93593 19.2255 8.22114 19.1001C8.50635 18.9746 8.69047 18.6924 8.69047 18.3809L8.69047 1.61898C8.69047 1.18504 8.3387 0.833268 7.90476 0.833268C7.47082 0.833268 7.11905 1.18504 7.11905 1.61898V11.8332H1.61906Z" fill="#F1F1F7" />
                                        <path d="M18.3809 8.16659L12.8809 8.16659V18.3809C12.8809 18.8148 12.5292 19.1666 12.0952 19.1666C11.6613 19.1666 11.3095 18.8148 11.3095 18.3809L11.3095 1.61898C11.3095 1.30739 11.4936 1.02524 11.7789 0.899779C12.0641 0.774316 12.3965 0.829241 12.6262 1.03979L18.9119 6.80168C19.1507 7.02063 19.2307 7.36374 19.1132 7.66571C18.9957 7.96769 18.7049 8.16659 18.3809 8.16659Z" fill="#F1F1F7" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_1847">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <div className="buy-connect-single d-flex justify-content-between align-items-center">
                                <div className="buy-connect-single-left">
                                    <span className="d-block second-span">BRC-20 ASSETS</span>
                                </div>
                                <div className="buy-connect-single-right">
                                    <Dropdown className='dropdown-2'>
                                        <Dropdown.Toggle>
                                            <img src={itemSelectedTwo.icon} alt="" />
                                            <p>{itemSelectedTwo.title}</p>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {swapItem.map((item, index) => (
                                                <Dropdown.Item href='#' key={index} onClick={() => handleClickTwo(item)}>
                                                    <img src={item.icon} alt="" />
                                                    {item.title}
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="buy-connect-single last-padding d-flex  justify-content-between align-items-center">
                                <p className="p2">Receiving Address:</p>
                                <p className="p2">0x54B2...8F732c</p>
                            </div>
                            <div className="buy-connect-btn">
                                <a href="#" className="primary-btn ">Connect Wallet</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Connect;