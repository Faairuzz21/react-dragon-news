import {FaGoogle, FaGithub,FaFacebook, FaTwitter, FaInstagram,
} from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div className="p-4 space-y-3 mb-6">
      <div>
        <h2 className="text-3xl font-bold">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline w-full mt-2">
          <FaGithub></FaGithub>
          GitHub
        </button>
      </div>
      <div>
        <h2 className="text-3xl font-bold">Find Us On</h2>
        <a
          className="p-4 flex text-lg items-center border rounded-t-lg"
          href=""
        >
          <FaFacebook className="mr-3"></FaFacebook>
          Facebook
        </a>
        <a className="p-4 flex text-lg items-center border-x " href="">
          <FaTwitter className="mr-2"></FaTwitter>
          Twitter
        </a>
        <a
          className="p-4 flex text-lg items-center border rounded-b-lg"
          href=""
        >
          <FaInstagram className="mr-2"></FaInstagram>
          Instagram
        </a>
      </div>


      {/* Q Zone */}
      <div>
        <h2 className="text-3xl font-bold">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
