import loading from '../assets/Loading.gif';
import styled from 'styled-components';

export default function Loading() {
    return (
        <Container>
            <img src={loading} alt="Carregando" />
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vw;
    margin-top: 40%;
    display:flex;
    justify-content: center;
    align-items: center;
`