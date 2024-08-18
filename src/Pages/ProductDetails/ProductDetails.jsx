import { NavLink, useLoaderData, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { MdDateRange } from "react-icons/md";
import { Helmet } from "react-helmet";

const ProductDetails = () => {
  const { user } = useAuth();
  const products = useLoaderData();
  const { _id } = useParams();
  const product = products.find((p) => p._id == _id);

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
        </div>
        {/* <div className="mb-10">
          {blogOwner === currentUserEmail && (
            <div className="flex justify-center">
              <NavLink
                to={`/edit-product/${_id}`}
                className="btn btn-sm mt-2 rounded text-black border-black bg-transparent hover:bg-black hover:text-white"
              >
                Update
              </NavLink>
            </div>
          )}
        </div> */}
      </div>

      {/* comment section */}
    </div>
  );
};

export default ProductDetails;
