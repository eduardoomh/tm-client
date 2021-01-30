import styled from "styled-components";
import {Form} from "semantic-ui-react";


export const FormBox = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 100vw;
    padding: .5em;

    @media (min-width: 800px) {
        min-width: 450px !important;
    }

`;


export const DivLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-size: 1.1em;

        span{
            color: rgba(96, 165, 250, 1);
            &:hover{
                cursor: pointer;
            }
        }
    }
    height: 4rem;
`;