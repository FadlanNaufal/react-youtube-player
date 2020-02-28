import React from 'react'
import Searchbar from './Searchbar'
import youtube from './../apis/Youtube'
import VideoList from './VideoList'

export default class App extends React.Component {

    state = {
        video: []
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

    render() {
        return (
            <div className="ui container">
                <Searchbar onFormSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.video} />
            </div> 
        )
    }
}