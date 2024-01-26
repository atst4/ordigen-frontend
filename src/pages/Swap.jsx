import React from 'react'
import Header from '../components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import ConnectSwap from '../components/ConnectSwap'
import img_1 from '../assets/img/icon/1.svg'
import img_2 from '../assets/img/icon/2.svg'
import img_3 from '../assets/img/swap-title-logo.png'

export const Swap = () => {
  const priceList = [
    {
      title: 700,
      sats: '11,232',
      usd: 5.82,
    },
    {
      title: 535,
      sats: '14,450',
      usd: 7.65,
    },
    {
      title: 865,
      sats: '17,432',
      usd: 87.65,
    },
    {
      title: 754,
      sats: '15,563',
      usd: 7.65,
    },
  ]
  return (
    <>
      <Header />
      <div className="dashboard swap">
        <Container>
          <Row>
            <Col xs={12} lg={5} xl={4}>
              <ConnectSwap />
            </Col>
            <Col xs={12} lg={7} xl={8} className='mt-4 mt-lg-0'>
              <div className="swap-title d-flex justify-content-between">
                <div className="swap-title-wrap">
                  <div className="swap-title-wrap-icon">
                    <img src={img_1} alt="" />
                  </div>
                  <h5>ETH</h5>
                  <p>ETHEREUM NETWORK</p>
                </div>
                <div className="swap-title-wrap">
                  <div className="swap-title-wrap-icon medal-border">
                    <img src={img_3} alt="" />
                  </div>
                </div>
                <div className="swap-title-wrap">
                  <div className="swap-title-wrap-icon">
                    <img src={img_2} alt="" />
                  </div>
                  <h5>ORBI</h5>
                  <p>BRC-20 NETWORK</p>
                </div>
              </div>
              <Row className="justify-content-center">
                {priceList.map((item, index) => (
                  <Col xs={6} xl={4} xxl={3} key={index} className='mb-4'>
                    <div className="swap-card">
                      <div className="swap-card-count text-center">
                        <h3>{item.title}</h3>
                        <h4> <span>{item.sats}</span> <span>sats/ORDI</span></h4>
                        <span>${item.usd}</span>
                      </div>
                      <div className="swap-card-price">
                        <p>#53197827</p>
                        <div className="swap-card-price-bottom d-flex align-items-center justify-content-between">
                          <div className="swap-card-price-bottom-logo">
                            <img src={img_1} alt="" />
                            <span>0.077</span>
                          </div>
                          <span>$3375.13</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
              <div className="text text-center">
                <p>Select tokens to purchase from above quotes. *Your Spend amount may vary.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
