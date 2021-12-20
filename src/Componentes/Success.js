import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';



export default function Success() {
    const location = useLocation()
    const state = location.state
    console.log(state)
    return (
        <Container>
            <Header>Pedido feito com sucesso!</Header>
            <Titles>Filme e sessão</Titles>
            <Informations>{state.title}</Informations>
            <Informations>{state.date} {state.showtime}</Informations>
            <Titles>Ingressos</Titles>
            {state.seats.map((seat) => <Informations key={seat}>Assento {seat}</Informations>)}
            <Titles>Comprador</Titles>
            <Informations>Nome: {state.buyerName}</Informations>
            <Informations>CPF: {state.buyerCpf}</Informations>
            <Link to='/'>
                <Button>Voltar pra Home</Button>
            </Link>
        </Container>
    )
}

const Titles = styled.div`
    color: #293845;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: start;
    margin: 30px 0 5px;
    width: 85vw;
`
const Header = styled.div`
    margin:100px 0 15px;
    color: #247A6B;
    font-size: 24px;
    line-height: 28px;
    max-width: 150px;
    text-align:center;
    font-weight: bold;
`
const Informations = styled.div`
    font-size: 22px;
    line-height: 26px;
    color: #293845;
    margin-bottom: 5px;
    width: 85vw;
`
const Button = styled.div`
    margin:50px 0 20px;
    background: #E8833A;
    width: 225px;
    height: 42px;
    border-radius: 3px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 117px;
`