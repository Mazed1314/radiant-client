import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const category = form.category_name.value;
    const price = form.price.value;
    const description = form.description.value;
    const image = form.photo.value;
    const email = user.email;
    const user_name = user.displayName;
    const user_image = user.photoURL;
    const publishDate = new Date().toISOString().split("T")[0];

    const addNewProduct = {
      name,
      brand,
      category,
      description,
      image,
      price,
      email,
      user_name,
      user_image,
      publishDate,
    };
    console.log(addNewProduct);

    const url = "https://radiant-server-opal.vercel.app/addProduct";
    // send data to the server
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addNewProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/");
        }
      });
  };

  return (
    <div>
      <div>
        <Helmet>
          <title>Radiant | Add Product</title>
        </Helmet>
        <div className="bg-transparent border border-yellow-500 shadow-2xl p-4 md:w-2/3 mx-auto rounded-md my-16">
          <h2 className="text-3xl text-center font-semibold my-4">
            Add a Product
          </h2>
          <form onSubmit={handleAddProduct}>
            {/*product name */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Product Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered border-yellow-500 w-full"
                  required
                />
              </label>
            </div>
            {/*product image */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Product Image
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="give image URL"
                  className="input input-bordered border-yellow-500  w-full"
                  required
                />
              </label>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 my-3">
              {/* brand */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Brand Name
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="brand"
                    placeholder="brand"
                    className="input input-bordered border-yellow-500 w-full"
                    required
                  />
                </label>
              </div>
              {/* category */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Category Name
                  </span>
                </label>
                <select
                  name="category_name"
                  className="rounded-md border border-yellow-500"
                >
                  <option value="Man's_Fashion">Man's Fashion</option>
                  <option value="Women's_Fashion">Women's Fashion</option>
                  <option value="Electronic_Accessories">
                    Electronic Accessories
                  </option>
                  <option value="Home_appliances">Home appliances</option>
                  <option value="Electronics_Device">Electronics Device</option>
                  <option value="Mother_Baby">Mother & Baby </option>
                  <option value="Groceries">Groceries</option>
                  <option value="Home_Lifestyle">Home & Lifestyle</option>
                  <option value="Health_Beauty">Health & Beauty </option>
                  <option value="Jewelry">Jewelry</option>
                </select>
              </div>
              {/* price */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Price
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    name="price"
                    placeholder="price"
                    className="input input-bordered border-yellow-500 w-full"
                    required
                  />
                </label>
              </div>
            </div>
            {/* description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Description
                </span>
              </label>
              <textarea
                className="rounded-lg pl-3 pt-2 border border-yellow-500 bg-base-200"
                name="description"
                placeholder="description"
                rows="5"
                cols="40"
                required
              ></textarea>
            </div>

            <div className="flex justify-center my-4">
              <input
                type="submit"
                value="Add"
                className="btn btn-md border text-white bg-yellow-500 text-lg font-bold"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
