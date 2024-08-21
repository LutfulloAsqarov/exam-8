import React, { useEffect } from "react";
import "./createProduct.scss";
import { useCreateProductMutation } from "../../../context/api/productApi";
import { useGetValue } from "../../../hooks/useGetValue";
// import { useGetCategoriesQuery } from "../../../context/api/categoryApi";
import { toast } from "react-toastify";
import { useGetCategoriesQuery } from "../../../context/api/categoryApi";

const initialState = {
    title: "",
    price: "",
    oldPrice: "",
    units: "",
    categoryId: "",
    desc: "",
    urls: "",
};

const CreateProduct = () => {
    const [createProduct, { isSuccess }] = useCreateProductMutation();
    const { data: categoryData } = useGetCategoriesQuery();
    const { formData, handleChange } = useGetValue(initialState);

    useEffect(() => {
        if (isSuccess) {
            toast.success("Product Yaratildi");
            // formData.title = "";
            // formData.price = "";
            // formData.oldPrice = "";
            // formData.units = "";
            // formData.categoryId = "";
            // formData.desc = "";
            // formData.urls = "";
        }
    }, [isSuccess]);

    const handleSubmit = (e) => {
        e.preventDefault();

        createProduct(formData);
    };

    console.log(categoryData?.payload);

    let categoryItems = categoryData?.payload?.map((el) => (
        <option key={el._id} value={el._id}>
            {el.title}
        </option>
    ));

    return (
        <div>
            <div className="createProduct">
                <h1>Create Product</h1>
                <form
                    action=""
                    className="createProduct__form"
                    onSubmit={handleSubmit}
                >
                    <div className="createProduct__input">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="createProduct__input">
                        <label htmlFor="price">Price</label>
                        <input
                            type="text"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="createProduct__input">
                        <label htmlFor="price">Units</label>
                        <input
                            type="text"
                            name="units"
                            value={formData.units}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="createProduct__input">
                        <label htmlFor="price">Old Price</label>
                        <input
                            type="text"
                            name="oldPrice"
                            value={formData.oldPrice}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="createProduct__input">
                        <label htmlFor="image">Images</label>
                        <input
                            type="file"
                            name="urls"
                            value={formData.urls}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="createProduct__input">
                        <label htmlFor="category">Category</label>
                        <select
                            name="categoryId"
                            value={formData.categoryId}
                            onChange={handleChange}
                        >
                            <option value="">Tanlang</option>
                            {categoryItems}
                        </select>
                    </div>
                    <div className="createProduct__input">
                        <label htmlFor="desc">Desc</label>
                        <textarea
                            id=""
                            rows={4}
                            name="desc"
                            value={formData.desc}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button>Create</button>
                </form>
            </div>
        </div>
    );
};

export default CreateProduct;
