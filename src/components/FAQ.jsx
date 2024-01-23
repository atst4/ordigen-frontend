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
        des: `Currently, you can use various EVM-based tokens like ETH, USDC, and more to purchase BRC-20 tokens through OrdiGen. We plan to expand the supported tokens in the future based on user demand and market dynamics.`
      },
      {
        id:3,
        title: `Which tokens can I purchase through OrdiGen?`,
        des: `The beauty of OrdiGen lies in its vast BRC-20 market reach. We tap into liquidity across multiple DEXs, allowing you to seamlessly purchase almost any BRC-20 token directly with your existing EVM-based wallet. Forget scouring individual DEXs or worrying about missing out on hidden gems. OrdiGen acts as your universal gateway to the entire BRC-20 space, granting you access to a diverse range of tokens with just a few clicks.`
      },
      {
        id:4,
        title: `Is my wallet compromised by using OrdiGen?`,
        des:`No, OrdiGen operates as a non-custodial platform, meaning it never holds your private keys or directly controls your funds. You remain in complete control of your wallet and assets throughout the entire trading process.`
      },
      {
        id:5,
        title: `Where does OrdiGen source its liquidity?`,
        des: `OrdiGen acts as a decentralized exchange (DEX) aggregator for the BRC-20 ecosystem. This means we scan and consolidate liquidity pools across various BRC-20 DEXs, including larger markets like Unisat, to find the best prices and execution for your trade. We aim to continuously expand our network of liquidity sources to offer users the deepest and most efficient trading experience.`
      },
      {
        id:6,
        title: `What are the fees associated with using OrdiGen?`,
        des: `OrdiGen charges a small fee on each trade to cover network costs and platform maintenance. The exact fee varies depending on the complexity of your order and the chosen liquidity source. We strive to keep our fees competitive and transparent, ensuring value for both users and the platform's long-term sustainability.`
      },
    ];
    const handleClick = ((e) => {
      let targetElement = e.target.closest('.accordion-item');
      let activeElement = document.querySelectorAll('.accordion-item');
      activeElement.forEach((e) => {
        e.classList.remove('bordered')
      })
      targetElement.classList.toggle('bordered');
      
    });
    return (
      <div className="section-padding faq pb-0">
        <Container>
          <Row className='justify-content-center'>
            <Col xs={12} lg={10}>
              <div className="section-title text-center mb-5">
                <h2 className='mb-0 pb-md-3'>Frequently Asked Questions</h2>
              </div>
              <Accordion defaultActiveKey={faq.length != 0 ? 1 : 0}>
                {faq.map((item, index)=> (                  
                  <Accordion.Item eventKey={item.id} key={index} data-count={`${item.length<9?'':0}${item.id}`} className={`${index == 0 ? 'bordered' : ''}`}>
                    <div className="accordion-wrap">
                      <div className="accordion-border">                            
                        <Accordion.Header onClick={handleClick}>
                          {item.title}
                        </Accordion.Header>
                        <Accordion.Body> {item.des} </Accordion.Body>                    
                      </div>
                    </div>
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
