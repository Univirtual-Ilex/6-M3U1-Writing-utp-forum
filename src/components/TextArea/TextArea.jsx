
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './TextArea_styles'

// Componente base
const TextArea_base = ({...props}) => {
    return (
        <div {...props}>
            Creado el componente TextArea
        </div>
    )
}
const TextArea = styled(TextArea_base)`${ styles }`
export default TextArea
