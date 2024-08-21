import React, { useEffect, useState } from "react";
import {
    useDeleteProductMutation,
    useGetProductsQuery,
    useUpdateProductMutation,
} from "../../../context/api/productApi";
import Products from "../../../components/products/Products";
import "./manageProduct.scss";
import Model from "../../../components/model/Model";
// import { useGetCategoriesQuery } from "../../../context/api/categoryApi";

// const initialState = {
//     title: "",
//     price: "",
//     category: "",
//     description: "",
//     images: [],
// };

const ManageProduct = () => {
    const [editProduct, setEditProduct] = useState(null);
    // const [show, setShow] = useState(false);
    let { data } = useGetProductsQuery();
    // console.log(data?.payload);
    const [updateProduct] = useUpdateProductMutation();
    // const { data: categoryData } = useGetCategoriesQuery();

    // const handleEdit = (el) => {
    //     setEditProduct(el);
    // };

    const handleUpdatedUser = (e) => {
        e.preventDefault();
        let updatePro = {
            title: editProduct.title,
            price: editProduct.price,
            category: editProduct.category,
            description: editProduct.description,
        };
        updateProduct({ body: updatePro, id: editProduct.id });
        setEditProduct(false);
    };

    // let categoryItems = categoryData?.map((el) => (
    //     <option key={el.id} value={el.title}>
    //         {el.title}
    //     </option>
    // ));

    return (
        <div className="products manageProduct">
            <div className="products__cards manageProduct__cards">
                <Products
                    // key={el._id}
                    data={data?.payload}
                    setEditProduct={setEditProduct}
                />
            </div>
            {editProduct ? (
                <Model width={600} close={setEditProduct}>
                    <form
                        action=""
                        className="createProduct__form"
                        onSubmit={handleUpdatedUser}
                    >
                        <div className="createProduct__input">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                value={editProduct.title}
                                onChange={(e) =>
                                    setEditProduct((prev) => ({
                                        ...prev,
                                        title: e.target.value,
                                    }))
                                }
                            />
                        </div>
                        <div className="createProduct__input">
                            <label htmlFor="price">Price</label>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                value={editProduct.price}
                                onChange={(e) =>
                                    setEditProduct((prev) => ({
                                        ...prev,
                                        price: e.target.value,
                                    }))
                                }
                            />
                        </div>
                        {/* <div className="createProduct__input">
                            <label htmlFor="image">Image</label>
                            <input
                                type="text"
                                value={editProduct.image}
                                onChange={(e) =>
                                    setEditProduct((prev) => ({
                                        ...prev,
                                        image: e.target.value,
                                    }))
                                }
                                id="image"
                            />
                        </div> */}
                        {/* <div className="createProduct__input">
                            <label htmlFor="category">Category</label>
                            <select
                                name="category"
                                value={editProduct.category}
                                onChange={(e) =>
                                    setEditProduct((prev) => ({
                                        ...prev,
                                        category: e.target.value,
                                    }))
                                }
                            >
                                {categoryItems}
                            </select>
                        </div> */}
                        <div className="createProduct__input">
                            <label htmlFor="desc">Desc</label>
                            <textarea
                                name="description"
                                rows={4}
                                id="description"
                                value={editProduct.description}
                                onChange={(e) =>
                                    setEditProduct((prev) => ({
                                        ...prev,
                                        description: e.target.value,
                                    }))
                                }
                            ></textarea>
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

export default ManageProduct;
