import React from 'react'
import Header from '../components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import ConnectSwap from '../components/ConnectSwap'

export default function ConnectWallet() {
  const searchItem = [
    {
      title: 'Inscription ca',
      price: '0x3135......254',
    },
    {
      title: 'Supply',
      price: '21,000,000',
    },
    {
      title: 'Minted',
      price: '21,000,000',
    },
    {
      title: 'Holders',
      price: '21,000',
    },
    {
      title: 'Volume',
      price: '$2,232,000',
    },
    {
      title: 'Marketcap',
      price: '$21,232,000',
    },
  ]
  return (
    <>
      <Header />
      <div className="dashboard">
        <Container>
          <Row>
            <Col xs={12} lg={5} xl={4}>
              <ConnectSwap />
              <div className="search-card d-grid mt-4">
                {searchItem.map((item, index) => (
                  <div className="search-card-single" key={index}>
                    <span>{item.title}:</span>
                    <h6><span>{item.price}</span></h6>
                  </div>
                ))}
              </div>
            </Col>
            <Col xs={12} lg={7} xl={8} className='mt-4 mt-lg-0'>
              <div className="search-area">
                <div className="search-area-wrap">
                  <div className="search-area-icon d-flex align-items-center justify-content-center">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M118.321 103.108L89.5902 73.4265C87.53 71.297 84.955 70.4445 83.8395 71.5332C82.72 72.6142 80.1433 71.7637 78.0831 69.6343L77.6722 69.2082C90.531 52.2959 89.2831 28.0813 73.8415 12.6397C56.9885 -4.21325 29.6635 -4.21325 12.8126 12.6397C-4.04039 29.4927 -4.04039 56.8139 12.8126 73.6669C28.5172 89.3736 53.304 90.4256 70.2509 76.86L70.4313 77.0481C72.4877 79.1776 73.2537 81.7794 72.1308 82.8621C71.0131 83.9452 71.7735 86.5487 73.8359 88.6743L102.551 118.367C104.611 120.491 108.006 120.554 110.138 118.492L118.196 110.694C120.32 108.637 120.377 105.245 118.321 103.108ZM64.3582 64.1829C52.7607 75.7822 33.8881 75.7822 22.2923 64.1868C10.6948 52.5893 10.6966 33.7145 22.2923 22.1191C33.8881 10.5216 52.7607 10.5234 64.3543 22.1209C75.9536 33.7166 75.9536 52.5875 64.3582 64.1829Z" fill="#F1F1F7"></path>
                    </svg>
                  </div>
                  <h4>Searching Prices</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
