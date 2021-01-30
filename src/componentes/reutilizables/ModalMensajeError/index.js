import React from "react";
import {Div} from "./styles";
import {Image} from "semantic-ui-react";

export default function Modal({titulo, mensaje}){
    console.log("modal mensaje se ejecuta");
    return(
        <Div>
            <h2>{titulo}</h2>
            <div>
              <Image src={"https://www.levelaccess.com/wp-content/uploads/2014/08/form-error.jpg"} />  
            </div>
            
            <p>{mensaje}</p>
        </Div>
    )
}

export const ModalMensajeError = React.memo(Modal)