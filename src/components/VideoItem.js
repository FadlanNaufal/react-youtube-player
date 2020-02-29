import React from 'react'
import moment from 'moment'

const VideoItem = ({ videoItem,onVideoSelect }) => {
    return (
        <div onClick={()=>onVideoSelect(videoItem)} className="video-item item" style={styles.videoItem}>
            <img className="image" src={videoItem.snippet.thumbnails.medium.url} alt={videoItem.snippet.title} style={styles.image}/>
            <div className="ui content">
                <div className="ui header">
                {videoItem.snippet.title}
                </div>
                <br/>
                <p>
                {moment(videoItem.snippet.publishedAt).fromNow()}
                </p>
                <p style={styles.detailVideo}>
                    {videoItem.snippet.description}
                </p>
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
    },
    detailVideo : {
        marginTop : 20,
        color : 'gray'
    },
    image : {
        marginBottom : 20
    }
}



export default VideoItem