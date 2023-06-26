import React, { useState } from "react";
import styled from "styled-components";

type OrderByOption = "dataPublicacao" | "outroTipoDeOrdenacao"; // Adicione outros tipos de ordenação 
const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-right: 8px;
`;

const StyledSelect = styled.select`
  padding: 6px;
  border: 1px solid black;
  border-radius: 9px;
  appearance: none; 
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23333' d='M0 0h12L6 8'/%3E%3C/svg%3E"); /* Adiciona uma seta customizada */
  background-repeat: no-repeat;
  background-position: calc(100% - 8px) center; 
  padding-right: 20px; 
  font-weight: 700;
  color: var(--dsc-color-font-primary);
`;

const OrderButton = () => {
  const [orderBy, setOrderBy] = useState<OrderByOption>("dataPublicacao");

  const handleOrderByChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setOrderBy(event.target.value as OrderByOption);
  };

  return (
    <div>
      <StyledLabel htmlFor="orderBy">Ordenar por</StyledLabel>
      <StyledSelect
        id="orderBy"
        value={orderBy}
        onChange={handleOrderByChange}
      >
        <option value="dataPublicacao">Data de publicação</option>
        <option value="outroTipoDeOrdenacao">Outro tipo </option>
      </StyledSelect>
    </div>
  );
};

export default OrderButton;
