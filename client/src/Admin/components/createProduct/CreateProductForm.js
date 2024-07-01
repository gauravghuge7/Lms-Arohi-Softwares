import React from "react";
import './CreateProductForm.css';

const CreateProductForm = () => {
  return (
    <div className="create-product-form">
      <header>
        <h1>List of bookings</h1>
        <button className="add-booking-button">+ Add booking</button>
      </header>
      <div className="booking-list-controls">
        <label>
          Show
          <select>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          entries
        </label>
        <input type="text" placeholder="Search:" />
      </div>
      <div className="booking-list">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Class type</th>
              <th>Price type</th>
              <th>Price</th>
              <th>Added by</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="7">No data available in table</td>
            </tr>
          </tbody>
        </table>
        <div className="pagination">Showing 0 to 0 of 0 entries</div>
      </div>
    </div>
  );
};

export default CreateProductForm;
