import React from 'react';

export default function History() {

const goods=()=>{
    console.log("good");
}


    return (

        <>

            <div className='main' >
                <div className='card' onClick={goods}>
                    <img src='https://img.republicworld.com/republic-prod/personality/ldpi/15869447545e96daf2962d8.jpeg' className='card-cover' alt='404 ERROR'/>
                    <h3 className='card-name'>BOSS</h3>
                    <span className='card-artist'>Jass Manak</span>
                </div>
            </div>
        </>

    );
}