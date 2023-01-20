import React from 'react';
import { NavComponent } from '../components';
import teams1 from '../assets/images/team11.jpeg'
import teams2 from '../assets/images/team22.jpeg'
function AboutPage(){
return (

<>
<NavComponent page="about" />
<div className="about-page">
<div className="banner">
 <div className="banner-text">
    <div className="left">
    <label htmlFor="">Tarleton</label>
    <span>Rocket Team</span>
    </div>

    <div className="right">
    </div>
 </div>
 <div className="banner-imgs">
    <img src={teams1} className="one" alt="" />
    <img src={teams2} className="two"alt="" />
 </div>

</div>
<div className="about-text">
<div className="left1">
    <span>About US</span>
    <b><i class='bx bx-down-arrow-alt'></i></b>
</div>
<div className="right">
<p className='one'>The Tarleton Rocket Team is a student-run organization at Tarleton State University in Texas. The team designs, builds, and launches high-powered rockets for competitions and research projects.</p>
 <p className='two'> The team is composed of students from a variety of majors, including engineering, physics, and computer science. The team has a strong emphasis on hands-on learning and real-world experience, and members are actively involved in every aspect of the rocket design and launch process.</p>

</div>
</div>
</div>
</>
)
}

export default AboutPage;