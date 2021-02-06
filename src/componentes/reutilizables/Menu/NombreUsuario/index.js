import React from "react";
import useAvatar from "hooks/useAvatar";
import { Image, Icon, Popup } from "semantic-ui-react";
import { DivStyles, PopupMenu } from "./styles";

export default function NombreUsuario(props) {
    const { nombre, apellidos, cerrar } = props;
    const { avatar } = useAvatar()

    return (
        <Popup
        trigger={
            <DivStyles>
                <div className="img-container"><Image src={avatar} /></div>
                <div className="nombre-container">
                    <p>{nombre}</p>
                    <p>{apellidos}</p>
                </div>
                <div className="icono-container">
                    <Icon name="angle down" size="large" />
                </div>
        </DivStyles>

        }
        size="large"
        position='top rigth'
        on='click'
        size="small"
        content={<>
            <PopupMenu>
                <li>Perfil</li>
                <li>Editar perfil</li>
                <li onClick={() => cerrar()}>Cerrar Sesion</li>
            </PopupMenu>

        </>}
        inverted
    />


    )
}