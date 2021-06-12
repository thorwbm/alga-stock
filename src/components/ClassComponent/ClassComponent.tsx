import React from 'react'

class ClassComponent extends React.Component<{name: string}>{
    state = {
        name: 'MUNDO'
    }
    render(){
        return  <div> 
                    <p> nome: {this.state.name}</p>
                    <button onClick={
                        () => {this.setState({name:'thor'})}
                    } >click me</button>
                </div>
    }
}
export default ClassComponent