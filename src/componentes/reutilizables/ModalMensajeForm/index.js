import React from "react";
import {Div} from "./styles";
import {Image} from "semantic-ui-react";

export default function Modal({titulo, mensaje, img}){
    console.log("modal mensaje se ejecuta");
    return(
        <Div>
            <h2>{titulo}</h2>
            <div>
              <Image src={img} />  
            </div>
            
            <p>{mensaje}</p>
        </Div>
    )
}

export const ModalMensajeForm = React.memo(Modal)