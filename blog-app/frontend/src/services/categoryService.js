const createCategories = async (category) => {
  const response = await fetch("https://ix-blog-app-2d5c689132cd.herokuapp.com/api/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });

  if (!response.ok) {
    let res = await response.json();
    throw res.message || res;
  }

  const categoriesApiData = await response.json();
  return categoriesApiData;
};

const getCategories = async () => {
  try {
    const data = await fetch(
      "https://ix-blog-app-2d5c689132cd.herokuapp.com/api/categories",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const categoryAPIData = await data.json();
    console.log(categoryAPIData.message);
    return categoryAPIData.data;
  } catch (err) {
    // return err;
  }
};

const updateCategory = async (id) => {
  try {
    const data = await fetch("https://ix-blog-app-2d5c689132cd.herokuapp.com/api/categories/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const categoryApiData = await data.json();
    return categoryApiData.data;
  } catch (error) {
    // return error;
  }
};

const deleteBlog = async (id) => {
  try {
    const data = await fetch("https://ix-blog-app-2d5c689132cd.herokuapp.com/api/categories/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const categoryApiData = await data.json();
    return categoryApiData.data;
  } catch (error) {
    // return error;
  }
};

const categoryService = {
  getCategories,
  createCategories,
  updateCategory,
  deleteBlog,
};

export default categoryService;
