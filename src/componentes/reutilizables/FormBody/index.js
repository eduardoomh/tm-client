import React from "react";
import { Input } from "semantic-ui-react"
import ErrorMensajeForm from "componentes/reutilizables/ErrorMensajeForm";
import {FormItem} from "./styles";

export default function FormBody(props){
    const {data, handleChange, handleBlur, errors, touched} = props;

    return(
        <>
        {
            data.map(item => (
                <FormItem key={item.name}>
                    <label>{item.label}</label>
                    <Input
                        type={item.type}
                        name={item.name}
                        placeholder={item.placeholder}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        icon={item.icon}
                    />
                    {errors[`${item.name}`] && touched[`${item.name}`] ? (
                        <ErrorMensajeForm>{errors[`${item.name}`]}</ErrorMensajeForm>
                    ) : null}
                </FormItem>

            ))
        }

        </>
    );
}