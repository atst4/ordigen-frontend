import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ConnectSwap from './ConnectSwap'

const Connect = () => {   
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
                                <p>For more info on how it works see <a href="https://ordigens-organization.gitbook.io/ordigen-whitepaper-v1.0/" target='_blank' rel='noreferrer'>gitbook</a></p>
                                <a href="https://ordigens-organization.gitbook.io/ordigen-whitepaper-v1.0/" target='_blank' rel='noreferrer' className="primary-btn ">Documents</a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <ConnectSwap />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Connect;