import React from 'react';
import './index.css';
import Songs from './Songdata';

function play() {
    alert("played")

}


let list = [];
Songs.forEach((element, index) => {
    list.push
        (

    )
});



export default function Songlist(props) {


    //    const [col,setcol]=UseState('black')
    // const play=()=>{

    //     alert("hy");

    // }

    function al()
    {
       console.log("hy")
    }

    return (
        <>
         <div>
          <div className='main' onClick={al}>
                <div key={props.keys} className='song-item'>
                    <div className='song-name' >{props.sname}</div>
                    <div className='artist-name'>{props.artist}</div>
                    <img className='cover' src={props.cover} alt='404' />
                     <img className='icon' src='https://i.gifer.com/origin/55/554818561cbf36d813ef2010cc9d66cc_w200.webp' />
                </div>
          </div>
          </div>
        </>
    );

};

