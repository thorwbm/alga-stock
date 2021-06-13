import React, {useState, useEffect} from 'react'
import './TestComponent.css'

function TestComponent (props: {name: string}) {
    const [age, setAge] = useState(23)
 
    useEffect(
        ()=>{
            console.log("componente foi criado")
        }, []
    )

    useEffect(
        ()=>{
            console.log("a idade foi alterada -" + age)
        }, [age]
    )


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