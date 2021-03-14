import React from 'react';
import './Tiledetail.css';

function Tiledetail({ name, image,expertise,linkofusedlang,linkofstat}) {
    return (
        <div className='tiledetail'>
            <div className="memberInfoContainer">
                <div className="rightContainer">
                    <div className='basic'>
                        <img className='imageInfo' src={image}/>
                        <p className='label'>Name: </p>
                        <p className='text'>{name}</p>
                    </div>
                    <div className='details'>
                        <p className='label'>Expertise:</p>
                        <p className='text'>
                            {expertise}</p>
                    </div>
                    <div className='langUsed'>
                        <img height="180em" src={linkofusedlang} />  
                        <img height="180em" src={linkofstat} /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tiledetail