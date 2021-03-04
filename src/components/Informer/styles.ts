import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1 1 auto;
  border: 1px solid red;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const Select = styled.select``;

export const Privacy = styled.div`
  font-size: 0.8rem;
  line-height: 1.3rem;
`;
