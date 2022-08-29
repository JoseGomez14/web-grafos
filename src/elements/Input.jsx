import styled from "styled-components";

const Input = styled.input`
    font-size: 1.5rem;
    border: none;
    border-bottom: 2px solid #E8EFF1;
    outline: none;
    margin: 1rem 0;
    text-align: center;
 
    @media(max-width: 60rem){ /* 950px */
        font-size: 2.2rem; /* 24px */
    }
`;

export default Input;