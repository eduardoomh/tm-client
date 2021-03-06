import React from "react";
import { Formik } from "formik";
import { useMutation } from "@apollo/client";
import { CREAR_USUARIO } from "graphql/querys/usuario";
import useForm from "hooks/useForm";
import FormBody from "componentes/reutilizables/FormBody";
import {Boton} from "componentes/reutilizables/Boton";
import { ModalComponent } from "componentes/reutilizables/ModalComponent";
import { ModalMensajeForm } from "componentes/reutilizables/ModalMensajeForm";
import { REGISTRO_FORM, validacionSchema } from "utils/formularios/autenticacion";
import checkImage from "assets/img/check.png";
import errorImage from "assets/img/error.png";

import { FormBox, DivLink } from "../styles";

export default function Registro({ change }) {
    const [crearUsuario] = useMutation(CREAR_USUARIO);

    const {  modal, mensaje, titulo, imagen, cambiarModal, cambiarLoading, cambiarMensaje, cambiarTitulo, cambiarImagen } = useForm({
        initialLoading: false, 
        initialModal: false,
        initialMensaje: "",
        initialTitle: "",
        initialImagen: ""
    });

    const initialValues = {
        nombre: "",
        apellidos: "",
        correo: "",
        numero_control: "",
        contrasena: "",
        repetir_contrasena: ""
    }


    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validacionSchema}
                onSubmit={async (data, {resetForm}) => {

                    try {
                        cambiarLoading(true);
                        delete data.repetir_contrasena;
                        const result = await crearUsuario({
                            variables: {
                                input: {
                                    ...data
                                }
                            }
                        });
                        const {nombre, apellidos} = result.data.crearUsuario;
                        console.log(result.data.crearUsuario);
                        cambiarTitulo("Usuario creado con exito")
                        cambiarMensaje(`Felicidades, el usuario ${nombre} ${apellidos} ha sido creado correctamente, espere a ser aprobado`)
                        cambiarImagen(checkImage);
                        cambiarModal(true);
                        cambiarLoading(false);
                        resetForm()

                        setTimeout(() =>{
                            change()
                        }, 3000);
                        

                    }
                    catch (error) {
                        console.log(error.message)
                        cambiarMensaje(error.message)
                        cambiarTitulo("Tenemos errores")
                        cambiarImagen(errorImage);
                        cambiarLoading(false);
                        cambiarModal(true);

                    }
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, errors, touched }) => (

                    <FormBox onSubmit={handleSubmit}>
                        <h2>Crear una cuenta</h2>
                        <FormBody
                            data={REGISTRO_FORM}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            errors={errors}
                            touched={touched}
                        />
                        <Boton type="submit">Crear una cuenta</Boton>
                        <DivLink>
                            <p onClick={() => change()}>Ya tiene un cuenta <span>Iniciar Sesion</span></p>
                        </DivLink>
                    </FormBox>
                )}
            </Formik>
            <ModalComponent
                estado={modal}
                cambiarEstado={cambiarModal}
                size="tiny"
            >
               <ModalMensajeForm titulo={titulo} mensaje={mensaje} img={imagen} />
            </ModalComponent>
        </>
    )
}