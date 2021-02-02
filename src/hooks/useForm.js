import {useReducer} from "react";

export default function useForm(props){
    const {initialLoading = false, initialModal = false, initialMensaje = "", initialTitle = "", initialImage = ""} = props;
    const reducer = (state, {type, payload}) => {
        switch(type){
            case "MENSAJE":
                return {
                    ...state,
                    mensaje: payload
                }

            case "MODAL":
                return {
                    ...state,
                    modal: payload
                }
            case "LOADING": 
                return{
                    ...state,
                    loading: payload
                }
            case "TITULO":
                return{
                    ...state,
                    titulo: payload
                }
            case "IMAGEN":
                return{
                    ...state,
                    imagen: payload
                }
            default: 
            break;
        }
    }

    const [form, dispatch] = useReducer(reducer, {
        loading: initialLoading,
        modal: initialModal,
        mensaje: initialMensaje,
        titulo: initialTitle,
        imagen: initialImage
    })

    const {loading, modal, mensaje, titulo, imagen} = form;

    return{
        loading,
        modal,
        mensaje,
        titulo,
        imagen,
        cambiarMensaje: mensajeData => dispatch({payload: mensajeData, type: "MENSAJE"}),
        cambiarModal: modalData => dispatch({payload: modalData, type: "MODAL"}),
        cambiarLoading: loadingData =>  dispatch({payload: loadingData, type: "LOADING"}),
        cambiarTitulo: tituloData => dispatch({payload: tituloData, type: "TITULO"}),
        cambiarImagen: imagenData => dispatch({payload: imagenData, type: "IMAGEN"})
   
    }
}