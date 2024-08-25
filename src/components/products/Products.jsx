import React from "react";
import Product from "../product/Product";

const Products = ({ data, setEditProduct }) => {
    return (
        <>
            {data?.map((product) => (
                <Product
                    product={product}
                    key={product._id}
                    setEditProduct={setEditProduct}
                />
            ))}
        </>
    );
};

export default Products;
