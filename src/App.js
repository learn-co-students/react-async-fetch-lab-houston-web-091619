// create your App component here
import React from 'react'

export default class App extends React.Component{

    constructor(){
        super()
        this.state={
            people:[],
            peopleHere:[],
            number:0,
            message:""
        }
        console.log("constructor")
    }

    render(){
        return(
            <div>
                {console.log("render method")}
                {console.log(this.state)}
            </div>
        )
    }

    componentDidMount(){
        fetch(`http://api.open-notify.org/astros.json`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                people: data.people,
                peopleHere: data.people,
                number: data.number,
                message: data.message
            })
            console.log("near the end of fetch")
            console.log(data.people)
        })
        console.log("after the fetch")
        console.log(this.state)
    }
}