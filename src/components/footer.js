import React from "react";
import styled from "styled-components";

const Tag = styled.small`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export default function Footer() {
  return (
    <div>
      <Tag>Made with ❤️ in {new Date().getFullYear()}</Tag>
    </div>
  );
}
