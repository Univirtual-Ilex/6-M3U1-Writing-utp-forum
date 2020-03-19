import React, {useState} from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import ButtonUi from '../ButtonControlUI'
import {ICol, IRow} from '../Grid'
// Styles
import styled from 'styled-components'
import styles from './Actividad2_styles'
import { UiButtonsContainer } from '../Actividad1/Actividad_styles'
import Ilex from '../../App/variables'

import Modal from '../Generales/Modal'

import ButtonDown from '../ButtonDown'
// Data
import Data from './Actividad2_data'

import BocinaButton from '../BocinaButton'

import ButtonCheck from '../ButtonCheck'
import ButtonCheck2 from '../ButtonCheck2'


const Actividad2_base = ({staticContext, ...props}) => {
    
    const [modalFlag, setModal] = useState(false)
    const [ok, setOk] = useState(false)
    const [err, setErr] = useState(false)


    const checkAnswers = () =>{
        var count = 0
        Data.map((data, i) =>{
                if(data.right === 1){
                    count ++
                }else{
                    setErr(true)
                    setOk(false)
                    setModal(true)
                }
                if(count === Data.length){
                    setOk(true)
                    setModal(true)
                }
            })
    }

    const setChecked = (arrId, buttonId) => { // we get the checked state, NOTE: the checked state arrive with FALSE = TRUE and viceversa
        const data = Data[arrId]

        if(buttonId === 0 && data.answer === 'Yes'){
            data.right = 1
        }else{
            data.right = 0
        }
    }

    const buttons = Data.map((data, i) => 
            <IRow  className="inline_list"  key={i}>
                <ICol w={60} >
                    <p><strong>{i + 1}). </strong> {data.text} </p>
                </ICol>
                <ICol w={29} >
                    <ButtonCheck setCheckedState={setChecked} arrId={i} buttonId={0} nameb={'first_button1' + i} text={'Yes'} className={"ml-1  " + 'first_button1' + i} />
                    <ButtonCheck setCheckedState={setChecked} arrId={i} buttonId={1} nameb={'first_button1' + i} text={'No'} className={"ml-1  " + 'first_button1' + i} />
                </ICol>
            </IRow>
        )
    
    
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} h={32} id="area">
            <div className="" > 
                <UiButtonsContainer>
                    <ButtonUi icon='ilx-ayuda' tooltip='Click on the audio to hear the description, then answer' />
                    <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.href = '/actividad2'} } />
                </UiButtonsContainer>
                <IRow pt={1.5} className="text-center">
                    <ICol py={ 0.5 }>
                        <MainTitle color={Ilex.violeta2} size={1.5}>
                        TICK YES IF YOUR TEXTS HAVE THE FOLLOWING
                        <br></br>
                        CHARACTERISTICS: 
                        </MainTitle>  
                    </ICol>
                </IRow>

                <IRow justify='center' align='center' pt={3} w={100} gutters={0.5} >
                    <ICol w={60} >
                        {buttons}
                    </ICol>
                </IRow>
            </div>
            <ButtonCheck2 text={'check'} className="check" onClick={checkAnswers} ></ButtonCheck2>
        <Modal visible={modalFlag} ok={ok} err={err} w={25} repeatUrl={'/actividad2'} finished={ok} />
        </Container>
    )
}
const Actividad2 = styled(Actividad2_base)`${ styles }`
export default Actividad2
