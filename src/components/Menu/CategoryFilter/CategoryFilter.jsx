import React from "react";
import "./CategoryFilter.css";

const categories = [
    "All",
    "Traditional Stews & Wat",
    "Tibs & Grills",
    "Fasting & Vegan / Tsom",
    "Raw & Cured Delicacies / Kitfo",
    "Beverages & Tej",
];

function CategoryFilter({ category, setCategory, dishes }) {

    return (
        <div className="category-filter">
            <div className="category-filter-buttons">

                {categories.map((item) => {

                    const count = item === "All" ? dishes.length : dishes.filter( (dish) => dish.category === item ).length;
                    return (
                        <button
                            key={item}
                            onClick={() => setCategory(item)}
                            className={
                                category === item
                                    ? "category-filter-button active"
                                    : "category-filter-button"
                            }
                        >
                            {item === "All" ? "All dishes" : item} {" "}
                            <span>({count})</span>
                        </button>
                    );
                })}

            </div>
        </div>
    );
}

export default CategoryFilter;