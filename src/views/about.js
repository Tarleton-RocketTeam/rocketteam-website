import React from 'react';
import { NavComponent } from '../components';
import oldlogo from '../assets/images/oldlogo.png'
function AboutPage(){
return (

<>
<NavComponent page="about" />
<div className="about-page">
<div className="banner">
<h1>Ab <img src={oldlogo} alt="" /> ut Us. </h1>

</div>

</div>
</>
)
}

export default AboutPage;