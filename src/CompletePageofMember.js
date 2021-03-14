import React from 'react';
import './CompletePageofMember.css';
import Sidebar from './Sidebar';
import Tiledetail from './Tiledetail';


function CompletePageofMember() {
    return (
        <div className='detailedview'>
            <div className="page">
                <Sidebar className='sidebar'/>
                <div>
                    <Tiledetail
                    image='https://avatars.githubusercontent.com/u/73348574?s=460&u=b53b92d1b2e3f3a270fc301ee11d3a5e963910d2&v=4'
                    name='Pranavdhar'
                    expertise="I’m currently working as a member at amfoss.
                    and I’m currently learning Coding and Web Development.
                    Studying Computer Science Engineering at Amrita Vishwa Vidyapeetham.
                    Ask me about computers."
                    linkofstat="https://github-readme-stats.vercel.app/api?username=iampranavdhar&theme=radical&show_icons=true"
                    linkofusedlang="https://github-readme-stats.vercel.app/api/top-langs/?username=iampranavdhar&theme=radical&layout=compact"/>
                </div>
            </div>
        </div>
    )
}

export default CompletePageofMember