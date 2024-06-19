import styled from "styled-components";

const Space = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Category = styled.div`
  position: relative;
  top: 9rem;
  width: 120rem;
  height: 5rem;
  display: flex;
  padding: 0 7rem;
  justify-content: flex-start;
  color: rgba(255, 255, 255, 0.7);
  gap: 5rem;
  font-size: 3rem;
  font-weight: 200;
  cursor: pointer;

  @media (max-width: 768px) {
    /* 768px 이하의 화면 크기에서 적용 */
    width: 44rem;
  }
`;

const InlineCon = styled.div`
  width: 120rem;
  height: 160vh;
  min-height: 108rem;
  max-height: 150rem;
  background: ${(props) =>
    props.color === "orange"
      ? "var(--gradientorange)"
      : "var(--gradientpurple)"};
  border-radius: 5rem;
  margin-top: 10rem;

  @media (max-width: 768px) {
    /* 768px 이하의 화면 크기에서 적용 */
    width: 44rem;
  }
`;

const InlineContainer = ({ color, contents, category }) => {
  return (
    <>
      <Space>
        {/* <Category>{category}</Category> */}
        <InlineCon color={color}>{contents}</InlineCon>
      </Space>
    </>
  );
};

export default InlineContainer;
