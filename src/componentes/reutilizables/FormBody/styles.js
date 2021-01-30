import styled from "styled-components";
import {Form} from "semantic-ui-react";

export const FormItem = styled(Form.Field)`
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    label{
        font-size: 1.2rem !important;
    }
`;
