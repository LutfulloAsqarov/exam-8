import React, { useState } from "react";
import Model from "../../../components/model/Model";

import {
    useDeleteCategoryMutation,
    useGetCategoriesQuery,
    useUpdateCategoryMutation,
} from "../../../context/api/categoryApi";

const ManageCategory = () => {
    let [deleteCategory] = useDeleteCategoryMutation();
    const [catId, setCatId] = useState(null);
    const [editCategory, setEditCategory] = useState(null);
    const [updateCategory] = useUpdateCategoryMutation();
    const { data: categoryData } = useGetCategoriesQuery();

    const handleUpdatedUser = (e) => {
        e.preventDefault();
        let updatePro = {
            title: editCategory.title,
        };
        updateCategory({ body: updatePro, id: editCategory._id });
        setEditCategory(false);
    };

    return (
        <div className="products manageProduct">
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
                            gap: "30px",
                        }}
                    >
                        <p>{el.title}</p>
                        <div className="products__card__manage-btns">
                            <button onClick={() => setEditCategory(el)}>
                                Edit
                            </button>
                            <button onClick={() => setCatId(el._id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {catId ? (
                <Model close={setCatId} width={300}>
                    <h2 style={{ textAlign: "center" }}>Are you sure</h2>
                    <div style={{ display: "flex" }}>
                        <button
                            onClick={() => {
                                deleteCategory(catId);
                                setCatId(null);
                            }}
                        >
                            Yes
                        </button>
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

                        <button>Save</button>
                    </form>
                </Model>
            ) : (
                <></>
            )}
        </div>
    );
};

export default ManageCategory;
