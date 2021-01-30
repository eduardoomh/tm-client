import React from "react";
import { Formik } from "formik";
import { useMutation } from "@apollo/client";
import { CREAR_USUARIO } from "graphql/querys/usuario";
import useForm from "hooks/useForm";
import FormBody from "componentes/reutilizables/FormBody";
import {Boton} from "componentes/reutilizables/Boton";
import { ModalComponent } from "componentes/reutilizables/ModalComponent";
import { ModalMensajeError } from "componentes/reutilizables/ModalMensajeError";
import { REGISTRO_FORM, validacionSchema } from "utils/formularios/autenticacion";

import { FormBox, DivLink } from "../styles";

export default function Registro({ change }) {
    const [crearUsuario] = useMutation(CREAR_USUARIO);

    const {  modal, mensaje, cambiarModal, cambiarLoading, cambiarMensaje } = useForm({
        initialLoading: false, initialModal: false, initialMensaje: ""
    });



    return (
        <>
            <Formik
                initialValues={{
                    nombre: "",
                    apellidos: "",
                    correo: "",
                    numero_control: "",
                    contrasena: "",
                    repetir_contrasena: ""
                }}
                validationSchema={validacionSchema}
                onSubmit={async (data) => {

                    try {
                        cambiarLoading(true);
                        const result = await crearUsuario({
                            variables: {
                                input: {
                                    ...data
                                }
                            }
                        });
                        console.log(result.data.iniciarSesion.token);
                        cambiarLoading(false);

                    }
                    catch (error) {
                        console.log(error.message)
                        cambiarMensaje(error.message)
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
                <ModalMensajeError titulo="Tenemos un error" mensaje={mensaje} />
            </ModalComponent>
        </>
    )
}