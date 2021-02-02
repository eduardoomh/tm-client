import React from "react";
import { Formik } from "formik";
import { useMutation } from "@apollo/client";
import { INICIAR_SESION } from "graphql/querys/usuario";
import {Boton} from "componentes/reutilizables/Boton";
import { ModalComponent } from "componentes/reutilizables/ModalComponent";
import { ModalMensajeForm } from "componentes/reutilizables/ModalMensajeForm";
import FormBody from "componentes/reutilizables/FormBody";
import useForm from "hooks/useForm";
import useUsuario from "hooks/useUsuario";
import { LOGIN_FORM, login_validacion } from "utils/formularios/autenticacion";
import { FormBox, DivLink } from "../styles";
import errorImage from "assets/img/error.png";

export default function Login({ change }) {
    const [iniciarSesion] = useMutation(INICIAR_SESION);
    const { decodificarToken } = useUsuario();

    const { 
            loading, modal, mensaje,titulo, imagen, cambiarLoading,cambiarModal, cambiarMensaje, cambiarTitulo, cambiarImagen } = useForm({
                initialLoading: false, 
                initialModal: false,
                initialMensaje: "",
                initialTitle: "",
                initialImagen: ""
            });

    console.log("login se ejecuta")


    return (
        <>
            <Formik
                initialValues={{
                    correo: "",
                    contrasena: ""
                }}
                validationSchema={login_validacion}
                onSubmit={async (data) => {

                    try {
                        cambiarLoading(true);
                        const result = await iniciarSesion({
                            variables: {
                                input: {
                                    ...data
                                }
                            }
                        });
                        console.log(result.data.iniciarSesion.token);
                        decodificarToken(result.data.iniciarSesion.token);
                        cambiarLoading(false);

                    }
                    catch (error) {
                        console.log(error.message)
                        cambiarMensaje(error.message)
                        cambiarTitulo("Tenemos errores")
                        cambiarImagen(errorImage)
                        cambiarLoading(false);
                        cambiarModal(true);

                    }


                }}
            >
                {({ handleChange, handleBlur, handleSubmit, errors, touched }) => (

                    <FormBox onSubmit={handleSubmit}>
                        <FormBody 
                            data={LOGIN_FORM} 
                            handleBlur={handleBlur} 
                            loading={loading} 
                            handleChange={handleChange} 
                            errors={errors} 
                            touched={touched} 
                        />
                        <Boton type="submit">Ingresar</Boton>
                        <DivLink>
                            <p onClick={() => change()}>No tiene una cuenta? <span>Crear Cuenta</span></p>
                        </DivLink>
                    </FormBox>
                )}
            </Formik>
            
            <ModalComponent
                estado={modal}
                cambiarEstado={cambiarModal}
                size="small"
            >
               <ModalMensajeForm titulo={titulo} mensaje={mensaje} img={imagen} />
            </ModalComponent>
        </>
    )
}