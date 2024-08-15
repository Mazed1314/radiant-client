import { IoIosSearch } from "react-icons/io";

const AllProduct = () => {
  return (
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
          <select name="category" className="rounded-md border  border-black">
            <option value="">All</option>
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
            <option value="sell">Most sell</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default AllProduct;
