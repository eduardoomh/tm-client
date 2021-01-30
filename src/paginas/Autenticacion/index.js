import React, {useState} from "react";
import {Image } from "semantic-ui-react"
import Login from "componentes/paginas/Autenticacion/Login";
import Registro from "componentes/paginas/Autenticacion/Registro";
import Logo from "assets/img/Logo_ITM.gif";
import {Main, Div, DivContainer} from "./styles";


export default function Autenticacion(){
    const [loginAuth, setLoginAuth] = useState(true);

    const changeLoginAuth = () =>{
        setLoginAuth(!loginAuth)
    }

    console.log("autenticacion se ejecuta")

    return(
        <Main>
            <Div>
                <div>
                    <h1>Sistema de gestion para el departamento de recursos materiales y servicios</h1>
                    <div>
                        <Image src={Logo} alt="Logo del TecNm Campus Matamoros"  />
                    </div>
                </div>

            </Div>
            <DivContainer>
            {
                loginAuth ?  <Login 
                                change={changeLoginAuth}
                            /> 
                            : <Registro 
                                change={changeLoginAuth} 
                            />
            }

            </DivContainer>
           
        </Main>
    )
}