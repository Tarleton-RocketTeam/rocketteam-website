import React,{useState} from 'react';
import { teamslist,leadershipteam,socialteam,electricalteam,mechanicalteam,safetyteam,structuralteam,payloadteam,recoveryteam,avionicsteam, stemteam } from './teamsdata';
import { NavComponent } from '../components';
import teamsimg1 from '../assets/images/team1.jpeg'
import jgreen from '../assets/images/people/jgreen.jpeg'
import oldlogo from '../assets/images/oldlogo.png'
import { Transition } from '@headlessui/react'
import { useInView } from 'react-intersection-observer';

const placholderimg = 'https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png'

function TeamsTag(props){
const [active,setActive]=useState(false)
const [n,setn]=useState(props.n)
function doaction(){
    if(props.m==props.n){
    setn(90)
   
    props.actionall() }
    else{
        setActive(!active)
        props.action()
    }
    
}
return(

<>
<label onClick={()=>doaction()} className={props.m==n&&'active'} htmlFor="">{props.team}</label>

</>
)
}

function TeamsPage()
{ 

let allteamsdata=[

{name:'Leadership Team',data:leadershipteam},
{name:'Electrical Team',data:electricalteam},
{name:'Payload Team',data:payloadteam},
{name:'Mechanical Team',data:mechanicalteam},
{name:'Safety Team',data:safetyteam},
{name:'Structural Team',data:structuralteam},
{name:'Recovery Team',data:recoveryteam},
{name:'Avionics Team',data:avionicsteam},
{name:'Social Media Team',data:socialteam},
{name:'Stem Team',data:stemteam},
]
const [teamadata,setteamadata]=React.useState(allteamsdata)
const [activekek,setactivekek]=React.useState(90)
const alterdata = (team,kek) =>{
setactivekek(kek)
console.log(team)
if(team=='All'){


setteamadata(allteamsdata)}
else{
    let sfs = null
    for(var i=0;i<allteamsdata.length;i++){
        if(allteamsdata[i]['name']==team){
           sfs = allteamsdata[i]['data']
        }
    }
    setteamadata([{name:team,data:sfs}])}
}
return (
<>
<NavComponent page='teams'/>
<div className="teamspage">


    <div className="banner">
        <div className="left">
            <div className="header-text">
                <h1>Tarleton State University <b> Rocket Team USLI '23 <img  src={oldlogo} alt="" /></b></h1>
            </div>
        </div>
        
       
    </div>
    <div className="teams-body">
    <div className="intro-text">
    <h4>Ours Teams</h4>
    <span>
    <label onClick={()=>alterdata('All')} className='active' htmlFor="">All</label>
    {teamslist.map((teamsname,kek)=>{
    
    return(
    <TeamsTag  actionall={()=>alterdata('All',kek)} action={()=>alterdata(teamsname,kek)} m={activekek} n={kek} team={teamsname}/>
    
    )
    })}
    </span>
    </div>
    
    </div>
    <div className="teams-section">
        <div className="teamslist">
        {teamadata.map((team,key)=>{
        return (
        
        <>
        <div key={key}className="team-box">
                <div className="team-title">
                    <h2>{team.name}</h2>
                </div>
                <div className="tsu-teams">
                
                {team.data.map((teamdata,index)=>{
                
          
                return (
                <>
                 <div key={index}className={((index)%2==0)?"person":"person rev"}>
                        <div className="person-img">
                            <img src={teamdata.img!=null?teamdata.img:placholderimg} alt="" />
                        </div>
                        <div className="person-info">
                            {teamdata.name!=null && <h3>{teamdata.name}</h3>}
                            {teamdata.position!=null &&<span>{teamdata.position}</span>}
                           {teamdata.email!=null && <a href={"mailto:"+teamdata.email}>{teamdata.email}</a>}
                            {teamdata.bio!=null && <p>{teamdata.bio}</p>}
                        
                        </div>
                    </div>
                </>
                )
               
                })}
                   
                  
                </div>
            </div>
        
        </>
        )
        
        })}
        
            
        </div>
    </div>
    
    
    
</div>
</>
)

}

export default TeamsPage