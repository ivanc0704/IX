import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";

import { useParams, Link } from "react-router-dom";

import "./index.css";

import blogService from "../../services/blogService";
import categoryService from "../../services/categoryService";
import AddEditBlogModal from "../../components/AddEditBlogModal";
import Loading from "../../components/Loading";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";
import DeleteBlogModal from "../../components/DeleteBlogModal";

export default function BlogsPage() {
  const user = JSON.parse(localStorage.getItem("user"))

  const { categoryId } = useParams();

  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState();

  const [addBlog, setAddBlog] = useState();
  const [editBlog, setEditBlog] = useState();
  const [deleteBlog, setDeleteBlog] = useState();

  const [loading, setLoading] = useState();
  const [isSuccess, setIsSuccess] = useState();
  const [isError, setIsError] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const blogsRes = await blogService.fetchBlogs();
      const categoriesRes = await categoryService.fetchCategories();
      setBlogs(blogsRes.data);
      setCategories(categoriesRes.data);
      setLoading(false);
    };

    fetchData();
  }, [categoryId]);

  const onBlogAdd = () => {
    setAddBlog({
      title: "",
      description: "",
      categories: [],
      authorId: user._id,
      content: [
        {
          sectionHeader: "",
          sectionText: "",
        },
      ],
    });
  };
  

  const onBlogEdit = (blog) => {
    setEditBlog(blog);
  };

  const onBlogDelete = (blog) => {
    setDeleteBlog(blog);
  };

  const createBlog = async (blog) => {
    try {
      const newBlog = await blogService.createBlog(blog);
      setIsSuccess(true);
      setMessage(newBlog.message);
      setBlogs((prev) => {
        return [...prev, newBlog.data];
      });
    } catch (err) {
      setIsError(true);
      setMessage(err);
    }
    setAddBlog(null);
  };

  const updateBlog = async (blog) => {
    try {
      const newBlog = await blogService.updateBlog(blog);
      setIsSuccess(true);
      setMessage(newBlog.message);
      setBlogs((prev) => {
        return prev.map((x) => {
          if (x.id === newBlog.data.id) {
            return newBlog.data;
          }
          return x;
        });
      });
    } catch (err) {
      setIsError(true);
      setMessage(err);
    }
    setEditBlog(null);
  };

  const removeBlog = async (blog) => {
    try {
      const newBlog = await blogService.deleteBlog(blog.id);
      setIsSuccess(true);
      setMessage(newBlog.message);
      setBlogs((prev) => {
        return prev.filter((x) => x.id !== blog.id);
      });
    } catch (err) {
      setIsError(true);
      setMessage(err);
    }
    setDeleteBlog(null);
  };

  const CategoriesList = ({ categoryId }) => {
    if (!categories && !categories?.length) {
      return null;
    }

    return categories.map((category) => {
      return categoryId === category.id ? (
        <Link
          className="link"
          key={category.id}
          to={"/blogs/" + category.id}
          style={{ color: "blue" }}
        >
          <p key={category.id}>{category.title}</p>
        </Link>
      ) : (
        <Link
          className="link"
          key={category.id}
          to={"/blogs/" + category.id}
          style={{ color: "black" }}
        >
          <p key={category.id}>{category.title}</p>
        </Link>
      );
    });
  };

  if (loading) {
    return <Loading />;
  }
  const AddButton = () => {
    if(!user?.token) return null;
    return (
      <button className="btn btn-outline-dark h-75" onClick={onBlogAdd}>
        ADD BLOG
      </button>
    );
    };
    

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoriesList categoryId={categoryId} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Blog Posts</p>
          <AddButton />
        </div>
        <BlogList
          blogPosts={blogs}
          onBlogEdit={onBlogEdit}
          onBlogDelete={onBlogDelete}
        />
        <AddEditBlogModal
          categories={categories}
          addBlog={addBlog}
          editBlog={editBlog}
          createBlog={createBlog}
          updateBlog={updateBlog}
          onClose={() => {
            setAddBlog(null);
            setEditBlog(null);
          }}
        />
        <DeleteBlogModal
          deleteBlog={deleteBlog}
          removeBlog={removeBlog}
          onClose={() => setDeleteBlog(null)}
        />
      </div>

      <Footer />
      <SuccessToast
        show={isSuccess}
        message={message}
        onClose={() => {
          setIsSuccess(false);
        }}
      />

      <ErrorToast
        show={isError}
        message={message}
        onClose={() => {
          setIsError(false);
        }}
      />
    </>
  );
}
