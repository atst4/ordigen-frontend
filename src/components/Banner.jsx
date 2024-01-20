import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <Container>
            <Row>
                <Col md={8} xxl={7}>
                    <div className="banner-content">
                        <h1><span>Unlocking BRC-20:</span> Ordigen&#39;s Liquidity Injection</h1>
                        <p>Explore Ordigen, the cross-chain swap protocol allowing ETH degens to seamlessly inject liquidity into the booming BRC-20 ecosystem. Dive into decentralized growth effortlessly.</p>
                        <div className="banner-btn d-flex align-items-center justify-content-center justify-content-md-start gap-3 gap-lg-4">
                            <button className="primary-btn">Documents</button>
                            <button className="primary-btn bg-transparent"><span className='d-block'>Launch Swap</span></button>
                        </div>
                        <span className="d-block">CA: 0x000000000000000000000000000000</span>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    )
  }
}
