import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Filter from "./Filter";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "400px",
  padding: "20px",
  margin: "0 auto",
  backgroundColor: "#f8f8f8",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.1)"
};

const labelStyle = {
  fontWeight: "bold",
  marginBottom: "5px"
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "20px",
  border: "none",
  borderRadius: "5px",
  boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.1)"
};

const errorStyle = {
  color: "red",
  marginTop: "10px"
};

function NewApartment({user, apartments, onChangeApartments, types}) {
  const defaultForm = {    
    location:"",
    rent:"",
    num_of_bedrooms:"",
    num_of_bathrooms:"",
    image_url:""
  };
  const [formData, setFormData]=useState(defaultForm);
  const [typeId, setTypeId]=useState(1); 
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleAddApartment(newApartment) {
    onChangeApartments([...apartments, newApartment]);
  }

  function handleChange(e){
    const key = e.target.name;
    const value = (key === "location" || key === "image_url") ? e.target.value : parseInt(e.target.value);
    setFormData({
      ...formData,
      [key]:value,
      type_id:typeId
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    fetch('/apartments',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(formData)
    })
    .then(r=>{
      if(r.ok){
        r.json().then((a)=>handleAddApartment(a));
        history.push("/mylist");
      } else {
        r.json().then((e)=>setErrors(e.errors));
      }
    });
  }

  return (
    !user ? <h1>Please log in to post your apartment!</h1> :
    <div style={style}>
      <h3>Share apartment information</h3>
      <Filter onChangeId={setTypeId} types={types}/>
      <form className="NewItem" onSubmit={handleSubmit}>
        <label style={labelStyle}>Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} style={inputStyle}/>
        <label style={labelStyle}>Rent:</label>
        <input type="text" name="rent" value={formData.rent} onChange={handleChange} style={inputStyle}/>
        <label style={labelStyle}>Number of Bedrooms:</label>
        <input type="text" name="num_of_bedrooms" value={formData.num_of_bedrooms} onChange={handleChange} style={inputStyle}/>
        <label style={labelStyle}>Number of Bathrooms:</label>
        <input type="text" name="num_of_bathrooms" value={formData.num_of_bathrooms} onChange={handleChange} style={inputStyle}/>
        <label style={labelStyle}>Image URL:</label>
        <textarea type="text" name="image_url"value={formData.image_url} onChange={handleChange}/>

<button type="submit">Save</button>
</form>
{errors.map((err) => (
        <p key={err}>{err}</p>
))}
</div>
);
}

export default NewApartment;