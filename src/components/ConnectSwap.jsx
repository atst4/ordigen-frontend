import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import icon_1 from '../assets/img/icon/1.svg'
import icon_2 from '../assets/img/icon/2.svg'
import icon_3 from '../assets/img/icon/3.svg'
import icon_4 from '../assets/img/icon/4.svg'
import icon_5 from '../assets/img/icon/5.svg'
import icon_6 from '../assets/img/icon/6.svg'
import icon_7 from '../assets/img/icon/7.svg'
import icon_8 from '../assets/img/icon/8.svg'
import icon_9 from '../assets/img/icon/9.svg'



const ConnectSwap = () => {
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
    const tokenItem = [
        {
            icon: icon_2,
            title: 'ORDI',
            available: 0,
        },
        {
            icon: icon_8,
            title: 'TRAC',
            available: 0,
        },
        {
            icon: icon_9,
            title: 'MEME',
            available: 0,
        },

    ];
    const [show, setShow] = useState(false);
    const [showTwo, setShowTwo] = useState(false);

    const [itemSelected, setItemSelected] = useState({ icon: swapItem[0].icon, title: swapItem[0].title });
    const [tokenActive, setTokenActive] = useState({ icon: tokenItem[0].icon, title: tokenItem[0].title });

    const handleClick = (item) => {
        setShow(false);
        setItemSelected(item);
    };
    const handleClickTwo = (item) => {
        setShowTwo(false);
        setTokenActive(item);
    };


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseTwo = () => setShowTwo(false);
    const handleShowTwo = () => setShowTwo(true);

    return (
        <>
            <div className="buy-connect mx-auto">
                <div className="buy-connect-single d-flex justify-content-between">
                    <div className="buy-connect-single-left">
                        <p>Spend Amount</p>
                        <span className="d-block">0.0</span>
                    </div>
                    <div className="buy-connect-single-right">
                        <Button onClick={handleShow} className='buy-exchange'>
                            <img src={itemSelected.icon} alt="" />
                            <span>{itemSelected.title}</span>
                        </Button>
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
                        <Button onClick={handleShowTwo} className='buy-exchange my-0'>
                            <img src={tokenActive.icon} alt="" />
                            <span>{tokenActive.title}</span>
                        </Button>
                    </div>
                </div>
                <div className="buy-connect-single last-padding d-flex  justify-content-between align-items-center">
                    <p className="p2">Receiving Address:</p>
                    <p className="p2">0x54B2...8F732c</p>
                </div>
                <div className="buy-connect-btn">
                    <button className="primary-btn">Connect Wallet</button>
                </div>
            </div>
            <Modal className='buy-modal' centered size='md' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Select Network</Modal.Title>
                </Modal.Header>
                <Modal.Body className='px-4'>
                    <ul className="items d-grid gap-2 gap-sm-3 pb-4">
                        {swapItem.map((item, index) => (
                            <li className="d-flex align-items-center gap-2" key={index} onClick={() => handleClick(item)}>
                                <img src={item.icon} alt="" />
                                <span>{item.title}</span>
                            </li>
                        ))}
                    </ul>
                </Modal.Body>
            </Modal>
            {/* end */}
            <Modal className='buy-modal' centered size='md' show={showTwo} onHide={handleCloseTwo}>
                <Modal.Header closeButton>
                    <Modal.Title>Select Token</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className="items-token d-grid gap-2 gap-sm-3">
                        <li><input type="text" className="form-control" placeholder='Search name or paste address' /></li>
                        {tokenItem.map((item, index) => (
                            <li className="d-flex align-items-center gap-2 justify-content-between" key={index} onClick={() => handleClickTwo(item)}>
                                <div className="d-flex align-items-center gap-2">
                                    <img src={item.icon} alt="" />
                                    <span>{item.title}</span>
                                </div>
                                <h6 className='mb-0 fw-normal'>{item.available}</h6>
                            </li>
                        ))}
                    </ul>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ConnectSwap;