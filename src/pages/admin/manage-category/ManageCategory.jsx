import React, { useEffect, useState } from "react";
import Model from "../../../components/model/Model";

import {
    useDeleteCategoryMutation,
    useGetCategoriesQuery,
    useUpdateCategoryMutation,
} from "../../../context/api/categoryApi";
import { Button } from "antd";

const ManageCategory = () => {
    let [deleteCategory, { isLoading: delLoading, isSuccess: delSuccess }] =
        useDeleteCategoryMutation();
    const [catId, setCatId] = useState(null);
    const [editCategory, setEditCategory] = useState(null);
    const [updateCategory, { isLoading, isSuccess }] =
        useUpdateCategoryMutation();
    const { data: categoryData } = useGetCategoriesQuery();

    const handleUpdatedUser = (e) => {
        e.preventDefault();
        let updatePro = {
            title: editCategory.title,
        };
        updateCategory({ body: updatePro, id: editCategory._id });
    };

    useEffect(() => {
        if (isSuccess) {
            setEditCategory(false);
        }
        if (delSuccess) {
            setCatId(null);
        }
    }, [isSuccess, delSuccess]);

    return (
        <div className="products manageProduct" style={{ padding: "30px" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                }}
            >
                {categoryData?.payload?.map((el) => (
                    <div
                        key={el._id}
                        className="category"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "30px",
                            width: "300px",
                            padding: "20px",
                            boxShadow: "0 0 10px #ddd",
                            borderRadius: "8px",
                        }}
                    >
                        <p>{el.title}</p>
                        <div
                            className="products__card__manage-btns"
                            style={{ display: "flex", gap: "6px" }}
                        >
                            <button
                                onClick={() => setEditCategory(el)}
                                style={{
                                    padding: "5px 8px",
                                    border: "1px solid #ddd",
                                    borderRadius: "4px",
                                }}
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => setCatId(el._id)}
                                style={{
                                    padding: "5px 8px",
                                    border: "1px solid #ddd",
                                    borderRadius: "4px",
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {catId ? (
                <Model close={setCatId} width={300}>
                    <h2 style={{ textAlign: "center" }}>Are you sure</h2>
                    <div style={{ display: "flex", gap: "6px" }}>
                        <Button
                            loading={delLoading}
                            className="w-full"
                            type="dark"
                            htmlType="submit"
                            onClick={() => {
                                deleteCategory(catId);
                            }}
                        >
                            {isLoading ? "" : "Yes"}
                        </Button>
                        <button onClick={() => setCatId(null)}>No</button>
                    </div>
                </Model>
            ) : (
                <></>
            )}
            {editCategory ? (
                <Model width={600} close={setEditCategory}>
                    <form
                        action=""
                        className="createProduct__form"
                        onSubmit={handleUpdatedUser}
                    >
                        <div className="createProduct__input">
                            <label htmlFor="title">Category</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                value={editCategory.title}
                                onChange={(e) =>
                                    setEditCategory((prev) => ({
                                        ...prev,
                                        title: e.target.value,
                                    }))
                                }
                            />
                        </div>

                        <Button
                            loading={isLoading}
                            className="w-full"
                            type="dark"
                            htmlType="submit"
                        >
                            {isLoading ? "Loading..." : "Save"}
                        </Button>
                    </form>
                </Model>
            ) : (
                <></>
            )}
        </div>
    );
};

export default ManageCategory;
