import styled from "styled-components";

const Input = styled.input`
    font-size: 1.5rem;
    border: none;
    border-bottom: 2px solid #E8EFF1;
    outline: none;
    margin: 1rem 0;
    text-align: center;
    min-width: 270px;

    &:out-of-range{
        border-bottom: 2px solid #f25757;
    }

    &:in-range{
        border-bottom: 2px solid #43A854;
    }
`;

export default Input;