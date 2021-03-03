import styled from 'styled-components';

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderWrapper = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10px;
  width: 100%;
`;

export const MainWrapper = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterWrapper = styled.footer`
  width: 100%;
  border-top: 1px solid #eaeaea;
  padding-bottom: 10px;
  display: flex;
  font-size: 0.7rem;
  font-weight: 700;
  justify-content: center;
  align-items: center;
`;
