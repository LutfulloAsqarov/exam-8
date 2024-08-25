import React, { useEffect } from "react";
import {
    useCreateCategoryMutation,
    useGetCategoriesQuery,
} from "../../../context/api/categoryApi";
import { useGetValue } from "../../../hooks/useGetValue";
import { toast } from "react-toastify";
import { Button } from "antd";

import "./createCategory.scss";
const initialState = {
    title: "",
};

const CreateCategory = () => {
    const [createCategory, { isSuccess, isLoading }] =
        useCreateCategoryMutation();
    const { data: categoryData } = useGetCategoriesQuery();
    const { formData, handleChange } = useGetValue(initialState);

    useEffect(() => {
        if (isSuccess) {
            toast.success("Category Yaratildi");
            formData.title = "";
        }
    }, [isSuccess]);

    const handleSubmit = (e) => {
        e.preventDefault();
        createCategory(formData);
    };

    return (
        <div>
            <div className="createCategory">
                <h1>Create Category</h1>
                <form
                    action=""
                    className="createCategory__form"
                    onSubmit={handleSubmit}
                >
                    <div className="createCategory__input">
                        <label htmlFor="title">Category</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>
                    <Button
                        loading={isLoading}
                        className="w-full"
                        type="dark"
                        htmlType="submit"
                    >
                        {isLoading ? "Loading..." : "Create"}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default CreateCategory;
