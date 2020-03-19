
//Import
import React, {useState} from 'react'
import styled from 'styled-components'
import styles from './InputWords_styles'
import { TextArea } from './InputWords_styles'


/**
 * PROPS
 * 
 * ok boolean bordea de verde el campo
 * err boolean bordea con rojo el campo
 * w string/number define el ancho en em 
 * m string recibe un string con el valor para la propiedad margin ej: m = '0 auto 0 auto'
 * p string recibe un string con el valor para la propiedad padding ej: p = '0 1px 0 10px'
 * value function devuelve el valor que tiene el campo
 */

// Componente base
const InputWords_base = ({w, changeCheck, idArr, m, p, ok, err, ...props}) => {
    const [inputValue, setInputValue] = useState('')

    const updateText = (event) => {
        setInputValue(event.target.value)

        if(changeCheck)
        	changeCheck(event.target.value)
    }
    return (
        <div {...props}>
           <TextArea className={`btn-clean input-words ${+ ok ? ' ok' : err ? ' err' : '' }`} value = { inputValue } onChange={ updateText } />
        </div>
    )
}
const InputWords = styled(InputWords_base)`${ styles }`
export default InputWords
