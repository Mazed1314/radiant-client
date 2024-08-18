import { MdDateRange, MdVerified } from "react-icons/md";
import { PiArrowSquareOut } from "react-icons/pi";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, category, description, image, brand, price, publishDate } =
    product;

  return (
    <div className="">
      <div className="rounded border shadow-xl">
        <div className="border hover:shadow-2xl hover:border-blue-300">
          <div className="px-4">
            <h2 className="card-title text-center">{name}</h2>
            <div className="mb-2 text-gray-600">
              <span className="font-medium flex">
                {brand}
                <MdVerified className="mt-1" />
              </span>{" "}
            </div>
          </div>
          <div className="flex justify-end mr-2 mb-2">
            <span className="font-bold text-xs rounded-full px-2 bg-gray-200">
              {category}
            </span>
          </div>
          <figure>
            <img src={image} alt="image" className="w-full h-[220px]" />
          </figure>
          <div className="px-4 py-2 flex flex-col justify-between">
            <p>{description.slice(0, 25)}... </p>

            <div className="flex my-3 text-red-600 font-medium">{price} $</div>
            <div className="flex justify-between mb-3">
              <span className="flex">
                <MdDateRange className="mt-1" />
                {publishDate}
              </span>{" "}
              <Link
                to={`/view-details/${_id}`}
                className="ml-1 font-semibold flex"
              >
                Details
                <PiArrowSquareOut className="mt-1 font-semibold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
