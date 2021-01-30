import React from "react";
import {ModalBox} from "./styles";

export default function Modaler(props){
    const {estado = false, size = "tiny",  cambiarEstado, children} = props;

    console.log("modal component se ejecuta")
    return(
        <ModalBox
            onClose={() => cambiarEstado(false)}
            open={estado}
            size={size}
        >
            {children}
        </ModalBox>
    )
}


export const ModalComponent = React.memo(Modaler)