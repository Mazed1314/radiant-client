import {
  NavLink,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { MdDateRange } from "react-icons/md";
import { Helmet } from "react-helmet";
import { BsStars } from "react-icons/bs";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from "axios";

const ProductDetails = () => {
  const { user } = useAuth();
  const products = useLoaderData();
  const { _id } = useParams();
  const [rating, setRating] = useState([]);
  const navigate = useNavigate();

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

  const p_id = _id;
  useEffect(() => {
    axios
      .get(`https://radiant-server-opal.vercel.app/rating/${p_id}`)
      .then((res) => {
        setRating(res.data);
      });
  });
  // console.log(rating.length);
  const product_id = _id;
  const addNewRating = {
    product_id,
  };
  const handleSubmitRating = async () => {
    const url = "https://radiant-server-opal.vercel.app/rating";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addNewRating),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            text: "Thank You for rating",

            confirmButtonText: "ok",
          });
          navigate("/");
        }
      });
  };
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
              <div className="flex gap-1 mx-1">
                <div className="tooltip" data-tip="give rate">
                  <a
                    className="flex"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    <BsStars className="text-2xl mt-1 text-yellow-400" />{" "}
                    <span className="text-gray-600">({rating.length})</span>
                  </a>
                </div>{" "}
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-lg">Rate this product</h3>
                    <p className="py-4 flex gap-4 justify-around">
                      <div className="rating rating-lg rating-half">
                        <input
                          type="radio"
                          name="rating-10"
                          className="rating-hidden"
                        />
                        <input
                          type="radio"
                          name="rating-10"
                          className="mask mask-star-2 mask-half-1 bg-yellow-500"
                        />
                        <input
                          type="radio"
                          name="rating-10"
                          className="mask mask-star-2 mask-half-2 bg-yellow-500"
                        />
                        <input
                          type="radio"
                          name="rating-10"
                          className="mask mask-star-2 mask-half-1 bg-yellow-500"
                          defaultChecked
                        />
                        <input
                          type="radio"
                          name="rating-10"
                          className="mask mask-star-2 mask-half-2 bg-yellow-500"
                        />
                        <input
                          type="radio"
                          name="rating-10"
                          className="mask mask-star-2 mask-half-1 bg-yellow-500"
                        />
                        <input
                          type="radio"
                          name="rating-10"
                          className="mask mask-star-2 mask-half-2 bg-yellow-500"
                        />
                        <input
                          type="radio"
                          name="rating-10"
                          className="mask mask-star-2 mask-half-1 bg-yellow-500"
                        />
                        <input
                          type="radio"
                          name="rating-10"
                          className="mask mask-star-2 mask-half-2 bg-yellow-500"
                        />
                        <input
                          type="radio"
                          name="rating-10"
                          className="mask mask-star-2 mask-half-1 bg-yellow-500"
                        />
                        <input
                          type="radio"
                          name="rating-10"
                          className="mask mask-star-2 mask-half-2 bg-yellow-500"
                        />
                      </div>
                      <a
                        onClick={handleSubmitRating}
                        className="btn bg-transparent"
                      >
                        <FaArrowRightLong className="mt-2" />
                      </a>
                    </p>
                  </div>
                </dialog>
              </div>
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
