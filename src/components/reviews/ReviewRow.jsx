// React & Router
import React from "react";

// Styled Components
import { Row, DataContainer, DataContainerButton } from "./ReviewRowStyled";

// Component that creates a table row for the bookings table
export const ReviewRow = ({ review }) => {
  // Here I display a star based on the user´s given rating
  const stars = [];
  let i = 0;
  while (i < review.stars) {
    stars.push(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30"
        width="30"
        viewBox="0 0 48 48"
        key={i}
      >
        <path d="m11.65 44 3.25-14.05L4 20.5l14.4-1.25L24 6l5.6 13.25L44 20.5l-10.9 9.45L36.35 44 24 36.55Z" />
      </svg>
    );
    i++;
  }

  return (
    <Row key={review.id}>
      <DataContainer className="data-container__text">
        <p>#{review.id}</p>
      </DataContainer>
      <DataContainer className="data-container__text">
        <p>{review.date}</p>
      </DataContainer>
      <DataContainer className="data-container__text">
        <p>{review.user.name}</p>
      </DataContainer>
      <DataContainer className="data-container__text">
        <div>{stars}</div>
        <p>{review.message.body}</p>
      </DataContainer>
      <DataContainerButton>
        <button className="green">Publish</button>
        <button className="red">Archive</button>
      </DataContainerButton>
    </Row>
  );
};