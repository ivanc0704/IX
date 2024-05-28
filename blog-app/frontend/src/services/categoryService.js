const getCategories = async ()=>{
    try{
        const data = await fetch(
            "https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs/category?iid=[category-id]", 
            {
        method:"GET",
        headers: {
            "Content-type": "application/json",
        },
    }
);
const categoriesApiData = await data.json();
return categoriesApiData.data;
} catch (error) {
    throw new Error(error);
}
};

    

const categoryService = {
    getCategories
}

export default categoryService;