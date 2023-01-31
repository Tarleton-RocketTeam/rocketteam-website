import jgreen from '../assets/images/people/jgreen.jpeg'
import hydie from '../assets/images/people/hydie.jpeg';
import teddyoweh from '../assets/images/people/teddyoweh.jpeg';
import domm from '../assets/images/people/domm.jpeg';
import btrotter from '../assets/images/people/btrotter.jpeg';
import ctrotter from '../assets/images/people/ctrotter.jpeg';
import jayce from '../assets/images/people/jayce.jpeg';
import jrousse from '../assets/images/people/jrousse.jpeg';
import noljn from '../assets/images/people/noljn.jpeg';
import scampbell from '../assets/images/people/scampbell.jpeg';
import marksimg from '../assets/images/people/marks.jpeg';
import weston from '../assets/images/people/weston.jpeg';
import benson from '../assets/images/people/benson.jpeg'
import marian from '../assets/images/people/marian.jpeg'
import kade from '../assets/images/people/kade.jpeg'
const teamslist = [
    'Leadership Team',
    'Mechanical Team',
    'Electrical Team',
    'Stem Team',
    'Social Media Team',
    'Recovery Team',
    'Structural Team',
    'Avionics Team',
    'Payload Team'


]
const leadershipteam = [{
        name: 'Jay Green',
        position: 'Chief Engineer',
        img: jgreen,
        email: 'jaygreen@go.tarleton.edu',
        bio: null,

    },
    {
        name: 'Hyedi Viehmann',
        position: 'Faculty Advisor',
        img: hydie,
        email: 'Hyedi@go.tarleton.edu',
        bio: null,

    },
    {
        name: 'Domanic Devivo',
        position: 'Electrical Team Lead',
        img: domm,
        email: 'domanic@go.tarleton.edu',
        bio: null,



    },
    {

        name: 'Ben Trotter',
        position: 'Mechanical Team Lead',
        img: btrotter,
        email: 'ben.trotter@go.tarleton.edu',
        bio: null,


    },
    {

        name: 'Christopher Trotter',
        position: 'Design and Structural Team Lead',
        img: ctrotter,
        email: 'christopher.trotter@go.tarleton.edu',
        bio: 'Overview of the design of the rocket and construction processes ',


    },
    {
        name: 'Samuel Campbell',
        position: 'Safty Team Lead',
        img: scampbell,
        email: 'samuel.campbell01@go.tarleton.edu ',
        bio: null,

    },
    {
        name: 'Jayce Thedford',
        position: 'Payload Team Lead',
        img: jayce,
        email: 'jayce@go.tarleton.edu',
        bio: null,

    },
    {
        name: "Teddy Oweh",
        position: "Social Media & Public Relations Lead, Web Development Lead",
        img: teddyoweh,
        email: 'ifechukwudeni.oweh@go.tarleton.edu',
        bio: 'Lead the growth and development of the Tarleton Rocket Team Web Development and Social Media Presence.  ',


    },
    {
        name: 'Jacob Rousse',
        position: 'Recovery Team Lead',
        img: jrousse,
        email: 'jacob.rousse@go.tarleton.edu',
        bio: 'Recovery Lead',
    }, {
        name: 'Nolan Johnson',
        position: 'Avionics Team Lead',
        img: noljn,
        email: 'nolan.j@go.tarleton.edu',
        bio: null,

    }




]

const structuralteam = [{

    name: 'Chris Trotter',
    position: 'Design and Structural Team Lead',
    img: ctrotter,
    email: 'christopher.trotter@go.tarleton.edu',
    bio: 'Overview of the design of the rocket and construction processes.',


}, ]
const mechanicalteam = [

    {

        name: 'Benjamin Trotter',
        position: 'Mechanical Team Lead',
        img: btrotter,
        email: 'benjamin.trotter@go.tarleton.edu',
        bio: 'Lead Mechanical Engineer',


    }

]

