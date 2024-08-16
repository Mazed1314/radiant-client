import { BsStars } from "react-icons/bs";
import { IoPricetagsSharp } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="">
      <div className="rounded border shadow-xl ">
        <div className="border hover:shadow-2xl hover:border-blue-300">
          <figure>
            <img src="{image} " alt="image" className="w-full h-[200px]" />
          </figure>
          <div className="px-4 py-2 h-auto flex flex-col justify-between ">
            <div className="">
              <h2 className="card-title pb-2">Product Name</h2>
              <div className="flex justify-between">
                <div className="mb-2 text-gray-600">
                  By <span className="font-medium">Brand Name </span>{" "}
                </div>
                <div className="">
                  <span className="font-medium rounded-full py-1 px-2 bg-gray-200">
                    category
                  </span>
                </div>
              </div>
            </div>

            <p>description </p>
            <div className="flex gap-1 my-3">
              <TbCurrencyTaka className="text-lg" />
              445
            </div>
            <div className="flex mb-3">
              <span className="flex">
                <MdDateRange className="mt-1" />
                56.5.4 |
              </span>{" "}
              {/* <div className="divider divider-horizontal"></div> */}
              <div className="flex gap-1">
                <BsStars className="text-lg mt-1 text-yellow-400" /> (31)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
