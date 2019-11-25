// create your App component here
import React from 'react' 

export default class App extends React.Component {

state = {
    peopleInSpace: []
    }

componentDidMount() { //    ✓ calls componentDidMount and fetch
    fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
        this.setState({
            peopleInSpace: data.people
        })
        })
    }

render(){
    return(
        <div>
        {this.state.peopleInSpace.map(person => person.name)}    {/* ✓ mounts correctly (41ms) */}
      </div>
    )
}

}