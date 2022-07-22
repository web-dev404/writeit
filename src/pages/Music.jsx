"use strict";

import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import tracks from "../components/AudioPlayer/tracks";

function Music() {
    return (
        <div>
            <AudioPlayer tracks={tracks} />
        </div>
    )
}

export default Music;