import styled from "styled-components";

export const HeaderStyles = styled.header`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 7rem 1fr;
    min-width: 20rem;
    max-width: 20rem;
    min-height: 100vh;

    background-color: #f9f9f9;
    border-right: 1px solid #dfd8d8;
    padding: 1rem;

    .usuario{
        display: flex;
        justify-content:center;
        align-items: center;
        min-height: 7rem;
        max-height: 7rem;
        border-bottom: 2px solid #d5d1d1;
        margin-bottom: 2rem;

    }

    .contenido{
        min-height: 100%;
        overflow-y: scroll;
    }
`;