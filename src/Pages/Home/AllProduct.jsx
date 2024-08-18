// import axios from "axios";
import { IoIosSearch } from "react-icons/io";
import ProductCard from "../../Components/ProductCard";
import { useEffect, useState } from "react";

const AllProduct = () => {
  const [productPerPage] = useState(9);
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("https://radiant-server-opal.vercel.app/productsCount")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  useEffect(() => {
    fetch(
      `https://radiant-server-opal.vercel.app/products?page=${currentPage}&size=${productPerPage}&filter=${filter}&search=${search}&sort=${sort}`
    )
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [currentPage, productPerPage, search, filter, sort]);

  // for pagination------------------------------------------------------
  // const numberOfPage = Math.ceil(count / productPerPage);
  // const pages = [...Array(numberOfPage).keys()];

  // const handlePageButton = (e) => {
  //   setCurrentPage(e);
  // };

  const handleSearch = (e) => {
    e.preventDefault();
    const title = e.target.name.value;
    setSearch(title);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };
  return (
    <div className="">
      {/* search bar */}
      <div className="pt-7">
        {/* search for mobile */}
        <form action="" onSubmit={handleSearch} className="md:hidden">
          <label className="form-control ">
            <div className="flex h-10 w-full bg-white border border-gray-700 rounded-md">
              <input
                type="text"
                name="name"
                placeholder="search"
                className="w-9/12 rounded-l-md px-4"
              />

              <button className="w-3/12 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </label>
        </form>
        <div className="flex gap-5 justify-between ">
          {/* filter */}

          <label>
            <div className="label">
              <span className="label-text">Filtered by category</span>
            </div>
            <select
              name="category_name"
              className="rounded-md border border-black"
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="Man's_Fashion">Man's Fashion</option>
              <option value="Women's_Fashion">Women's Fashion</option>
              <option value="Electronic_Accessories">
                Electronic Accessories
              </option>
              <option value="Home_appliances">Home appliances</option>
              <option value="Electronics_Device">Electronics Device</option>
              <option value="Mother_&_Baby">Mother & Baby </option>
              <option value="Groceries">Groceries</option>
              <option value="Home_&_Lifestyle">Home & Lifestyle</option>
              <option value="Health_&_Beauty">Health & Beauty </option>
              <option value="Jewelry">Jewelry</option>
            </select>
          </label>

          {/* search */}
          <form
            action=""
            onSubmit={handleSearch}
            className="hidden md:block mt-7"
          >
            <label className="form-control ">
              <div className="flex h-10 w-full bg-white border border-gray-700 rounded-md">
                <input
                  type="text"
                  name="name"
                  placeholder="search"
                  className="w-9/12 rounded-l-md px-4"
                />
                <button className="w-3/12 flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </label>
          </form>

          {/* sort */}
          <label>
            <div className="label">
              <span className="label-text">Sort</span>
            </div>
            <select
              name="category"
              className="rounded-md border border-black"
              onChange={handleSortChange}
            >
              <option value="">All</option>
              <option value="low">Price low to high</option>
              <option value="high">Price high to low</option>
              <option value="newest">Newest first</option>
            </select>
          </label>
        </div>
      </div>

      {/* Product cards  */}
      <div className="md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 py-8 md:py-20">
        {product.map((product) => (
          <>
            <ProductCard key={product._id} product={product}></ProductCard>
          </>
        ))}
      </div>

      {/* pagination */}
      {/* <div className=" w-3/5 mx-auto">
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
      </div> */}
    </div>
  );
};

export default AllProduct;
