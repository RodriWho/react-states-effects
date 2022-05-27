//Criando um componente pratico com estado

import React,{useState, useEffect} from 'react'
import '../Ifoodcounter/Ifoodcounter.css'

export default function Ifoodcounter() {

    const [value, setValue] = useState(1);
    const [buttonStyle, setButtonStyle] = useState('counter-button-minus-active');

    useEffect(()=>{
         document.getElementById("moeda").innerHTML = 2.00 * value
    },[value])

    //dimimuir value
    function down(){

        //mudar o css quanto value menor/igual a 1
        if(value <= 1){
            setButtonStyle("counter-button-minus-desactive");
        }

        //não permitir que value seja negativo
        if(value > 0){
            setValue(value-1);
        }

    }

    //Aumentar value
    function up(){
        setValue(value+1);
        setButtonStyle('counter-button-minus-active');
    }

  return (
    <div className='counter-wrapper'>
        <button
            className={buttonStyle}
            onClick={down}
        >
            -
        </button>
        <p>{value}</p>
        <button 
            className='counter-button-plus-active'
            onClick={up}
        >
            +
        </button>
        <button id="moeda">
            12,00
        </button>
    </div>
  )
}
