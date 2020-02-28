import React from 'react'
import './../style/VideoItem.css'

const VideoItem = ({ videoItem }) => {
    return (
        <div className="video-item item" style={styles.videoItem}>
            <img className="ui image" src={videoItem.snippet.thumbnails.medium.url} alt={videoItem.snippet.title}/>
            <div className="content">
                <div className="header">
                {videoItem.snippet.title}
                </div>
            </div>
        </div>
    )
}

const styles = {
    videoItem : {
        display: 'flex !important',
        alignItems:' center !important',
        /* justify-content: center !important; */
        cursor: 'pointer',
    }
}



export default VideoItem