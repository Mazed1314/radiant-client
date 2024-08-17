import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IoIosSearch } from "react-icons/io";
import ProductCard from "../../Components/ProductCard";
import { useEffect, useState } from "react";

const AllProduct = () => {
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState();
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  const { data: getProduct = [] } = useQuery({
    queryFn: () => getData(),
    queryKey: ["product"],
  });
  const getData = async () => {
    const { data } = await axios(
      `https://radiant-server-opal.vercel.app/products`
    );

    setCount([data.length]);
    return data;
  };
  const itemPerPage = 12;
  const numberOfPage = Math.ceil(count / itemPerPage);
  const pages = [...Array(numberOfPage).keys()];

  const handlePageButton = (e) => {
    setCurrentPage(e);
  };

  console.log(pages);

  return (
    <div className="">
      {/* search bar */}
      <div className="pt-7">
        {/* search for mobile */}
        <form action="" className="md:hidden">
          <label className="form-control ">
            <div className="flex h-10 w-full bg-white border border-gray-700 rounded-md">
              <input
                type="text"
                name="title"
                placeholder="search"
                className="w-9/12 rounded-l-md px-4"
              />

              <IoIosSearch
                type="submit"
                className="bg-transparent text-gray-700 btn btn-xs h-full w-3/12"
              />
            </div>
          </label>
        </form>
        <div className="flex gap-5 justify-between ">
          {/* filter */}
          <label className="">
            <div className="label">
              <span className="label-text">Filtered by category</span>
            </div>
            <select
              name="category_name"
              className="rounded-md border border-black"
            >
              <option value="">All</option>
              <option value="Man's Fashion">Man's Fashion</option>
              <option value="Women's Fashion">Women's Fashion</option>
              <option value="Electronic Accessories">
                Electronic Accessories
              </option>
              <option value="Home appliances">Home appliances</option>
              <option value="Electronics Device">Electronics Device</option>
              <option value="Mother & Baby">Mother & Baby </option>
              <option value="Groceries">Groceries</option>
              <option value="Home & Lifestyle">Home & Lifestyle</option>
              <option value="Health & Beauty">Health & Beauty </option>
              <option value="Jewelry">Jewelry</option>
            </select>
          </label>

          {/* search */}
          <form action="" className="hidden md:block mt-7">
            <label className="form-control ">
              <div className="flex h-10 w-full bg-white border border-gray-700 rounded-md">
                <input
                  type="text"
                  name="title"
                  placeholder="search"
                  className="w-9/12 rounded-l-md px-4"
                />

                <IoIosSearch
                  type="submit"
                  className="bg-transparent text-gray-700 btn btn-xs h-full w-3/12"
                />
              </div>
            </label>
          </form>

          {/* sort */}
          <label className="">
            <div className="label">
              <span className="label-text">Sort</span>
            </div>
            <select name="category" className="rounded-md border  border-black">
              <option value="">All</option>
              <option value="low">Price low to hight</option>
              <option value="high">Price high to low</option>
              <option value="newest">Newest first</option>
            </select>
          </label>
        </div>
      </div>
      {/* Product cards */}
      <div className="md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 py-8 md:py-20">
        {getProduct.map((product) => (
          <>
            <ProductCard key={product._id} product={product}></ProductCard>
          </>
        ))}
      </div>

      {/* pagination */}
      <div className=" w-3/5 mx-auto">
        <div className="join flex justify-center mb-12">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageButton(currentPage - 1)}
            className="join-item btn rounded-lg border-black bg-transparent text-xl"
          >
            «
          </button>
          {pages.map((page, index) => (
            <>
              <button
                onClick={() => handlePageButton(index + 1)}
                key={index}
                className={`${
                  currentPage === index + 1
                    ? "bg-black text-white"
                    : "bg-base-100 border border-black"
                } join-item btn mx-1`}
              >
                {index + 1}
              </button>
            </>
          ))}

          <button
            disabled={currentPage === numberOfPage}
            onClick={() => handlePageButton(currentPage + 1)}
            className="join-item btn rounded-lg border-black bg-transparent text-xl"
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
