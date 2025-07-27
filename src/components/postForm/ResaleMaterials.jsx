import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../Input.jsx";
import Button from "../Button.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  createResaleItem,
  updateResaleItem,
  getFilePreview,
} from "../../services/resaleService.js";

export default function ResaleForm({ resaleItem }) {
    const { register, handleSubmit, setValue, getValues } = useForm({
        defaultValues: {
            itemName: resaleItem?.itemName || "",
            quantity: resaleItem?.quantity || "",
            price: resaleItem?.price || "",
            location: resaleItem?.location || "",
        },
    });

    const userData = useSelector((state) => state.auth.userData);
    const navigate = useNavigate();
const submit = async (data) => {
    const formData = new FormData();
    formData.append("itemName", data.itemName);
    formData.append("quantity", data.quantity);
    formData.append("price", data.price);
    formData.append("location", data.location);
    formData.append("sellerId", userData._id); // or userData.$id if you're using Appwrite/Mongo
    if (data.image[0]) {
        formData.append("image", data.image[0]);
    }

    let responseItem;
    if (resaleItem) {
        responseItem = await updateResaleItem(resaleItem._id, formData);
    } else {
        responseItem = await createResaleItem(formData);
    }

    if (responseItem) {
        navigate(`/resale/${responseItem._id}`);
    }
};
    

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Item Name:"
                    placeholder="e.g., Tomatoes"
                    className="mb-4"
                    {...register("itemName", { required: true })}
                />
                <Input
                    label="Quantity (kg):"
                    placeholder="e.g., 10"
                    className="mb-4"
                    type="number"
                    {...register("quantity", { required: true, min: 1 })}
                />
                <Input
                    label="Price (₹):"
                    placeholder="e.g., 200"
                    className="mb-4"
                    type="number"
                    {...register("price", { required: true, min: 1 })}
                />
                <Input
                    label="Location:"
                    placeholder="Your area or market"
                    className="mb-4"
                    {...register("location", { required: true })}
                />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Item Image:"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg"
                    {...register("image", { required: !resaleItem })}
                />
                {resaleItem && resaleItem.image && (
                    <div className="w-full mb-4">
                        <img
                            src={service.getFilePreview(resaleItem.image)}
                            alt={resaleItem.itemName}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Button type="submit" bgColor={resaleItem ? "bg-yellow-500" : "bg-blue-600"} className="w-full">
                    {resaleItem ? "Update Listing" : "Post Resale Item"}
                </Button>
            </div>
        </form>
    );
}