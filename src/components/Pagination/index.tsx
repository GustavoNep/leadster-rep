import styled from "styled-components";

const PageStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 20px;
  user-select: none;
  span {
    display: flex;
    align-items: center;
    font-weight: 700;
    margin-right: 2px;
  }

  .pagination-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin: 0 1px;
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: border-color 0.3s ease;

    &:hover {
      color: #2c83fb;
      font-weight: 700;
      border-color: #2c83fb;
    }
  }
`;

export default function Pagination() {
  return (
    <PageStyle>
      <span>Página</span>
      <div className="pagination">
        <div className="pagination-item">1</div>
        <div className="pagination-item">2</div>
        <div className="pagination-item">3</div>
        <div className="pagination-item">4</div>
      </div>
    </PageStyle>
  );
}
