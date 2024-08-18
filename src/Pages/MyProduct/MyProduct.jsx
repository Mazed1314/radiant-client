import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Commet } from "react-loading-indicators";
import { FaEdit } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import Swal from "sweetalert2";

const MyProduct = () => {
  const { user } = useAuth();

  const {
    data: items = [],
    refetch,
    isLoading,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["my-product"],
  });
  const getData = async () => {
    const { data } = await axios(
      `https://radiant-server-opal.vercel.app/my-product/${user?.email}`
    );
    return data;
  };

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://radiant-server-opal.vercel.app/product/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "successfully deleted ", "success");
              refetch();
            }
          });
      }
    });
  };
  refetch();
  if (isLoading) {
    <div className="flex flex-col justify-center items-center my-10">
      <Commet color="#f0e430" size="large" text="loading" textColor="#78716C" />
    </div>;
  }
  return (
    <div>
      <Helmet>
        <title>Radiant | My Product</title>
      </Helmet>
      {items < 1 ? (
        <div className=" h-96 flex flex-col justify-center">
          <h2 className="text-center mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">
            Sorry
          </h2>
          <h2 className="text-center text-3xl">You have no product Now !</h2>
        </div>
      ) : (
        <>
          <div className="flex text-xl font-semibold justify-start my-4">
            Total Product : {items.length}
          </div>
          <table className="min-w-[90%] shadow-md border mx-auto border-gray-200 my-6">
            <thead>
              <tr className="bg-yellow-500 text-white">
                <th className="py-4 px-6 text-lg text-left border-b">Sl</th>
                <th className="py-4 px-6 text-lg text-left border-b">Name</th>

                <th className="py-4 px-6 text-lg text-left border-b">
                  Category
                </th>
                <th className="py-4 px-6 text-lg text-left border-b">
                  Description
                </th>
                <th className="py-4 px-6 text-lg border-b text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              {items?.map((item, index) => (
                <>
                  <tr key={index} className="hover:bg-gray-50 border-b py-2">
                    <td className="px-3 text-lg font-medium text-center">
                      {index + 1}
                    </td>

                    <td className="px-3 text-lg font-medium">{item.name}</td>
                    <td className="px-3 text-lg font-medium">
                      {item.category}
                    </td>
                    <td className="px-3 text-lg font-medium">
                      {item.description}
                    </td>
                    <td className="px-3 flex gap-4 text-lg font-medium justify-end">
                      <NavLink
                        to={`/view-details/${item._id}`}
                        className="btn btn-sm mt-2 rounded text-yellow-500 border-yellow-500 bg-transparent hover:bg-yellow-500 hover:text-white"
                      >
                        <FaRegEye />
                      </NavLink>
                      <NavLink
                        to={`/edit-product/${item._id}`}
                        className="btn btn-sm mt-2 text-center rounded text-yellow-500 border-yellow-500 bg-transparent hover:bg-yellow-500 hover:text-white"
                      >
                        <FaEdit className="text-xl " />
                      </NavLink>

                      <NavLink className="btn btn-sm mt-2 rounded text-yellow-500 border-yellow-500 bg-transparent hover:bg-yellow-500 hover:text-white">
                        <MdOutlineDelete
                          onClick={() => handleDelete(item._id)}
                          className="text-xl"
                        />
                      </NavLink>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default MyProduct;
