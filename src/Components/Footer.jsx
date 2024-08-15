import { FaGooglePlay } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer class="bg-yellow-400 py-8 text-gray-700">
      <div class="px-2 md:px-20">
        <div class="flex flex-col md:flex-row justify-between border-b-2 border-dashed border-gray-700 pb-8">
          <div className="mx-auto px-2 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-center">
                  About Us
                </h4>
                <p className="text-sm text-center">
                  Radiant is a curated platform showcasing the latest and most
                  innovative products. Discover high-quality items that elevate
                  your lifestyle, from cutting-edge gadgets to stylish home
                  essentials.
                </p>
              </div>
              <div className="mb-8 text-center">
                <h4 className="text-lg font-semibold mb-4 text-center">
                  Contact Us
                </h4>
                <p className="text-sm">
                  2312 GSE Street, Chittagong, Bangladesh
                </p>
                <p className="text-sm">Email: radiant@gmail.com</p>
                <p className="text-sm">Phone: +123-456-7890</p>
              </div>
              <div className="mb-8 ">
                <h3 class="text-xl font-bold p-4">Download our app</h3>

                <button class="border border-gray-700 rounded-lg flex justify-center">
                  <a href="#" class="mt-3 p-2">
                    <FaGooglePlay className="text-2xl" />
                  </a>
                  <div class="m-2 text-left">
                    <p class="font-semibold">GET IT ON</p>
                    <h3 class="text-2xl font-bold">Google Play</h3>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-5 md:flex-row justify-between mt-5">
          <div>
            <p>&copy;all rights reserved, Radiant.{new Date().getFullYear()}</p>
          </div>

          <div>
            <a class="mr-3" href="#">
              Terms & Condition
            </a>
            <a class="mr-3" href="#">
              Return & refund policy
            </a>
            <a href="#">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
