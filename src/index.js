import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MusicPlayer from './musicplayer';
import Navbar from './navbar';
import Songlist from './songlist';
import Songs from './Songdata';
import History from './history';
import Info from './info';
import Edit from './Edit';
import listOfSongs from './mapping';

function click()
{
    alert('card hai bhai')
}

function songlist(val,i)
{
  return <Songlist
      keys={i}
      sname={val.name}
      artist={val.artist}
      cover={val.cover}
      />
}

// const songlist=(val,i)=> {
//   // var x = <img src={val.cover} height={40} width={40} />

//   // const play=(id)=>{
//   //  console.log(id);
//   // };
//   // console.log(i);
//   // var keys=val.id;
//   // console.log(keys);


//   return (
//     <>
//        <Songlist
//         // key={val.id}
//         // name={val.name}
//         // artist={val.artist}
//         // cover={val.cover}
//       />
//     </>

//   );
// }


// function oknew(value,i)
// {
//   function al()
//   {
//     alert('hy')
//     // console.log(name)
//   }
//   return(
//     <Edit
 
// sname={value.name}
// singer={value.artist}
// cover={value.cover}
// {...onclick(onclick=()=>al)}


// />

//   )

// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
    <Navbar  />
      {/* <Songlist
    // iden={Songs[0].id}
    name={Songs[0].name}
    artist={Songs[0].artist}
    cover={Songs[0].cover}
    
/> */}
    
    <Edit/>
    
 


     {/* <div id='card-conatainer'>
         <History/>
         <History/>
         <History/>
         <History/>

    </div> */}



    {/* <MusicPlayer /> */}


    


    {/* <Info/> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

