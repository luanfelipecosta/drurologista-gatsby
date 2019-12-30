import React from "react"
import { Background } from "../CategoriesSection/CategoriesComponent.style"
import { SectionTitle, Row, Col, Container } from "../../components"
import { ProfileImage, P } from "./BioSection.style"

export default function BioSection() {
  return (
    <Background id="sobre">
      <Container>
        <Row justifyContent="center">
          <SectionTitle
            caption="Sobre mim"
            title="Conheça o Dr. Leonardo Braga"
          />
        </Row>
        <Row>
          <Col lg={6} xs={12}>
            <Row style={{ backgroundColor: "#adc0c8" }} justifyContent="center">
              <ProfileImage />
            </Row>
          </Col>
          <Col style={{ paddingLeft: "4rem" }} lg={6} xs={12}>
            <h3>Formação acadêmica</h3>
            <P>
              Dr. Leonardo Inácio Marcondes Braga formou-se em Medicina pela
              Faculdade de Ciências Médicas da UNICAMP em 2001.
            </P>
            <P>
              Fez especialização em Cirurgia Geral também pela UNICAMP no
              período entre 2002 a 2004. Se especializou em Urologia no Hospital
              de Servidor Público Estadual (IAMSPE) entre 2004 A 2006. Em
              seguida obteve o Título de Especialista em Urologia (TiSBU)
              durante o Congresso Brasileiro de 2007.
            </P>
            <P>
              Dr. Leonardo Inácio Marcondes Braga foi assistente do Hospital do
              IAMSPE durante 6 anos, atuando na área de Disfunções Miccionais e
              Incontinência Urinária. Neste período escreveu 2 capítulos de
              livros sobre o assunto de Incontinência Urinária (Urologia Prática
              e Urologia Fundamental) e ministrou aulas em Congressos Paulista e
              Brasileiro de Urologia.
            </P>
            <P>
              Também é Assistente do Grupo de Litíase do Hospital Brigadeiro em
              São Paulo e atualmente tem atuado como palestrante nos últimos
              Congressos da Sociedade Brasileira de Urologia na área de litíase
              renal. Fez parte da atual diretoria da Sociedade Brasileira de
              Urologia secção São Paulo (SBU-SP) no período 2014-2015, atuando
              como Editor do BIU (Boletim Informativo Urológico – revista da
              SBU-SP).
            </P>
            <h3>Atualmente...</h3>
            <P>
              Diretor Clínico da Clínica Dayclin; localizada na Rua Marcondes
              Salgado, 74 – Vila Adyana em São José dos Campos, onde exerce suas
              atividades profissionais como Urologista, disponibilizando a seus
              pacientes consultas, exames e cirurgias na área de Urologia.
            </P>
            <P>
              É um dos poucos profissionais da região com especialização em
              Cirurgia Videolaparoscópica, Esfíncter Artificial e Cirurgia à
              laser para cálculo renal.
            </P>
          </Col>
        </Row>
      </Container>
    </Background>
  )
}
