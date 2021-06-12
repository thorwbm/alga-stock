import React, {useState} from 'react'
import './TestComponent.css'

function TestComponent (props: {name: string}) {
    const [age, setAge] = useState(23)
 

    return  <div className="TestComponent"> 
                ola, {props.name} , idade: {age}

                <button onClick={
                    ()=> {
                        setAge(age + 1)
                    }
                }>
                + 
                </button>
            </div> 

        
}

export default TestComponent