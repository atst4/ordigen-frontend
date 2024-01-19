import { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default class RoadMap extends Component {
  render() {
    const maps = [
      {
        id:1,
        title:`Launch $ODGN Token`,
        des:'Stealth token launch fuels development, social media ignites community, locked liquidity and secure foundations build trust.'
      },
      {
        id:2,
        title:`Unleashing Cross-Chain Swaps`,
        des:'Seamless EVM-powered BRC-20 swaps on our intuitive platform, tapping into major marketplaces for optimal liquidity.'
      },
      {
        id:3,
        title:`Minting the Future`,
        des:'Democratize token creation with direct minting tools, track the dynamic BRC-20 landscape with our mint tracker dashboard.'
      },
      {
        id:4,
        title:`Building the Ecosystem`,
        des:'Create a thriving BRC-20 marketplace, empower users with innovative tools, community governance shapes the future, explore interoperability for boundless DeFi.'
      },
    ];
    return (
      <div className="road">
        <Container>
          <Row className='justify-content-center'>
            <Col xs={12}>
              <div className="section-title">
                <h2>Roadmap</h2>
              </div>
            </Col>
            <Col xs={12} lg={10}>
              {maps.map((item) => (                
                <div className='road_item' key={item.id}>
                  <div className="road_icon rounded-pill d-flex align-items-center justify-content-center text-white">
                      0{item.id}
                  </div>
                  <div className="road_inner">
                    <div className="road_inner_wrap">
                      <h4 className='text-white mb-4'>{item.title}</h4>
                      <p className='mb-0'>{item.des}</p>
                    </div>
                  </div>
                </div>              
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
