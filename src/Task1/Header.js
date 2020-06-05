import React,{Component} from 'react'
import './header.css'
import 'antd/lib/menu/MenuItem'
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { Input } from 'antd';




import {Menu,message} from "antd";
import {Card,Col,Row} from "antd";
// import { DownOutlined} from '@ant-design/icons';
import Nav from './Nav';


class Header extends Component{
    constructor(props){
        super(props)
      this.state = {
          size: 'large',
        };
            const handleMenuClick=(e)=> {
                message.info('Click on menu item.');
                console.log('click', e);
              
        }
        
        const onChange=(a, b)=> {
          console.log(a, b);
        }
        
      
        // handleSizeChange = e => {
        //   this.setState({ size: e.target.value });
        // };
      
    }
    render(){
      const { Search } = Input;

      const { size } = this.state;

        // const menu = (
        //     <Menu className='btnsdrop' onClick={this.handleMenuClick}>
        //       <Menu.Item>
        //      Elements
        //       </Menu.Item>
        //       <Menu.Item>
        //         Single Blog
        //       </Menu.Item>
              
        //     </Menu>
        //   );

        return(
          <div>
              <header>

              <button className='btn'> BECOME A VOLUNTEER</button><br/><br/>
              <Nav></Nav>
              {/* <nav className='head'>
                  <button className='btns'>Home</button>
                  <button className='btns'>About</button>
                  <button className='btns'>Service</button>
                  <button className='btns'>Gallery</button>
                  {/* <button className='btns'>Pages</button> */}
                  {/* <Dropdown overlay={menu}>
                     <Button  placement="bottomCenter">
                                   Pages <DownOutlined/>
                     </Button>
                  </Dropdown>
                  <button className='btns'>Blog</button>
                  <button className='btns'>Contact</button>
                </nav>
              // </header> */}
</header>

              <section className='backgrnd'>
              <div>
              <img src={require('../Images/dogg.png')}  alt='img' className='dog1'/>
        <h2 className='welcome' >{this.props.message}</h2>
        <h1 className='bestcare'>Give your pet Best Care</h1>
        <button className='services'>Our services</button>
              </div>
              </section>

               {/* page 2 */}
              <section>
                <span><img src={require('../Images/dog2.png')}  alt='img' className='dog2'/>
              <img src={require('../Images/dogicon.png')} alt='imgicon' className='dogicon'/></span>
              
              <p className='para1'>We care your pet As</p>
              <p className='para2'>you care</p>
              <p className='line1'>Working in conjunction with humanitarian aid agencies,we have </p><br/>
               <p className='line2'> supported programmes to help alleviate human suffering through </p><br/>
               <p className='line3'> animal welfare when people might depend on livestock as their only</p> <br/>
                <p className='line4'>source of income or food.</p>
                <button className='About'> ABOUT US </button>
               </section>
                 

                {/* page 3 */}

                  <section className='page3'>
                  <img src={require('../Images/dogicon1.png')} alt='imgicon' className='dogicon1'/> 
                  <p className='para3'>We Provide Best Services</p>
                  <p className='line5'>Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human</p>
                  <p className='line6'>suffering through animal welfare when people might depend.</p>

                  <div>
    <Row gutter={20}>
      <Col span={8}>
        <Card bordered={false}>
        <img src={require('../Images/doggy1.png')} alt='doggy1' className='doggy1'/>
        <h1 className='pet1'>Pet Surgeries</h1>   
        <p>Our free veterinary services are available to <br/>
      pets whose owners are on certain means-<br/>
      tested benefits.</p> 
        </Card>
      </Col>

      <Col span={8}>
        <Card bordered={false}>
        <img src={require('../Images/doggy2.png')} alt='doggy2' className='doggy2'/>    
      <h1 className='pet2'>Pet Adoption</h1>  
      <p>Our free veterinary services are available to <br/>
      pets whose owners are on certain means-<br/>
      tested benefits.</p> 
          </Card>
      </Col>

      <Col span={8}>
        <Card bordered={false}>
        <img src={require('../Images/doggy3.png')} alt='doggy3' className='doggy3'/>  
        <h1 className='pet3'>Pet Care</h1>
        <p>Our free veterinary services are available to <br/>
      pets whose owners are on certain means-<br/>
      tested benefits.</p> 
          </Card>
      </Col>
    </Row>
  </div>
    </section>
      
      {/* page 4 */}

     <section className='page4'>
     <div>
    <Row gutter={14}>
      <Col span={12}>
        <Card bordered={false}>
          <h1 className='para4'>We need your help</h1> 
          <h1 className='para5'>Adopt Us</h1>
          <p className='line7'>Working in conjunction with humanitarian aid agencies, we have </p>
          <p className='line8'>supported programmes alleviate human.</p>
          <div>
    <Row gutter={14}>
      <Col span={9}>
        <Card bordered={false}>
        <img src={require('../Images/page4icon1.png')} alt='page4icon1'/>  
        <h1 className='page4icon1'>590 +</h1>
        <p className='pa1'>Pets Available</p>
        </Card>
      </Col>

      <Col span={6}>
        <Card bordered={false}>
        <img src={require('../Images/page4icon2.png')} alt='page4icon2'/>  
        <h1 className='page4icon2'>300 +</h1>
        <p className='pa2'>Happy Clients</p>
        </Card>
      </Col>
      </Row>
      <button className='btn4'>BROWS NOW</button>
      </div>
          </Card>
      </Col>
      <Col span={4}>
        <Card bordered={false}>
        <img src={require('../Images/page4.png')} alt='page4' className='page4dog'/>    

        </Card>
      </Col>
    </Row>
    
  </div>
  
     </section>

    {/* page 5 */}


<section>
  <div>
  <img src={require('../Images/dog5.jpg')} alt='page5' className='page5dog'/> 
  <div className="site-card">
        <img src={require('../Images/page5dog.png')} alt='doggy3' className='dog5'/>  
        <h1 className='pet5'>"Working in conjunction with humanitarian </h1>
        <h1 className='pet5'>aid agencies we have supported programmes</h1> 
        <h1 className='pet52'>to alleviate"</h1>
        <h3 className='pet53'>- Jon Miller</h3>
        

  </div>   
<Carousel beforeChange={this.onChange} dots={true} className='carousel'>
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
  </Carousel>
  </div>
</section>

     {/* page 6 */}


<section className='sec6'>
<div className=''>
    <Row>
      <Col span={13}>
        <Card bordered={false}>
        <img src={require('../Images/page6.png')} alt='page6' className='page6'/>  
        </Card>

      </Col>
      <Col span={10}>
        <Card bordered={false}>
        <img src={require('../Images/dogicon.png')} alt='icon6' className='icon6'/>  

          <h1 className='para6'>Become a Volunteer <br/> To help them</h1>
              <p className='line61'> A created won't created subdue a every green his set which above firmament earth firmament. 
Seed firmament be likeness fruitful to called waters. Given great said seasons his midst beast.</p>
<div>
<button className='btn6'>READ MORE</button>

  </div>      
    </Card>
      </Col>
    </Row>
  </div>
</section>

        {/* page 7 */}


  <section className='page7'>
          <h1 className='page71'> Subscribe Newsletter</h1>
          <p className='page72'>We strictly follow the State Board’s sanitary and disinfection guidelines.</p>
          <div className='page73'>
          <Search
      placeholder="ENTER YOUR EMAIL"
      enterButton="FREE TRIAL"
      size="large"
      onSearch={value => console.log(value)}
    />
    </div>
    <div className=''>
    <Row gutter={22}>
      <Col span={6}>
        <h1 className='r1'> Menu</h1>
        <p className='r11'>Home</p>
        <p className='r12'>About</p>
        <p className='r13'>Shop</p>
        <p className='r14'>Contact</p>
      </Col>

      <Col span={6}>
        <h1 className='r2'> Contact</h1>
        <p className='r21'>10 983 456 3669</p>
        <p className='r22'>Reserve@Manicure.Com</p>
      </Col>

      <Col span={6}>
      <h1 className='r3'>Address</h1>
      <p className='r31'>700, Green Lane,<br/>
       New York, USA</p>
      <p className='r32'>Get Direction</p>
      </Col>

      <Col span={4}>
      <h1 className='r4'> Opening Hour</h1>
      <p className='r41'>Mon-Fri (9.00-6.00)</p>
      <p className='r42'>Sat-Sun (Closed)</p>
      </Col>

    </Row>
  </div>
  <footer>



<img src={require('../Images/footerlogo.png')} alt='footerlogo' className='footerlogo'/>  
<hr/>

    <p className='copyright'>Copyright ©2020 All rights reserved | This template is made with  by Colorlib</p>
    </footer>
  </section>
  
    

          </div>  
        )
    }
}
export default Header