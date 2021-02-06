import React from "react";
import Boton from "componentes/reutilizables/Boton";
import { BotonesBox} from "./styles";

export default function BotonesCrear(){
    return(
        <BotonesBox>
            <Boton type="form">Crear Evento</Boton>
            <Boton type="form">Crear Mantenimiento</Boton>
            <Boton type="form">Crear Salida</Boton>
            <Boton type="form">Crear Vehiculo</Boton>
            <Boton type="form">Crear Departamento</Boton>
        </BotonesBox>
    )
}