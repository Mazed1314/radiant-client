import React from "react";
import { Helmet } from "react-helmet";

const AddProduct = () => {
  return (
    <div>
      <div>
        <Helmet>
          <title>Radiant | Add Product</title>
        </Helmet>
        <div className="bg-transparent border border-black shadow-2xl p-4 md:w-2/3 mx-auto rounded-md my-16">
          <h2 className="text-3xl text-center font-semibold my-4">
            Add a Product
          </h2>
          <form>
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
                  className="input input-bordered border-black w-full"
                  required
                />
              </label>
            </div>
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
                  className="input input-bordered border-black  w-full"
                  required
                />
              </label>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 my-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Category Name
                  </span>
                </label>
                <select
                  name="category_name"
                  className="rounded-md border border-black"
                >
                  <option value="Travel">Travel</option>
                  <option value="Technology">Technology</option>
                  <option value="Finance">Finance</option>
                  <option value="News">News</option>
                  <option value="Literature">Literature</option>
                  <option value="Fashion">Fashion </option>
                  <option value="Beauty">Beauty</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Parenting">Parenting</option>
                  <option value="Food">Food</option>
                  <option value="Health">Health</option>
                  <option value="Art&Craft">Art&Craft</option>
                  <option value="Photography">Photography</option>
                </select>
              </div>
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
                    className="input input-bordered border-black w-full"
                    required
                  />
                </label>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Description
                </span>
              </label>
              <textarea
                className="rounded-lg pl-3 pt-2 border border-black bg-base-200"
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
                className="btn btn-md border text-white bg-black text-lg font-bold"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
