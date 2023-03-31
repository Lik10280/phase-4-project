import React from 'react';

function handleDeleteApartment(apartmentId) {
  // add implementation here to delete the apartment with the given id
  console.log(`Deleting apartment with id ${apartmentId}`);
}

function handleUpdateApartment() {
  // add implementation here
}

const style = {
  display: "inline-block",
  width: "500px",
  padding: "10px",
  margin: "5px 10px 10px",
  color: "black",
  fontSize: "20px",
  boxSizing: "border-box",
  backgroundColor: "#f2f2f2", // add background color
  borderRadius: "20px", // add border radius
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // add box shadow
  alignItems: "center" /* move images to the center vertically */
};


function Apartment({ apartment, onDeleteApartment, onUpdateApartment, edit, age }) {
  const { id, rent, num_of_bedrooms, num_of_bathrooms, user } = apartment;
  const { occupation, interest } = user || {};
  const detail = true;
  const error = "An error occurred.";

  function handleDelete() {
    onDeleteApartment(id);
  }

  return (
    <div style={style}>
      <img src={apartment.image_url} alt={apartment.location} style={{ width: "100%" }} />
      <h2>{apartment.location}</h2>
      {edit ? (
        <div>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={onUpdateApartment}>Edit</button>
        </div>
      ) : null}
      {detail ? (
        <div>
          <p>rent per month: $ {rent}</p>
          <p>number of bedrooms: {num_of_bedrooms}</p>
          <p>number of bathrooms: {num_of_bathrooms}</p>
          <p>roommate age: {age}</p>
          {occupation && <p>roommate occupation: {occupation}</p>}
          <p>interest: {interest}</p>
        </div>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}

function App() {
  const apartments = [
    {
      id: 1,
      location: "123 Main St",
      rent: 1000,
      num_of_bedrooms: 2,
      num_of_bathrooms: 1,
      image_url: "https://placeimg.com/640/480/architecture",
      user: {
        age: 25,
        occupation: "Software Engineer",
        interest: "Gardening"
      }
    },
    // ...
  ];

  return (
    <div>
      {apartments.map((apartment) => (
        <Apartment
          key={apartment.id}
          apartment={apartment}
          onDeleteApartment={handleDeleteApartment}
          onUpdateApartment={handleUpdateApartment}
          edit={true}
          age={apartment.user.age}
        />
      ))}
    </div>
  );
}

export default Apartment;
