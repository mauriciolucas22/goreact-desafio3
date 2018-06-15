import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-between;

  img {
    height: 48px;
    width: 48px;
    border-radius: 100px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7px;
  flex-grow: 1;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  margin-left: 10px;
  padding: 20px;

  i {
    color: #ff0000;
  }
`;
