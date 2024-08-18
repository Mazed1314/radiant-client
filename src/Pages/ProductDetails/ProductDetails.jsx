import { NavLink, useLoaderData, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { MdDateRange } from "react-icons/md";
import { Helmet } from "react-helmet";
import { BsStars } from "react-icons/bs";

const ProductDetails = () => {
  const { user } = useAuth();
  const products = useLoaderData();
  const { _id } = useParams();
  const product = products.find((p) => p._id == _id);
  const currentUserEmail = user.email;
  const {
    name,
    category,
    description,
    image,
    brand,
    price,
    email,
    user_name,
    user_image,
    publishDate,
  } = product;
  return (
    <div className="">
      <div className="mx-2 md:mx-20 bg-transparent">
        <Helmet>
          <title>Radiant | product-details : {_id}</title>
        </Helmet>

        <h2 className="text-center font-bold text-2xl my-6 pt-4 rounded-t-md">
          {name}
        </h2>

        <div className="flex gap-2">
          <div className="mb-2 flex gap-1 text-gray-600">
            <span className="font-medium text-lg">{brand} </span>|
            <span className="flex">
              <MdDateRange className="mt-1" />
              {publishDate}
            </span>{" "}
            |
            <span className="text-gray-600 text-md font-medium">
              {category}
            </span>
          </div>
        </div>

        <div className="px-2 ">
          <div className="w-full md:mx-4">
            <img src={image} alt="" className="w-full h-[200px] lg:h-auto" />
          </div>
        </div>

        <div className="px-2 md:px-8">
          <div className="py-4 md:py-8 text-lg text-gray-500">
            {description}
          </div>
          <div className="mb-3 space-y-4 text-xl font-medium">
            <div className="flex text-red-600 font-medium">{price} $</div>
            <div className="flex gap-1 mx-1">
              <div className="flex">
                <BsStars className="text-2xl mt-1 text-yellow-400" />
              </div>{" "}
              <span className="text-gray-600">(31)</span>
            </div>{" "}
          </div>
        </div>
        <div>
          {email === currentUserEmail ? (
            <div className="flex justify-center">
              <NavLink
                to={`/edit-product/${_id}`}
                className="btn btn-sm mt-2 rounded text-yellow-500 border-yellow-500 bg-transparent hover:bg-yellow-500 hover:text-white"
              >
                Edit
              </NavLink>
            </div>
          ) : (
            <>
              <div className="flex justify-center my-2">
                <NavLink
                  to={`/`}
                  className="btn mt-2 rounded text-yellow-500 border-yellow-500 bg-transparent hover:bg-yellow-500 hover:text-white"
                >
                  Buy
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>

      {/* comment section */}
    </div>
  );
};

export default ProductDetails;
