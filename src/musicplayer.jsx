import React, { useState } from 'react';



export default function MusicPlayer(props) {
    const [rangeval, setRangeval] = useState(0);

    
    // function done()
    //  {
    //     console.log("jii")  
    // }

    // console.log(done);

    return (
        <>
            <div id='main-player' >
                <div>
                    <input id='range' type={'range'} min="0" max="10000" value={rangeval} step="0.00009"
                        onChange={(event) => setRangeval(event.target.value)}
                    />
                </div>
                <div id='songbar' >
                    <span id='current-time'>00:00</span>
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
                    <span id='total-time'>03:45</span>
                </div>
            </div>

          


        </>
    );
}