// eslint-disable-next-line no-unused-vars
import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Importando produtos
import KitHigieneImg from "../assets/img/produtos/kit-higiene-5.webp";
import RacaoUmidaGoldenCaesImg from "../assets/img/produtos/racao-umida-golden-pet-gourmet-caes.webp";
import RacaoUmidaPremierGatosImg from "../assets/img/produtos/racao-umida-premier-pet-gourmet-sache-gatos.webp";
import ShBanhexBranqueadorImg from "../assets/img/produtos/sh-banhex-branqueador-500ml.webp";
import ShBanhexMacadamiaImg from "../assets/img/produtos/sh-banhex-macadamia-500ml.webp";

const products = [
  {
    id: 1,
    nome: "Kit 05 Produtos para Higiene Completa Pet - Cães e Gatos",
    descricao:
      "Composto por 05 produtos cuidadosamente selecionados, ele atende às necessidades de higiene bucal, auricular, limpeza da lágrima ácida e de pelagem, proporcionando uma rotina de cuidados completa.",
    preco: "R$ 160,25",
    imagem: KitHigieneImg,
  },
  {
    id: 2,
    nome: "Ração Úmida Golden Pet Gourmet Sachê Sabor Carne Para Cães Adultos De Racas Pequenas - 85 Gr",
    descricao:
      "Feito com ingredientes 100 naturais, e balanceado e enriquecido com vitaminas e minerais. Possui um sabor excepcional e e naturalmente saudavel, pois nao contem corantes e aromatizantes artificiais, proporcionando uma refeicao deliciosa.",
    preco: "R$ 4,50",
    imagem: RacaoUmidaGoldenCaesImg,
  },
  {
    id: 3,
    nome: "Ração Úmida Premier Pet Gourmet Sachê Sabor Atum Para Gatos Adultos Castrados - 70 Gr",
    descricao:
      "Sache 100 natural, livre de conservantes, corantes e aromatizantes, uma excelente opcao de petisco, exclusivamente desenvolvido pra retribuir todo o carinho que o seu gato precisa.",
    preco: "R$ 4,90",
    imagem: RacaoUmidaPremierGatosImg,
  },
  {
    id: 4,
    nome: "Shampoo Branqueador Pet Cachorro e Gato Banhex Lavizoo 500ml",
    descricao:
      "Higiene de cães e gatos de todas as raças que possuem pelagem branca, clara ou escura. Ele ajuda a prevenir o amarelamento dos pelos, realçando a cor branca e intensificando o brilho das pelagens escuras.",
    preco: "R$ 23,40",
    imagem: ShBanhexBranqueadorImg,
  },
  {
    id: 5,
    nome: "Shampoo Hidratante para Cachorro Gato Banhex Macadâmia 500ml",
    descricao:
      "O Shampoo Banhex Macadâmia é capaz de limpar a pele e os pelos dos animais de estimação de maneira suave, ao mesmo tempo em que proporciona uma hidratação profunda, ajudando a prevenir o ressecamento.",
    preco: "R$ 21,50",
    imagem: ShBanhexMacadamiaImg,
  },
];

const Produtos = () => {
  return (
    <main className="mt-5">
      <div className="container">
        <h2 className="text-center mb-4 titulo-pagina">Nossos Produtos</h2>
      </div>
      <Row className="justify-content-center">
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={2} className="mb-4">
            <Card className="h-100 d-flex flex-column">
              <Card.Img variant="top" src={product.imagem} alt={product.nome} />
              <Card.Body className="d-flex flex-column flex-grow-1">
                <Card.Title>{product.nome}</Card.Title>
                <Card.Text className="text-start">
                  {product.descricao}
                </Card.Text>
                <div className="mt-auto">
                  <Card.Text>
                    <strong>{product.preco}</strong>
                  </Card.Text>
                  <Button className="w-100" variant="primary">
                    Adicionar ao Carrinho
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </main>
  );
};

export default Produtos;
