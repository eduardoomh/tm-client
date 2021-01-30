import {gql} from "@apollo/client";

export const INICIAR_SESION = gql`
    mutation iniciarSesion($input: LoginInput!){
        iniciarSesion(input: $input){
            token
        }
    }
`;

export const CREAR_USUARIO = gql`
    mutation crearUsuario($input: CrearUsuarioInput!){
        crearUsuario(input: $input){
            id
            nombre
            apellidos
        }
    }
`;