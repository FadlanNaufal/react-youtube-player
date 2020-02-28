import React from 'react'

export default class Searchbar extends React.Component{

    state = {
        term : ''
    }

    onInputChange = e =>{
        this.setState({
            term : e.target.value
        })
        // console.log(this.state.term)
    }

    onFormSubmit = e =>{
        e.preventDefault()
        this.props.onFormSubmit(this.state.term)
    }

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input onChange={this.onInputChange} type="text"  value={this.state.term} />
                    </div>
                </form>
            </div>
        )
    }
}