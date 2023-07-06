import React from "react";
import { useLoaderData } from "react-router-dom";

export default function UserDetails() {
  const user = useLoaderData();
  const { name, email, phone, address } = user;
  console.log(user);
  return (
    <div>
      <div className="user-details">
        <h3>Name: {name}</h3>
        <p>Email: {email}</p>
        <p>phone: {phone}</p>
        <address>
          {address.street},{address.suite}
          <br></br>
          {address.city}, {address.zipcode}
        </address>
      </div>
    </div>
  );
}
