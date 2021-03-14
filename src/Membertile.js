import React from 'react'
import './Membertile.css'
import { Link } from 'react-router-dom';

function Membertile({ name, image, stack }) {
    return (
        <Link to='memberdetail'>
        <div className='member' >
            <div className='Profile'>
                <div>
                <img className="image" src={image} />
                <div className="memberInfo" >
                    <p> {name} </p>
                </div>
                </div>
                <div>
                    <p className='memberstack' >
                        <strong > {stack} </strong>
                    </p>
                </div>
            </div>

        </div >
        </Link>
    )
}

export default Membertile