import React, { useState } from "react";
import styled from "styled-components";

type OrderByOption = "nada" | "nomePesquisa" | "outroTipoDeOrdenacao"; 
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
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23333' d='M0 0h12L6 8'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: calc(100% - 8px) center; 
  padding-right: 30px; 
  font-weight: 700;
  color: var(--dsc-color-font-primary);
`;

type OrderButtonProps = {
  orderBy: OrderByOption;
  onOrderByChange: (orderBy: OrderByOption) => void;
}


const OrderButton = ({ orderBy, onOrderByChange} : OrderButtonProps) => {

  const handleOrderByChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onOrderByChange(event.target.value as OrderByOption);
  };

  return (
    <div>
      <StyledLabel htmlFor="orderBy">Ordenar por</StyledLabel>
      <StyledSelect
        id="orderBy"
        value={orderBy}
        onChange={handleOrderByChange}
      >
        <option value="nada">Nada</option>
        <option value="nomePesquisa">Ordem Alfabética</option>
        <option value="outroTipoDeOrdenacao">Ordem Aleatória </option>
      </StyledSelect>
    </div>
  );
};

export default OrderButton;
