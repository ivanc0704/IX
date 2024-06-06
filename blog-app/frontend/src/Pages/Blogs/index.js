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
      const blogsRes = await blogService.fetchBlogs(
      );
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
      author: {
        id: 1,
        firstName: "Byron",
        lastName: "de Villiers",
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image:
          "data:image/jpeg;base64,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",
      },
      content: [
        {
          sectionHeader: "Introduction",
          sectionText:
            "I'm so excited to share my first blog post with the world. I've been working on this for a while and I'm happy to finally share it with you.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
          <button className="btn btn-outline-dark h-75" onClick={onBlogAdd}>
            ADD BLOG
          </button>
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