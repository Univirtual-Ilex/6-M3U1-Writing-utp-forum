
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './ButtonCheck2_styles'

// Componente base
const ButtonCheck2_base = ({text, ...props}) => {
    return (
        <div {...props}>
            <button className='btn-clean'>
                { text ? text : 'Check'}
            </button>
        </div>
    )
}
const ButtonCheck2 = styled(ButtonCheck2_base)`${ styles }`
export default ButtonCheck2
