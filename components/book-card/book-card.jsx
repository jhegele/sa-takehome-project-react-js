import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

export const BookCard = ({
  id,
  title,
  author,
  description,
  amount,
  imgSrc,
  onPurchase,
}) => {
  return (
    <Card className="shadow h-100">
      <Card.Img variant="top" src={imgSrc} alt="..." />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <strong className="text-secondary">{author}</strong>
        <Card.Text className="mt-3">{description}</Card.Text>
        <div className="d-grid">
          <Button
            variant="primary"
            onClick={() => onPurchase(id)}
          >{`Purchase - $${(amount / 100).toFixed(2)}`}</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

BookCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  onPurchase: PropTypes.func.isRequired,
};
