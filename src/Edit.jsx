import React from 'react';
import { useState } from 'react';
import Songs from './Songdata';
import './script1';




//  function al(inp){


//     // console.log(inp)
//       console.log(inp[0])


// }
// function handleCLick()
// {
//   alert("handled")
// }
// Songs.map(function(val,i)
// {
// {console.log("Editted")}


export default function Edit() 
{
      const [rangeval, setRangeval] = useState(0);
      const [sec1,setSec1]=useState(0);
      const [sec2,setSec2]=useState(0);
      const [min,setMin]=useState(0);
      const [totalMin,setTotalMin]=useState(0);
      const [remainSec,setRemainSec]=useState(0);


      function ohkdone(event)
       {
            
            console.log(event.target.id)
            Songs[(event.target.id)].refs.play();
            console.log(Songs[(event.target.id)].refs.duration);
            const total=parseInt((Songs[(event.target.id)].refs.duration)/60);
            setTotalMin(total);
            const remain_sec=parseInt((Songs[(event.target.id)].refs.duration)%60);
            setRemainSec(remain_sec)
            setInterval(() => {
      
            
                  
                  const a=parseInt(Songs[(event.target.id)].refs.currentTime);
                 const b=a%60;
                 const c=a/60;
                  const x=b/10;
                  const y=b%10;
                  setSec1(y);
                  setSec2(parseInt(x));
                  setMin(parseInt(c))

                 const progress=parseFloat((Songs[(event.target.id)].refs.currentTime/Songs[(event.target.id)].refs.duration)*100);
                 console.log(progress)
                  setRangeval(progress*100);

                  setTimeout(() => {
                        progress=0;
                  }, (Songs[(event.target.id)].refs.duration));
            
            }, 1000);
            
            // function handleProgressbarChange(e)
            // {
            //       console.log("PROGRESS")
            //       console.log(e);
            //       Songs[(event.target.id)].refs.currentTime=e.target.value;
            // }
                  

      }




            const results = [];
            Songs.forEach((song, index) => {

                  results.push
                        (
                              <div className='main-song-card' id={index} key={index} >
                                    <div className='song-item' id={index} onClick={ohkdone.bind(index)} >
                                          <img id={index} className='cover' src={song.cover} alt='404'  />
                                          <div className='song-name' >{song.name}</div>
                                          <div className='artist-name'>{song.artist}</div>
                                          {/* <img className='icon' src='https://i.gifer.com/origin/55/554818561cbf36d813ef2010cc9d66cc_w200.webp' /> */}
                                    </div>
                              </div>
                        )
            });

            return (

                  <>
                  <div id="main-song-box">
                  {results}  
                  </div>





                  <div id='main-player' >
                <div>
                    <input id='range' type={'range'} min="0" max="10000" value={rangeval} step="1.4.4"
                       
                        // onChange={handleProgressbarChange}
                    />
                </div>
                <div id='songbar' >
                    <span id='current-time'>{min}:{sec2}{sec1}</span>
                    <div >
                        <img id='cover' src='https://media.gettyimages.com/photos/singer-jubin-nautiyal-during-the-annual-fest-of-jessus-and-mary-on-picture-id1202478936?s=612x612' />
                    </div>
                    <div id='song-info'>
                        <div id='songname'>Ashiyana</div>
                        <div id='artist'>Jubin Nautyal</div>
                    </div>
                    <div id='controls'>
                        <img className='control-button'/>
                        <img className='control-button'/>
                        <img id='playButton' className='control-button' src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtMzc2IDE4My42MWMtMTA2LjU1IDAtMTkyLjM5IDg1LjgzNi0xOTIuMzkgMTkyLjM5czg1LjgzNiAxOTIuMzkgMTkyLjM5IDE5Mi4zOSAxOTIuMzktODUuODM2IDE5Mi4zOS0xOTIuMzljMC4wMDM5MDYtMTA2LjU1LTg1LjgzMi0xOTIuMzktMTkyLjM5LTE5Mi4zOXptNjguMDc4IDE5OS43OS03NS40NzcgNjMuNjM3Yy04Ljg3ODkgNy4zOTg0LTIyLjE5OSAxLjQ4MDUtMjIuMTk5LTcuMzk4NHYtMTI3LjI3YzAtOC44Nzg5IDEzLjMyLTE0LjgwMSAyMi4xOTktNy4zOTg0bDc1LjQ3NyA2My42MzdjNC40NDE0IDIuOTYwOSA0LjQ0MTQgOC44Nzg5IDEuNDgwNSAxMy4zMiAwLTAuMDAzOTA2IDAgMS40NzY2LTEuNDgwNSAxLjQ3NjZ6Ii8+Cjwvc3ZnPgo='/>
                        <img className='control-button'/>
                        <img className='control-button'/>
                    </div>
                
                    <img id='more-options-in-songbar' src='https://static.thenounproject.com/png/2916771-200.png' height={50} width={50} />
                    <span id='total-time'>{totalMin}:{remainSec}</span>
                </div>
            </div>

                  </>
            )
}

