import { Component } from 'react'
import work_img from '../assets/img/work-img.svg';
import { Col, Container, Row } from 'react-bootstrap';

export default class HowItWork extends Component {
  render() {
    return (
      <div className="work">
        <Container>
            <Row className="justify-content-center text-center">
                <Col xs={12} lg={9} xxl={8}>
                    <div className="work-title section-title mb-0">
                        <h2 className="text-primary">How It Works</h2>
                        <p>OrdiGen streamlines your journey into the world of BRC-20 tokens. Simply browse and choose your desired token, tell us how much ETH you want to invest and where you'd like the purchased tokens delivered on the Bitcoin network.</p>
                        <p>We'll intelligently scan multiple DEXs for the best price, seamlessly bridge your ETH to Bitcoin, and acquire your tokens, handling the complex behind-the-scenes without compromising your control. Sit back and enjoy the seamless
                            experience of investing in BRC-20 tokens directly with your Ethereum.</p>
                    </div>
                </Col>
                <Col xs={12} lg={10}>
                  <div className="d-flex justify-content-center">
                    <div className="work-img">
                        <img src={work_img} alt="" />
                    </div>
                  </div>
                </Col>
            </Row>
        </Container>
    </div>
    )
  }
}
