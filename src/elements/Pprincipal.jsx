import styled from 'styled-components';

const Contenedor = styled.div`
    background: #fff;
    width: 90%;
    max-width: 80rem; /*1110px*/
    height: 90vh;
    max-height: 50rem;  /* 800px */
    overflow-y: auto;
    box-shadow: 0px 1.25rem 2.5rem rgba(0,0,0,.05);
    border-radius: 0.625rem; /* 10px */
    margin: 5vh auto;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 100;
 
    @media(max-width: 60rem){ /* 950px */
        height: 95vh;
        max-height: none;
    }

    &::-webkit-scrollbar
    {
        border-radius: 15px;
        background-color: rgba(255, 255, 255, 0);
        width: 8px;
    }

    &::-webkit-scrollbar-thumb
    {
        background-color: #D4D4D4;
        border-radius: 8px;
    }
    
    article{
        width: 100%;
        padding: 1rem;
        margin: 0;
        border-bottom: 1px solid #d0d0d0;
    }
`;

const ContendorNodos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
`;

const ContendorNodo = styled.div`
    flex: 1 1 300px;
    border-radius: 10px;
    background-color: #efefef;
    width: fit-content;
    padding: 1rem 2rem;
    height: 100%;
    margin: 0;
    
    p{
        font-size: 1.2rem;
    }
`;

const P = styled.p`
  color: ${(props => props.rojo? '#E34747': 'black')};
  font-size: 1.15rem;
  margin: 0.8rem 0;
`;

export {Contenedor, ContendorNodos, ContendorNodo, P};