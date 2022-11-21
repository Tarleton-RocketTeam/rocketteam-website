import React from 'react';
import oldlogo from '../assets/images/oldlogo.png'
function NavComponent(props){

return(

<>

    <nav>
    
        <div className="logo">
    <a href="">
    <img src={oldlogo} alt="" />
    </a>
        </div>
            <div className="nav-items">
                <a  className={props.page=='landing'&&'active'} href="/">
                    <label htmlFor="">Home</label>
                    <span></span>
                </a>
                <a className={props.page=='about'&&'active'} href="/about">
                    <label htmlFor="">About</label>
                    <span></span>
                </a>
              
                <a  className={props.page=='teams'&&'active'} href="/teams">
                    <label  htmlFor="">
                    
                    <label htmlFor="">Our Team</label>
                    
                    {/* <div className="teams-box">
                    <a href="">- Leadership Team</a>
                    <a href="">- Leadership Team</a>
                    </div> */}
                    </label>
                    <span></span>
                </a>
                <a className={props.page=='media'&&'active'} href="">
                    <label htmlFor="">Media</label>
                    <span></span>
                </a>
                <a href="">
                    <label htmlFor="">Reports</label>
                    <span></span>
                </a>
                <a href="">
                    <label htmlFor="">Sponsors</label>
                    <span></span>
                </a>
                
                <a href="">
                    <label htmlFor="">Contact</label>
                    <span></span>
                </a>
                
        
            </div>
            <div className="join-btn">
            <a href="">Join</a>
            </div>
    
    </nav>
</>
)
}

export default NavComponent