import * as React from "react";
import styled from "styled-components";

export const CardSeries = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1em 1em;
  font-size: 16px;
  position: relative;
  color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.25) 6px 8px 20px;
  font-family: "Open Sans";

  overflow: hidden;

  padding: 1em;
  transition: all 0.3s ease 0s;
`;

const CardStyle = styled.div`
  border-radius: 15px;
  display: grid;
  min-height: 15.625em;
  max-width: 250px;
  z-index: 1;
  position: relative;
  grid-template: auto 1fr 4fr 1fr none;
  gap: 0.625em 0.625em;
  background-color: ${props => props.color || "palevioletred"};
`;

const Header = styled.div`
  font-weight: 900;
  text-transform: uppercase;
  font-size: 1em;
  letter-spacing: 1px;
  text-align: left;
  font-family: "Open Sans";
`;

export function Card(props: any) {
  return (
    <CardStyle {...props}>
      <Header>{props.title}</Header>
    </CardStyle>
  );
}
