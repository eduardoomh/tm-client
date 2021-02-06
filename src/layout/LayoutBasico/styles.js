import styled from "styled-components";

export const LayoutDiv = styled.div`
    display: grid;
    grid-template-columns: 20rem 1fr;
    grid-template-rows: 1fr;
    gap: 1rem;
    min-height: 100vh;
    max-height: 100vh;
`
export const MainContent = styled.main`
    min-height: 100vh;
    
    div{
        min-height: 90vh;
    }
`