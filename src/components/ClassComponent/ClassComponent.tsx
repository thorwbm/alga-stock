import React from 'react'

class ClassComponent extends React.Component<{name: string}>{
    constructor(props: any){
        super(props);
        console.log("construtor reched " + this.props.name);
    }

    state = {
        name: 'MUNDO'
    }

    componentDidMount(){
        console.log("depois do componente montado")
    }

    componentDidUpdate(){
        console.log(" updatando o componente ")
    }
    
    render(){
        console.log("entrou no render")
        return  <div> 
                    <p> nome: {this.state.name}</p>
                    <button onClick={
                        () => {
                                if(this.state.name === 'thor'){ 
                                    this.setState({name:'nao thor'})
                                } else {
                                    this.setState({name:'thor'})
                                }
                            }
                    } >click me</button>
                </div>
    }
}
export default ClassComponent