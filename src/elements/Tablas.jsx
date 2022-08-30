import styled from "styled-components";

const ContenedorTabla = styled.div`
    width: 100%;
    margin: auto;
    text-align: center;
`;

const Tabla = styled.table`
    width: fit-content;
    text-align: center;
    margin: auto !important;
    border-collapse: collapse;
    border-radius: 10px; 
    box-shadow: 0px 0px 3px #ccc;

    tbody, thead{
        td{
            box-shadow: 0px 0px 1px #ccc; 
            font-size: 1.5rem;
            padding: 0.8rem 1rem;
        }

        th{
            box-shadow: 0px 0px 1px #ccc; 
            font-size: 1.5rem;
            padding: 0.8rem 1rem;
        }
        
        tr:nth-child(even){
            background: #F3F3F3;
        }
    }
`

export {ContenedorTabla, Tabla};