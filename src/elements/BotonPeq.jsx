import styled from 'styled-components';

const BotonPeq = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');
    
    background: ${(props) => props.primario ? '#40779c' : '#43A854'};
    width: 'auto';
    margin-top: ${(props) => props.marginTop ? '1rem' : '0'};
    border: none;
    border-radius: 1rem;
    color: #fff;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    height: 2rem;
    padding: 1.1rem;
    font-size: 1rem;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline: none;
`;
 
export default BotonPeq;