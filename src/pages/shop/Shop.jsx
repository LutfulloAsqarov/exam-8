import React, { useEffect, useState } from "react";
import "./shop.scss";
import { useGetProductsQuery } from "../../context/api/productApi";
import Products from "../../components/products/Products";
import { TbFilters } from "react-icons/tb";
import { FaChevronRight } from "react-icons/fa6";
import { Slider, Switch } from "antd";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useGetCategoriesQuery } from "../../context/api/categoryApi";
import Loading from "../../components/loading/Loading.jsx";

const Shop = () => {
    const [categoryValue, setCategoryValue] = useState("");
    const [min, setMin] = useState(20);
    const [max, setMax] = useState(50);
    let limit = 3;
    const [page, setPage] = useState(1);
    const { data, isLoading } = useGetProductsQuery({
        limit,
        skip: page,
        category: categoryValue,
    });
    const { data: categories } = useGetCategoriesQuery();
    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    let totalCount = Math.ceil(data?.total / limit) || 0;

    let categoryItems = categories?.payload?.map((el) => (
        <li key={el._id}>
            <data
                value={el._id}
                onClick={(e) => setCategoryValue(e.target.value)}
                className="shop__left-item"
            >
                {el.title}
                <FaChevronRight />
            </data>
        </li>
    ));

    return (
        <div className="shop container">
            <div className="shop__left">
                <div className="shop__left-top">
                    <h3>Filters</h3>
                    <TbFilters />
                </div>
                <ul className="shop__left-list">
                    <li>
                        <data
                            value=""
                            onClick={(e) => setCategoryValue(e.target.value)}
                            className="shop__left-item"
                        >
                            All
                            <FaChevronRight />
                        </data>
                    </li>
                    {categoryItems}
                </ul>
                <div className="shop__left-price">
                    <h3>
                        Price
                        <FaChevronRight />
                    </h3>
                    <Slider
                        range
                        step={10}
                        defaultValue={[min, max]}
                        onChange={(e) => setMin(e)}
                        onChangeComplete={(e) => setMax(e)}
                    />
                </div>
            </div>
            <div className="shop__right">
                <h2>Casual</h2>

                {isLoading ? (
                    <Loading limit={3} />
                ) : (
                    <div className="shop__right-card">
                        <Products data={data?.payload} />
                    </div>
                )}

                <Stack spacing={2} className="pagination">
                    <Pagination
                        count={totalCount}
                        page={page}
                        onChange={handleChange}
                    />
                </Stack>
            </div>
        </div>
    );
};

export default Shop;
