import React from 'react';
import { NavComponent } from '../components';
// import teams1 from '../assets/images/team11.jpeg'
// import teams2 from '../assets/images/team22.jpeg'
import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/2.JPG'
import img3 from '../assets/images/3.JPG'
import img4 from '../assets/images/center.jpeg'
import img5 from '../assets/images/5.jpeg'
import img6 from '../assets/images/6.jpeg'
import img7 from '../assets/images/7.jpeg'
import oldlogo from '../assets/images/oldlogo.png'
function AboutPage(){
return (

<>

<NavComponent page="about" />
<div className="about-page">
   <div className="banner-box">


<div className="header">
<h1>Tarleton State University <b> R<img  src={oldlogo} alt="" />cket Team USLI '23</b></h1>
</div>
<div className="banner">
   <div className="drow">
   <img src={img1} alt="" className='sz1' />
   </div>

   <div className="dcol">
   <img src={img2} alt=""  className='sz2'/>
   <img src={img3} alt=""  className='sz1' />
   </div>
<div className="drow">
<img src={img4} alt=""  className='sz3'/>
</div>

   <div className="dcol">
   <img src={img5} alt=""  className='sz1'/>
   <img src={img6} alt="" className='sz2' />
   </div>
<div className="drow">
<img src={img7} alt="" className='sz1' />
</div>

</div>
</div>
<div className="about-content">
   <h1>About Us</h1>
   <div className="about-text">
   <p>We are a group of ambitious and innovative students from Tarleton State University who share a passion for rocketry and space exploration. Our team is dedicated to designing, building, and launching high-powered rockets that compete in the NASA University Student Launch Initiative (USLI).
</p><p>
The USLI competition is a rigorous and challenging competition that tasks teams with designing and building a rocket that meets specific requirements, including altitude and payload capacity. The competition is an opportunity for students to apply their skills and knowledge in engineering, science, and mathematics to solve real-world problems.
</p><p>
Our team is composed of students from various academic backgrounds, including engineering, physics, mathematics, and computer science. This diversity in academic disciplines allows us to approach rocketry from different perspectives and develop creative and innovative solutions to design challenges.
</p><p>
As a team, we work together to build our rockets from scratch, including designing the airframe, propulsion system, and avionics. We also conduct extensive testing and analysis to ensure the safety and success of our launches.
</p><p>
In addition to designing and building rockets, we are also committed to outreach and education. We regularly visit schools and community organizations to promote STEM education and inspire the next generation of scientists and engineers.
</p><p>
We are excited to represent Tarleton State University in the USLI competition and showcase our skills and expertise</p>
   </div>

</div>
{/* <div className="banner">
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
</div> */}
</div>

</>
)
}

export default AboutPage;