import { BsStars } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoPricetagsSharp } from "react-icons/io5";
import { MdDateRange, MdVerified } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";

const ProductCard = ({ product }) => {
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
            <div className="flex my-3">
              {price}
              <TbCurrencyTaka className="text-xl" />
            </div>
            <div className="flex mb-3">
              <span className="flex">
                <MdDateRange className="mt-1" />
                {publishDate} |
              </span>{" "}
              {/* <div className="divider divider-horizontal"></div> */}
              <div className="flex gap-1 ml-1">
                <div className="tooltip" data-tip="give rate">
                  <a
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    <BsStars className="text-lg mt-1 text-yellow-400" />
                  </a>
                </div>{" "}
                (31)
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
                      <a href="/">
                        <FaArrowRightLong className="mt-4" />
                      </a>
                    </p>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
