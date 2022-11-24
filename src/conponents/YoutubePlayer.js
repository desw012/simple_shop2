import YouTube from "react-youtube";

function YoutubePlayer(){
    const _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };


    return <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={_onReady} />;
}

export default YoutubePlayer;