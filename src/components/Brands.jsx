import { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img_1 from '../assets/img/brands/1.svg';
import img_2 from '../assets/img/brands/2.svg';
import img_3 from '../assets/img/brands/3.svg';
import img_4 from '../assets/img/brands/4.svg';
import img_5 from '../assets/img/brands/5.svg';
import img_6 from '../assets/img/brands/6.svg';

export default class Brands extends Component {
  render() {
    let brands = [img_1,img_2,img_3,img_4,img_5,img_6];
    return (
      <div className="brand">
        <Container>
            <Row>
                <Col xs={12}>
                    <div className="brand-border">
                        <div className="brand-inner d-flex align-items-center pe-lg-0">
                            <p>Supported Chains :</p>
                            <div className="brand-logos d-grid align-items-center flex-grow-1">
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
