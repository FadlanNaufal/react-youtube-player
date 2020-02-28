import React from 'react'
import Searchbar from './Searchbar'
import youtube from './../apis/Youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

export default class App extends React.Component {

    state = {
        video: [],
        selectedVideo : null
    }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({
            video : response.data.items
        })
        console.log('Hasil Video', this.state.video)
    }

    onVideoSelect = video =>{
        this.setState({
            selectedVideo : video
        })
    }

    render() {
        return (
            <div className="ui container">
                <Searchbar onFormSubmit={this.onTermSubmit} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={this.onVideoSelect}  videos={this.state.video} />
            </div> 
        )
    }
}