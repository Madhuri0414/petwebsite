import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './Style.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
// import { DownOutlined} from '@ant-design/icons';
// import {Button,Dropdown,Menu,message} from "antd";


function Nav() {
//   const handleMenuClick=(e)=> {
//     message.info('Click on menu item.');
//     console.log('click', e);
  
// }

  // const menu = (
  //   <Menu className='btnsdrop' onClick={this.handleMenuClick}>
  //     <Menu.Item>
  //    Elements
  //     </Menu.Item>
  //     <Menu.Item>
  //       Single Blog
  //     </Menu.Item>
      
  //   </Menu>
  // )
  return (
    <Router>
      <div>
        <nav className="styling">
                 <Link to='/Home'>Home</Link>
                 <Link to='/About'>About</Link>
                 <Link to='./Service'> Service</Link>
                 <Link to='./Gallery'> Gallery</Link>
                 {/* <Link to='./Pages'> Pages</Link> */}

                <button className='btns'>Pages</button>
                  {/* <Dropdown overlay={menu}>
                     <Button  placement="bottomCenter">
                                   Pages <DownOutlined/>
                     </Button>
                  </Dropdown> */}

                 <Link to='./Blog'> Blog</Link>
                 <Link to='./Contact'> Contact</Link>
        </nav>
        <switch>
<Route path='/Home' exact component={Home}></Route>
<Route path='/About' component={About}></Route>
<Route path='/Contact' component={Contact}></Route>
        </switch>
        </div>
    </Router>
    
  );
                }

export default Nav;
