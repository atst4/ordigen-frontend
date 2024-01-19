import { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';

export default class FAQ extends Component {
  render() {
    const faq = [
      {
        id:1,
        title: `What is BRC-20 ?`,
        des: `BRC-20 is a standard for creating smart contracts and tokens on the Bitcoin blockchain. Similar to ERC-20 on Ethereum, it allows developers to build various DeFi applications and digital assets on Bitcoin, opening up the network to the vibrant world of decentralized finance.`
      },
      {
        id:2,
        title: `Which tokens can I use to purchase BRC-20 tokens on OrdiGen?`,
        des: `BRC-20 is a standard for creating smart contracts and tokens on the Bitcoin blockchain. Similar to ERC-20 on Ethereum, it allows developers to build various DeFi applications and digital assets on Bitcoin, opening up the network to the vibrant world of decentralized finance.`
      },
      {
        id:3,
        title: `Which tokens can I purchase through OrdiGen?`,
        des: `BRC-20 is a standard for creating smart contracts and tokens on the Bitcoin blockchain. Similar to ERC-20 on Ethereum, it allows developers to build various DeFi applications and digital assets on Bitcoin, opening up the network to the vibrant world of decentralized finance.`
      },
      {
        id:4,
        title: `Is my wallet compromised by using OrdiGen?`,
        des: `BRC-20 is a standard for creating smart contracts and tokens on the Bitcoin blockchain. Similar to ERC-20 on Ethereum, it allows developers to build various DeFi applications and digital assets on Bitcoin, opening up the network to the vibrant world of decentralized finance.`
      },
      {
        id:5,
        title: `Where does OrdiGen source its liquidity?`,
        des: `BRC-20 is a standard for creating smart contracts and tokens on the Bitcoin blockchain. Similar to ERC-20 on Ethereum, it allows developers to build various DeFi applications and digital assets on Bitcoin, opening up the network to the vibrant world of decentralized finance.`
      },
      {
        id:6,
        title: `What are the fees associated with using OrdiGen?`,
        des: `BRC-20 is a standard for creating smart contracts and tokens on the Bitcoin blockchain. Similar to ERC-20 on Ethereum, it allows developers to build various DeFi applications and digital assets on Bitcoin, opening up the network to the vibrant world of decentralized finance.`
      },
    ];
    return (
      <div className="section-padding faq">
        <Container>
          <Row className='justify-content-center'>
            <Col xs={12} lg={10}>
              <div className="section-title text-center mb-5">
                <h2 className='mb-0 pb-3'>Frequently Asked Questions</h2>
              </div>
              <Accordion defaultActiveKey="0">
                {faq.map((item, index)=> (                  
                  <Accordion.Item eventKey={index} key={index}>
                    <Accordion.Header>
                      <span className="count">{item.id}</span>
                      <span className="title">{item.title}</span>
                    </Accordion.Header>
                    <Accordion.Body> {item.des} </Accordion.Body>
                  </Accordion.Item>
              ))}
              </Accordion>              
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
