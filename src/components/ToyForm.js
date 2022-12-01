import React, { useState } from "react";

function ToyForm({ callback }) {
  const api = "http://localhost:3001/toys";

  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  const onFormChange = (e) => {
    const newData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newData);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    fetch(api, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        callback(true);
      });
  };

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={onFormSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onFormChange}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={onFormChange}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
