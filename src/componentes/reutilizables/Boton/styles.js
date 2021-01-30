import styled from "styled-components";
import {Button} from "semantic-ui-react";

export const BotonEstilo = styled(Button)`
    min-height: 8rem;
    max-height: 8rem;
    background-color: rgba(220, 38, 38, 1) !important;
    color: white !important;
    width: ${props => props.type === "form" ? "100%" : "12rem"};
    
`;