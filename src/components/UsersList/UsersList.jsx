import "./UsersList.css";
import { FcLike, FcDislike } from "react-icons/fc";

import { Container, List } from "./UsersList.styled";
import User from "./User";
const UsersList = ({ customers }) => {
  //   console.log("UsersList", customers);
  return (
    <>
      <div className="container">
        <ul className="list">
          {customers.map((customer) => (
            <li className="item" key={customer.id}>
              <h3>{customer.online === true ? <FcLike /> : <FcDislike />}</h3>
              <img className="avatar" src={customer.avatar} alt={customer.id} />
              <h2 className="name">{customer.name}</h2>
            </li>
          ))}
        </ul>
      </div>
      <Container>
        <List>
          {customers.map((customer) => (
            <User customer={customer} />
          ))}
        </List>
      </Container>
    </>
  );
};

export default UsersList;
