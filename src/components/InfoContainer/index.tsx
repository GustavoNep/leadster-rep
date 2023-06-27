import Image from "next/image";
import styled from "styled-components";
const Container = styled.div`
`
const Wrapper = styled.div``
const ImgCont = styled.div``
const InfoCont = styled.div``



export default function InfoContainer() {
    return(
        <Container>
            <Wrapper>
                <ImgCont>

                </ImgCont>
                <InfoCont>
                    <h2>Pronto para triplicar sua Geração de Leads ?</h2>
                    <p>Criação e ativação em 4 minutos.</p>
                    <div>
                        <button>VER DEMONSTRAÇÃO</button>
                        <img></img>
                    </div>
                    <div>
                        <img></img>
                        <p>Não é necessário Cartão de Crédito |</p>
                        <img></img>
                        <span>4.9/5 média de satisfação</span>
                    </div>
                </InfoCont>

            </Wrapper>
        </Container>
    )
}