import React from "react";

function Filter({types, onChangeId}) {

    function handleFilter(e) {
        if (Array.isArray(types)) {
          const filteredTypes = types.filter(type => type.name === e.target.value);
          if (filteredTypes.length > 0) {
            onChangeId(filteredTypes[0].id);
          }
        }
      }
      

    return(
        <div>
            <label>Choose a home type: </label>
            <select
            name="type_id"
            onChange={handleFilter}
            >
                <option value="Houses">Houses</option>
                <option value="Townhomes">Townhomes</option>
                <option value="Multi-family">Multi-family</option>
                <option value="Condos">Condos</option>
                <option value="Co-ops">Co-ops</option>
            </select>
        </div>
    )
}
export default Filter