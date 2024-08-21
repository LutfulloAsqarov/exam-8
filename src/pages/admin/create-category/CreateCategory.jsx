import React, { useEffect } from "react";
import {
    useCreateCategoryMutation,
    useGetCategoriesQuery,
} from "../../../context/api/categoryApi";
import { useGetValue } from "../../../hooks/useGetValue";
import { toast } from "react-toastify";

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
            <div className="createProduct">
                <h1>Create Category</h1>
                <form
                    action=""
                    className="createProduct__form"
                    onSubmit={handleSubmit}
                >
                    <div className="createProduct__input">
                        <label htmlFor="title">Category</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>

                    <button disabled={isLoading} className="create-btn">
                        {isLoading ? "sabr..." : "Create"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateCategory;
