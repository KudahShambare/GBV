import React from "react";
import articleContent from "./article-content";
import ArticlesList from "../Components/ArticlesList";
import NotFoundPage from "./NotFoundsPage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);

  if (!article) return <NotFoundPage />;

  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  return (
    <Container>
      <Row>
        <Col className="text-center">
          {article.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
          ))}
          <h3>Other Articles:</h3>
          <ArticlesList articles={otherArticles} />
        </Col>
      </Row>
    </Container>
  );
};

export default ArticlePage;
