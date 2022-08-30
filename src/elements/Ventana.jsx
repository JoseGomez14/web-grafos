import styled, {keyframes} from 'styled-components';

const slideDown = keyframes`
    0% {
        transform: translateY(-1.25rem); /* 20px */
        opacity: 0;
    }
 
    10% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
    
    100% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
`;
 
const ContenedorVentana = styled.div`
    z-index: 1000;
    background-color: #ffffff23;
    backdrop-filter: blur(5px);
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    animation: ${slideDown} 4s ease forwards;
 
    p, article {
        background: #272427;
        color: #fff;
        padding: 1.25rem 4.5rem;
        box-shadow: 0px 0px 15px #a8a8a818;
        border-radius: 0.4rem;
        text-align: center;
        font-size: 1.5rem;
        cursor: pointer;
    }

    article{
        margin-bottom: 1.5rem;
    }

    section{
        background-color: #272427;
        padding: 3rem 5rem;    
        border-radius: 0.4rem;
        max-height: 90vh;
        overflow-y: auto;

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
    }

    h1{
        color: #fff;
        font-size: 1.5rem;
        font-weight: 400;
    }
`;

export {ContenedorVentana};