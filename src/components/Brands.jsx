import { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img_1 from '../assets/img/brands/1.png';
import img_2 from '../assets/img/brands/2.png';
import img_3 from '../assets/img/brands/3.png';
import img_4 from '../assets/img/brands/4.png';
import img_5 from '../assets/img/brands/5.png';
import img_6 from '../assets/img/brands/6.png';

export default class Brands extends Component {
  render() {
    let brands = [img_1,img_2,img_3,img_4,img_5,img_6];
    return (
      <div className="brand">
        <Container>
            <Row>
                <Col xs={12}>
                    <div className="brand-border">
                        <div className="brand-inner d-flex align-items-center flex-wrap">
                            <p>Supported Chains :</p>
                            <div className="brand-logos d-flex align-items-center flex-wrap flex-grow-1">
                              {brands.map((brand, index) => (
                                  <a href="#" className="brand-logo" key={index}>
                                    <img src={brand} alt="" />
                                </a>
                              ))}
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    )
  }
}
