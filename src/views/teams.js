import React from 'react';
import { teamslist } from './teamsdata';
import { NavComponent } from '../components';
import teamsimg1 from '../assets/images/team1.jpeg'
function TeamsPage(){
return (
<>
<NavComponent page='teams'/>
<div className="teamspage">


    <div className="banner">
        <div className="left">
            <div className="header-text">
                <h1>Tarleton State University <b> Rocket Team '23</b></h1>
            </div>
        </div>
        
       
    </div>
    <div className="teams-body">
    <div className="intro-text">
    <h4>Ours Teams</h4>
    <span>
    <label className='active' htmlFor="">All</label>
    {teamslist.map(teamsname=>{
    
    return(
    <label htmlFor="">{teamsname}</label>
    
    )
    })}
    </span>
    </div>
    
    </div>
    
</div>
</>
)

}

export default TeamsPage