import React from "react";

const RestaurantList = () => {
  return (
    <div className="list-group m-5 restaurantList">
      <table className="table table-hover table-striped">
        <thead>
          <tr className="bg-primary text-light">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>Telepizza</td>
                <td>Kolobrzeg</td>
                <td>100</td>
                <td>4/5</td>
                <td><button className="btn btn-warning">Update</button></td>
                <td><button className="btn btn-danger">Delete</button></td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
