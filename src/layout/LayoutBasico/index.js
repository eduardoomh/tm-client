import React from "react";
import Menu from "componentes/reutilizables/Menu";
import Footer from "componentes/reutilizables/Footer";
import {LayoutDiv, MainContent} from "./styles";

export default function LayoutBasico(props){
    const {children} = props;
    return(
        <LayoutDiv>
            <Menu />
            <MainContent>
                <div>
                  {children}
                  <Footer />  
                </div>
            </MainContent>
            
        </LayoutDiv>
    )
}