import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import useAuth from "../../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";

const EditProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const updateUser = { name, photoURL };
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        e.target.reset();
        const url = `https://radiant-server-opal.vercel.app/edit/${id}`;
        fetch(url, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "Updated Successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });
        navigate(-1);
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "ok",
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title>Radiant | Update User</title>
      </Helmet>
      <div className="hero md:min-h-screen rounded-t-md">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-2xl md:text-5xl font-bold">
              Update Your profile
            </h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              onSubmit={handleUpdate}
              className="card-body pb-0 border border-black rounded-xl"
            >
              <div className="form-control">
                <label className="label">
                  <span name="test" className="label-text">
                    New Name
                  </span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">New Photo Link</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="photoURL"
                  defaultValue={user?.photoURL}
                  className="input input-bordered"
                />
              </div>

              <div className="form-control my-4 py-2">
                <button className="btn btn-sm bg-black text-white">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
