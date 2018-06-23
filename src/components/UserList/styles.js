import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.20);

  background: #fff;

  position: absolute;
  margin-top: 20px;
  margin-left: 20px;
  width: 320px;
  height: 200px;
  top: 0;
  left: 0;
`;

export const UserInfo = styled.ul`
  list-style: none;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 3px;
    border-bottom: 1px solid #eee;

    img {
      width: 48px;
    }

    strong {
      font-size: 16px;
      color: #333;
    }

    small {
      font-size: 14px;
      color: #999;
      font-style: italic;
    }

    div {
      display: flex;
      flex-direction: column;
      width: 55%;
    }

    button {
      border: 0;
      border-radius: 100%;
      background: #D45454;
      width: 20px;
      height: 20px;

      i {
        color: #fff;
      }
    }

    &:hover {
      cursor: pointer;
      background: #eee;
    }
  }
`;


export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong {
    font-style: italic;
    color: #737373;
  }

  i {
    margin-top: 20px;
    font-size: 5.73em;
    color: #eee;
  }
`;
