import React, {useState} from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import ButtonUi from '../ButtonControlUI'
import {ICol, IRow} from '../Grid'
// Styles
import styled from 'styled-components'
import styles, { UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'
import PreguntaTF from '../PreguntaTF'

// Data
import Data from './Actividad_data'

import BocinaButton from '../BocinaButton'

import ButtonCheck from '../ButtonCheck'
import InputWords from '../InputWords'
import ButtonDown from '../ButtonDown'


const Actividad_base =  ({staticContext, ...props}) => {
	
	const [modalFlag, setModal] = useState(false)
	const [passed, setPassed] = useState(false)

	const [inputOk, setInput] = useState(false)
	const [inputErr, setInputErr] = useState(false)





	const checkAnswers = () =>{
		if(passed){
			window.location.href = '/actividad2'
		}
	}
	
	const checkText = (text) => {
		if(text.split(' ').length >= 60){
			setInput(true)
			setInputErr(false)
			setPassed(true)
		}else{
			setPassed(false)
		}
	}


    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} h={45} w={80} id="area">
        	
            <div className="" > 
	            <UiButtonsContainer>
	                <ButtonUi icon='ilx-ayuda' tooltip='Click on the audio to hear the description, then answer' />
	                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.href = '/actividad1'} } />
	            </UiButtonsContainer>
	            <IRow pt={5} className="text-center">
	                <ICol py={ 0.5 }>
	                    <MainTitle color={Ilex.violeta2} size={1.5}>
	                    WHAT EXPERIENCES HAVE YOU HAD AT UNIVERSITY? WRITE YOUR EXPERIENCES IN NO LESS THAN 60 WORDS
	                    </MainTitle>  
	                </ICol>
	            </IRow>

	            <IRow justify='center' align='center' pt={3} w={100} gutters={0.5} >
	            	<ICol w={25} className="text" >
	            		<div  ><p><strong>Confession example:</strong> <br/><br/> I confess that <strong>I have never studied</strong> for a test. I don’t know how, but I always pass the exams without making big efforts. <strong>I have not obtained</strong> excellent grades, but I pass. <strong>I have always</strong> been like this. In high school, I didn’t study for exams either.</p> </div>
	                </ICol>
	                <ICol w={60} >
	                	<InputWords ok={inputOk} err={inputErr} changeCheck={checkText} />
	                	60
	                	<ButtonDown text={'check'} onClick={checkAnswers} ></ButtonDown>
	                </ICol>
	            </IRow>
            </div>
        </Container>
    )

}


const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad