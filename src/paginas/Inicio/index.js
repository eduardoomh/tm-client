import React from "react";
import useUsuario from "hooks/useUsuario";

export default function InicioComponent(){
    const {autenticado} = useUsuario();

    return (
        <div>
            <h1>Bienvenido</h1>

        </div>
    )
}