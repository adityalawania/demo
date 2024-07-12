import React,{useState} from 'react';
import './index.css';


export default function Navbar() {

  
  const [bg,setBg]=useState('black')
  
  function good(){

 
    console.log("hitted")
    // let newbg='green';
    // setBg(newbg);
    // alert('jnijndfs')
  }
  return (
    <div style={{backgroundColor:bg}} onClick={good}  id='nav'>
        <ol className='navbar'>
            <a><li className='nav-items'>Home</li></a>
            <a><li className='nav-items'>Playlist</li></a>
            <a><li className='nav-items'>Contact</li></a>
            <a><li className='nav-items'>Services</li></a> 
        </ol>
        <input id='searchbar' typeof='text' className='search' placeholder='Search a song...'  />
        
        {/* <img className='search' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT--W18wy6a2ieVL6AoUwTx7OwzuY1-ncqVeA&usqp=CAU'/> */}
    </div>
  );
}

