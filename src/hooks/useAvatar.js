import avatarImage from "assets/img/avatar.png";
import useUsuario from "hooks/useUsuario";

export default function useAvatar(){
    const {autenticado} = useUsuario();
    const {imagen} = autenticado;
    console.log(imagen)

    return {
        avatar: imagen === null ? avatarImage : imagen
    }
}