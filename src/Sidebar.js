import React  from 'react';
import './Sidebar.css';
import Membertile from './Membertile';

function Sidebar() {
    return (
        <div className="leftContainer">
            <p>Members:</p>
                    <Membertile
                    name='Pranavdhar'
                    image='https://avatars.githubusercontent.com/u/73348574?s=460&u=b53b92d1b2e3f3a270fc301ee11d3a5e963910d2&v=4'
                    stack='Web Development'
                    />
                    <Membertile
                    name='Abhijit Ramesh'
                    image="https://avatars.githubusercontent.com/u/43090559?s=460&u=92010bab6a64db41f1f20581e9f37dd93d90df31&v=4"
                    stack='Deep Learning|Android'/>

                    <Membertile
                    name='Akhil KG'
                    image='https://avatars.githubusercontent.com/u/32199592?s=460&u=446374b0608c911e16a0dfbe852abecefa67e169&v=4'
                    stack='Season of KDE|GSoC'/>

                    <Membertile
                    name='Akshay V'
                    image='https://avatars.githubusercontent.com/u/50765423?s=460&u=d3a8f0136c39ef9266f913bd298ac0fc2aec89f4&v=4'
                    stack='Web Backend Development'
                    />

                    <Membertile
                    name='K N Ananthanandanan'
                    image='https://avatars.githubusercontent.com/u/53400471?s=460&u=8f499ad65835ca6c6c8389a31ad4286f4d90ba97&v=4'
                    stack='Graphql|Django'/>

                    <Membertile
                    name='Ashwin R'
                    image='https://avatars.githubusercontent.com/u/20596763?s=460&u=f3a590517cfd7e0a7df78ca194f7371310c567ed&v=4'
                    stack='Linux|Flutter|Kotlin'/>
        </div>
    )
}

export default Sidebar