const socialteam = [{
        name: "Teddy Oweh",
        position: "Social Media & Public Relations Lead, Web Development Lead",
        img: teddyoweh,
        email: 'ifechukwudeni.oweh@go.tarleton.edu',
        bio: 'Lead the growth and development of the Tarleton Rocket Team Web Development and Social Media Presence.',


    },
    {
        name: "Mark Skrabanek",
        position: "Social Media & Public Relations Lead",
        img: marksimg,
        email: 'mark.skrabanek@go.tarleton.edu',
        bio: 'Helped lead the social media team by discussing the best next steps to grow our platforms and by developing our existing website and growing our social media presence across all platforms',


    }, {
        name: "Marian Barrett ",
        position: "Social Media & Public Relations Team, Marketing Lead",
        img: marian,
        email: 'marian@go.tarleton.edu',
        bio: null,


    },{
        name:'Jordan Prigmore',
        position:'Social Media & Public Relations Team',
        img:null,
        email:'jordan.prigmore@go.tarleton.edu',
        bio:'Worked with photography and media posts. engaging with team behind the camera and through fans upon all platforms. '

    }


]
const recoveryteam = [{
    name: 'Jacob Rousse',
    position: 'Recovery Team Lead',
    img: jrousse,
    email: 'jacob.rousse@go.tarleton.edu',
    bio: 'Recovery Lead',
},
{
    name:'Isaac',
    position: 'Recovery Engineer',
    email:'Isaac.bethea@go.tarleton.edu',
    bio:'Assist the lead engineer with designing a manufacturing a recovery system for the rocket',
    img:null

},
{
    name: 'Kade Moore',
    position: 'Recovery Team',
    img: kade,
    email: 'jacoob@go.tarleton.edu',
    bio: null,
}

]
const payloadteam = [{
        name: 'Jayce Thedford',
        position: 'Payload Team Lead',
        img: jayce,
        email: 'jayce@go.tarleton.edu',
        bio: null,

    },
    {
        name: "Teddy Oweh",
        position: "Payload Engineer, Microcontroller and Communication Systems",
        img: teddyoweh,
        email: 'ifechukwudeni.oweh@go.tarleton.edu',
        bio: 'Developed the payload system code involving various image processing functionalilies and communications process with the a signal reciever, assisted with embedding the code unto the microcontroller.',


    },
    {
        name:'Leo Cahill',
        email:'leo.cahill@go.tarleton.edu',
        position:'Payload Engineer, Communication Systems',
        bio:'Worked on the receiver section of the payload system.'
    },
    {
        name: "Ashland Benson",
        position: "Payload Engineer, Deployment Systems",
        img: benson,
        email: 'ashland.benson@go.tarleton.edu',
        bio: null,


    },
    {
        name: "Weston Sublett",
        position: "Payload Engineer",
        img: weston,
        email: 'weston@go.tarleton.edu',
        bio: null,


    }

]
const safetyteam = [

    {
        name: 'Samuel Campbell',
        position: 'Safety and Testing Team Lead',
        img: scampbell,
        email: 'samuel.campbell01@go.tarleton.edu ',
        bio: 'Ensure all safety documents are up to date and everything is compliant with safety regulations. Designs all tests, and either conducts or assists in all testing. Also leads payload fabrication and assists with design and fabrication of all sections',

    },{
        name:'Coel Goen',
        email:'coel.goen@go.tarleton.edu',
        position:'Safety Officer',
        bio:'Second in command of Systems & Testing. Helping maintain documentation and proper safety protocols.',
        img:null
    }

]
const avionicsteam = [

    {
        name: 'Nolan Johnson',
        position: 'Avionics Team Lead',
        img: noljn,
        email: 'nolan.j@go.tarleton.edu',
        bio: null,

    }, {
        name: "Mark Skrabanek",
        position: "Avionics Engineer",
        img: marksimg,
        email: 'mark.skrabanek@go.tarleton.edu',
        bio: null,


    },{
        name:'Isaac Talbot',
        email:'isaac.talbot@go.tarleton.edu',
        position:'Avionics Engineer',
        bio:'Assisted with the brainstorming process.',
        img:null

    }

]

const stemteam = [

    {
        name: 'Nolan Johnson',
        position: 'STEM Team Lead',
        img: noljn,
        email: 'nolan.j@go.tarleton.edu',
        bio: null,
    },
    {
        name:'Stella Kelley',
        email:'',
        position:'STEM Outreach Sponsorship Lead',
        bio:'Assisted in finding sponsorships and products that help the STEM Outreach program. I also help teach STEM to participating members of the STEM OutReach program. '
    }
]
const electricalteam = [

    {
        name: 'Domanic Devivo',
        position: 'Electrical Team Lead',
        img: domm,
        email: 'domanic@go.tarleton.edu',
        bio: null,



    }

]
export { teamslist, leadershipteam, socialteam, electricalteam, mechanicalteam, safetyteam, structuralteam, payloadteam, recoveryteam, avionicsteam, stemteam }