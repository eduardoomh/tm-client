import React from "react";
import {BotonEstilo} from "./styles";

export default function BotonElement({children}){
    return(
        <BotonEstilo type="form">{children}</BotonEstilo>
    )
}

export const Boton = React.memo(BotonElement)