import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Input from '../components/Input';
import TodoList from '../components/TodoList';

const Main = () => {
  return (
    <div>
      <Header />
      <StyledMain>
        <Input />
        <TodoList isActive={true} />
        <TodoList isActive={false} />
      </StyledMain>
      <Footer />
    </div>
  );
};

export default Main;

const StyledMain = styled.div`
  background-color: pink;
  padding: 20px;
`;
