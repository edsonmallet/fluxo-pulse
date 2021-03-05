import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
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
  padding: 10px;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  overflow: auto;
`;

export const FooterWrapper = styled.footer`
  width: 100%;
  border-top: 1px solid #eee;
  padding: 10px 0;
  display: flex;
  font-size: 0.7rem;
  font-weight: 700;
  bottom: 0;
  height: 50px;
  justify-content: center;
  align-items: center;
`;
