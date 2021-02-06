import React from "react";
import useUsuario from "hooks/useUsuario";
import NombreUsuario from "./NombreUsuario";
import Nav from "./Nav";
import BotonesCrear from "./BotonesCrear";
import { HeaderStyles } from "./styles";

export default function Menu() {
    const { autenticado, cerrarSesion } = useUsuario();
    const { nombre, apellidos } = autenticado;

    return (
        <HeaderStyles>
            <div className="usuario">
                <NombreUsuario nombre={nombre} apellidos={apellidos} cerrar={cerrarSesion} />
            </div>
            <div className="contenido">
                <Nav />
                <BotonesCrear />
            </div>

        </HeaderStyles>
    )
}