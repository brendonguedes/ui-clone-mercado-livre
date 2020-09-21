import React from "react";

import tshirtImage from "../../assets/tshirt.png";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          {/* <ProductActon />
          <SallerInfo /> */}

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <span>
      <p className="Title">Compra garantida com o Lorem Ipsum</p>
      <p className="description">
        Receba o produto que você está esperando ou devolvemos o seu dinheiro
      </p>
    </span>

    <span>
      <p className="Title">Garantia do vendedor</p>
      <p className="description">Sem garantia</p>
    </span>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      mattis, diam non tincidunt feugiat, neque ex fringilla nunc, blandit
      consequat augue lorem eget magna. Etiam lorem nisi, mollis vitae laoreet
      eget, mattis non nulla. Ut turpis nibh, varius eu mi at, sodales
      condimentum purus.
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Aliquam accumsan, ipsum tincidunt ultrices condimentum, ligula augue
      volutpat neque, at dapibus odio sem at est. Nullam pharetra id arcu et
      vehicula. Fusce sit amet feugiat nisl. Donec scelerisque sem eget neque
      vehicula mollis. Aliquam erat volutpat. Fusce accumsan lorem non auctor
      aliquet. Aliquam ac facilisis leo, ac porta lacus. Curabitur venenatis, mi
      sit amet posuere ullamcorper, tortor neque sagittis est, id dictum tellus
      ipsum vitae ex. In in mollis lorem, eget euismod ligula. Aliquam congue,
      dolor id maximus maximus, risus nulla semper turpis, eu volutpat enim eros
      nec dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      Donec vitae ligula a nibh volutpat eleifend a nec arcu.
    </p>
  </Description>
);

export default Product;
