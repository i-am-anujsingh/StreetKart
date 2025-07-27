import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../Input.jsx";
import Button from "../Button.jsx";
// import service from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
        // const file = data.image[0] ? await service.uploadFile(data.image[0]) : null;
// 
//         const resaleData = {
//             ...data,
//             image: file ? file.$id : undefined,
//             sellerId: userData.$id,
//         };
// 
//         let dbResaleItem;
//         if (resaleItem) {
//             dbResaleItem = await service.updateResaleItem(resaleItem.$id, resaleData);
//         } else {
//             dbResaleItem = await service.createResaleItem(resaleData);
//         }
// 
//         if (dbResaleItem) {
//             navigate(`/resale/${dbResaleItem.$id}`);
//         }
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