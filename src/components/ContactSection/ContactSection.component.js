import React from "react"
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"
import { Row, SectionTitle } from "@components"
import { MapWindow } from "./ContactSection.style"
import { ContactCell } from "../Header/ContactCell.component"

function ContactSection(props) {
  return (
    <>
      <div id="contato" style={{ paddingTop: "2.5rem", display: "block" }}>
        <Row justifyContent="center">
          <SectionTitle caption="Contato" title="Canais de atendimento" />
        </Row>
        <Map
          initialCenter={{ lat: -23.19585, lng: -45.895538 }}
          style={{ height: 590, width: "100vw" }}
          google={props.google}
          zoom={18}
        >
          <Marker name="123" position={{ lat: -23.19585, lng: -45.895538 }} />
          <MapWindow>
            <ContactCell
              title="Ligue para nós"
              description={`+55 (12) 3923-4146 \n  +55 (12) 3923-4166`}
              icon="phone"
            />
            <div style={{ margin: "1rem 0" }}>
              <ContactCell
                key="endereco"
                title="Endereço"
                description={`R. Marcondes Salgado, 74 \n São José dos Campos`}
                icon="map-marker-alt"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/dir/?api=1&destination=-23.19585,-45.895538&travelmode=driving",
                    "_blank"
                  )
                }
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <ContactCell
                key="endereco"
                title="Horário de funcionamento"
                description={`Seg. - Sex: 09:00 - 18:00`}
                icon="clock"
              />
            </div>
            <ContactCell
              title="E-mail"
              description={`dayclin2016@gmail.com`}
              icon="envelope"
              onClick={() => window.open("mailto:dayclin2016@gmail.com")}
            />
          </MapWindow>
        </Map>
        <div style={{ height: 590, width: "100%" }} />
      </div>
    </>
  )
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBmhPLhx3IdP0eEL34IwIQ3jiURu8J9Xks",
})(ContactSection)
