import { POINT_CONVERSION_COMPRESSED } from 'constants'
import React from 'react'
import { isPropertySignature } from 'typescript'
import './Button.css'

declare interface ButtonProps{
    content?: string
    onClick?: () => void
    appendIcon: JSX.Element
}

const Button: React.FC<ButtonProps> = (props) => {
   return   <button 
                className="AppButton"
                onClick={props.onClick}
            >
                {props.children || 'Botao sem nome'}
                {props.appendIcon}
            </button>
}

export default Button