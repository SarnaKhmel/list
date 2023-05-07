import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  margin: 10px 0;
  width: 60vw;
  background-color: bisque;
  border-radius: 15px;
`;

export const Item = styled.li`
  width: 500px;
  margin: 10px 5px;
  background-color: rgb(14, 123, 234);
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
`;

export const Name = styled.h2`
  width: 300px;
  text-align: center;
`;
