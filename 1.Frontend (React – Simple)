import { useEffect, useState } from "react";
function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/properties")
      .then(res => res.json())
      .then(data => setProperties(data));
  }, []);
  return (
    <div style={{ padding: "20px" }}>
      <h2>Rental Properties (For Students & Families)</h2>

      {properties.map((p, index) => (
        <div key={index} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{p.title}</h3>
          <p>Location: {p.location}</p>
          <p>Price: ₹{p.price}</p>
          <p>Type: {p.type}</p>
          <p>Amenities: {p.amenities.join(", ")}</p>
        </div>
      ))}
    </div>
  );}
