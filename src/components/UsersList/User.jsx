import React from "react";
import { Item, Avatar, Name } from "./UsersList.styled";

const User = ({ customer }) => {
  return (
    <div>
      <Item key={customer.id}>
        <Avatar src={customer.avatar} alt={customer.id} />
        <Name>{customer.name}</Name>
      </Item>
    </div>
  );
};

export default User;
