import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;

  img {
    height: 48px;
    width: 48px;
    border-radius: 100px;
  }
`;

export const Info = styled.div`
  display: column;
  margin-left: 7px;
  flex-grow: 1;
`;
