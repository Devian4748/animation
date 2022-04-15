import { Fragment } from 'react';
import styled from 'styled-components';
import Layout from './components/Layout';
import GlobalStyle from './GobalStyle';
import Router from './Router';

const Main = styled.main`
  width: 90vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: #fff;
  font-weight: bold;
  padding: 1rem 2rem;
`;

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Main>
        <Title>Animation</Title>
        <Wrapper>
          <Layout>
            <Router />
          </Layout>
        </Wrapper>
      </Main>
    </Fragment>
  );
};

export default App;
