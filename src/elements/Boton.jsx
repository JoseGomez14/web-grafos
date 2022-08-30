import styled from 'styled-components';

const Boton = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');
    
    background: ${(props) => props.primario ? '#40779c' : '#43A854'};
    width: auto;
    height: 3rem;
    padding: 1.5rem;
    margin-bottom: 1rem;
    margin-top: ${(props) => props.marginTop ? '1rem' : '0'};
    border: none;
    border-radius: 1.4rem;
    color: #fff;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.25rem;
    text-decoration: none;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
    cursor: pointer;
`;

export default Boton;