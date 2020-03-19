import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
    .fondo-correo{
    width: 58.06em;
    height: 27.125em;
    background-image: url(./src/bg-mail.png);
    background-repeat: no-repeat;
    background-position:0 0;
    background-size: contain;
    font-size:0.95em;
    position: relative;
    color: ${Ilex.textos};
}
.check{
    margin-top: 8em; 
}
.dnd{
    width: 100%;
    padding-right: 3em;
    padding-left: 3em;
    margin-right: auto;
    margin-left: auto;
}
.container{
    width: 100%;
    height: 1.5em;
    padding-right: 14em;
    padding-left: 14em;
    margin-right: auto;
    margin-left: auto;
}
.ml-1{
    &:last-child{
        margin-left: 7em;
    }
    margin-left: 2em;
}
.text-center{
    text-align: center;
}
.to,.subject,.content{
    width: 80%;
    margin:0 auto;
    font-size: 0.8em;
    padding: 1em;
}
.label{
    font-weight:bold;
    margin-right:1em;
}
.to{
    margin-top:3.5em;
    .mail{
        color: ${Ilex.violeta2};
        font-weight:medium;
    }
}
.color_gray{
    color: ${Ilex.textos};
}
.mt-0{
    margin-top: 0 !important;
}
ul {

        list-style-type: none;
        margin: 0;
        padding: 0;

        li.inline_list{
            display: inline-block;
        }
        .inline_list:not(:last-child) {
          margin-right: 0.5rem;
        }
    }
li {
    margin-bottom: 1em;
}
.float_left{
    float: right;
}
`

export default styles
    