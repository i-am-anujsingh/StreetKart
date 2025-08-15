import React, { useEffect, useState } from "react";
import Input from "../Input.jsx";
import Button from "../Button.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {createResaleItem} from "../../services/resaleService.js";

export default function ResaleForm({ resaleItem }) {
  const { resaleData, setResaleData } = useState({
    itemName: '',
    quantity: null,
    price: null,
    location: '',
  });

  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();
  
  const handleChange =(e)=>{
    const {name, value} = e.target;
    setResaleData((prev)=>({
      ...prev,
      [name] : value,
    }));
  }
  
  
  const submit = async (data) => {
    try {
      const responseItem = await createResaleItem(data);
      responseItem? navigate("/profile") : alert('empty');
    } catch (error) {
      console.log('\n\nERROR :: ',error);
    }
  };
    

    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            submit(resaleData);
        }} className="flex flex-wrap">
            <div className="w-2/3 px-2">
              <Input
                name="itemName"
                value={resaleData.itemName}
                onChange={handleChange}
                label="Item Name:"
                placeholder="e.g., Tomatoes"
                className="mb-4"
                required
              />
              <Input
                name="quantity"
                value={resaleData.quantity}
                onChange={handleChange}
                label="Quantity (kg):"
                placeholder="e.g., 10"
                className="mb-4"
                type="number"
                required
              />
              <Input
                name="price"
                value={resaleData.price}
                onChange={handleChange}
                label="Price (₹):"
                placeholder="e.g., 200"
                className="mb-4"
                type="number"
                required
              />
              <Input
                name="location"
                value={resaleData.location}
                onChange={handleChange}
                label="Location:"
                placeholder="Your area or market"
                className="mb-4"
                required
              />
            </div>
                <button
                  type="submit"
                  className={`w-full ${resaleItem ? "bg-yellow-500" : "bg-blue-600"}`}
                >
                    {resaleItem ? "Update Listing" : "Post Resale Item"}
                </button>
        </form>
    );
}