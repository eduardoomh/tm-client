import {useReducer} from "react";

export default function useForm({initialLoading, initialModal, initialMensaje}){

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
            default: 
            break;
        }
    }

    const [form, dispatch] = useReducer(reducer, {
        loading: initialLoading,
        modal: initialModal,
        mensaje: initialMensaje
    })

    const {loading, modal, mensaje} = form;

    return{
        loading,
        modal,
        mensaje,
        cambiarMensaje: mensajeData => dispatch({payload: mensajeData, type: "MENSAJE"}),
        cambiarModal: modalData => dispatch({payload: modalData, type: "MODAL"}),
        cambiarLoading: loadingData =>  dispatch({payload: loadingData, type: "LOADING"})
   
    }
}