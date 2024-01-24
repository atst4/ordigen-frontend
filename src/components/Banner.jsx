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
                        <h1><span>Unlocking BRC-20:</span> OrdiGen&#39;s Liquidity Injection</h1>
                        <p>Explore OrdiGen, the cross-chain swap protocol allowing ETH degens to seamlessly inject liquidity into the booming BRC-20 ecosystem. Dive into decentralized growth effortlessly.</p>
                        <div className="banner-btn d-flex align-items-center justify-content-center justify-content-md-start gap-3 gap-lg-4">
                            <a href='https://ordigens-organization.gitbook.io/ordigen-whitepaper-v1.0/' target='_blank' rel='noreferrer' className="primary-btn text-center">Documents</a>
                            <button className="primary-btn bg-transparent text-center"><span className='d-block'>Cross-Chain Swap</span></button>
                        </div>
                        <span className="d-block">CA: 0xc3cc3076cb304494775b3193ef1aa080ba6bf962</span>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    )
  }
}
