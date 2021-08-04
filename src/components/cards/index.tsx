import React from "react";

import data from "meta.json";
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardText,
  CardTitle,
} from "./styled";

export const Cards: React.FC = () => {
  return (
    <Container>
      <Row>
        {(data?.plugins ?? []).map((plugin) => (
          <Col key={plugin.name} data-testid="container">
            <Card>
              <CardBody>
                <CardTitle>{plugin.name}</CardTitle>
                <CardText>{plugin.description}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
