import React from "react";
import articleContent from "../pages/article-content";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const ArticlesList = ({ articles }) => (
    <>
    {articles.map((article, key) => (
        <Link className="article-list-item" key={key} to={`/funders-shareholders/${article.name}`}>
            <Container>
                <Row>
                    <Col className="article-title">
                        <h3>{article.title}</h3>
                    </Col>
                    <Col className="article-content">
                        <p>{article.content[0].substring(0, 150)}...</p>
                    </Col>
                </Row>
            </Container>
        </Link>
    ))}
    </>
);

export default ArticlesList;