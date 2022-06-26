import React from "react";

const AddRestaurant = () => {
  return (
    <div className="mb-4 ms-5 mt-5">
      <form action="">
        <div className="row">
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="name" />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="location"
            />
          </div>
          <div className="col-md-3">
            <select className="form-select ">
              <option disabled>Price range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <div className="col-md-1">
            <button className="btn btn-primary">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
