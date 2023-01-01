import styled from 'styled-components';

export const CardWrapper = styled.div`
  max-width: 864px;
  max-heigth: 212px;
  width: 100%;
  heigth: 212px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.baseProfile};
  padding: 32px 40px;

  display: flex;
  justify-content: flex-start;
  gap: 32px;
  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`;

export const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CardContentTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.baseTitle};

  div {
    span {
    }
  }
`;

export const CardContentDescription = styled.div`
  margin-top: 8px;
`;

export const CardContentLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;
