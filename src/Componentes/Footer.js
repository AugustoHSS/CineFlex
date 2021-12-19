import styled from 'styled-components';

export default function Footer({ title, posterURL, weekday, name }) {
    return (
        <Container>
            <BackgroundImage>
                <img src={posterURL} alt={title} />
            </BackgroundImage>
            <Informations>
                <Title>{title}</Title>
                {weekday !== undefined ? <When>{`${weekday} - ${name}`}</When> : ""}
            </Informations>
        </Container>

    )
}



const Container = styled.div`
    border: 1px solid #9EADBA;
    display: flex;
    align-items: center;
    position: fixed;
    z-index:1;
    bottom: 0;
    padding-left: 10px;
    width: 100vw;
    height: 117px;
    background: #DFE6ED;
    img{
       height:72px;
       width:48px 
    }
`
const BackgroundImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    height:89px;
    width:64px;
`
const Title = styled.div`
    font-size: 26px;
    line-height: 30px;
    color: #293845;
    margin-left: 15px;
`
const When = styled.div`
    font-size: 26px;
    line-height: 30px;
    color: #293845;
    margin-left: 15px;
`

const Informations = styled.div``