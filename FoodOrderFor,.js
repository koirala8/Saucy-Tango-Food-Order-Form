import React, { useState } from "react";

function FoodOrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Order Successful!

          Your order was ${order}.

          Please show your confirmation number for pickup.`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label htmlFor="phone">Phone:</label>
      <input id="phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <label htmlFor="address">Address:</label>
      <input id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      <label htmlFor="order">Order:</label>
      <input id="order" type="text" value={order} onChange={(e) => setOrder(e.target.value)} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default FoodOrderForm;
