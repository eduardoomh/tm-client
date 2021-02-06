import {useContext} from "react";
import usuarioContext from "context/usuarioContext";

export default function useUsuario(){
    return useContext(usuarioContext);
} 