import * as Yup from "yup";

export const LOGIN_FORM = [
    {
        type: "text",
        name: "correo",
        icon: "at",
        label: "Correo",
        placeholder: "Introduzca su correo electronico",
    },
    {
        type: "password",
        name: "contrasena",
        icon: "lock",
        label: "Contrasena",
        placeholder: "Introduzca su contrasena"
    }
];

export const login_validacion = Yup.object().shape({
    correo: Yup.string().email('El correo no es valido, intente otro.').required('El correo es requerido'),
    contrasena: Yup.string().required('La contrasena es requerida'),
});

export const REGISTRO_FORM = [
    {
        type: "text",
        name: "nombre",
        icon: "address book",
        label: "Nombre"
    },
    {
        type: "text",
        name: "apellidos",
        icon: "address book",
        label: "Apellidos"
    },
    {
        type: "text",
        name: "correo",
        icon: "at",
        label: "Correo"
    },
    {
        type: "text",
        name: "numero_control",
        icon: "barcode",
        label: "Numero de Control"
    },
    {
        type: "password",
        name: "contrasena",
        icon: "lock",
        label: "Contrasena"
    },
    {
        type: "password",
        name: "repetir_contrasena",
        icon: "lock",
        label: "Repetir Contrasena"
    }
];

export const validacionSchema = Yup.object().shape({
    nombre: 
        Yup.string()
        .required('El nombre es requerido')
        .min(3, 'El nombre debe tener al menos 3 caracteres'),
    apellidos: 
        Yup.string()
        .required('Los apellidos son requeridos')
        .min(3, 'El o los apellidos deben tener al menos 3 caracteres'),
    correo: 
        Yup.string()
        .email('El correo no es valido, intente otro.')
        .required('El correo es requerido'),
    numero_control: 
        Yup.string()
        .required('El numero de control es requerido'),
    contrasena: 
        Yup.string()
        .required('La contrasena es requerida')
        .min(8, 'La contrasena debe tener al menos 8 caracteres')
        .oneOf([Yup.ref("repetir_contrasena")], "Las contraseñas no son iguales"),
    repetir_contrasena: 
        Yup.string()
        .required('La contrasena es requerida')
        .oneOf([Yup.ref("contrasena")], "Las contraseñas no son iguales"),
});