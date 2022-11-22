import React from "react";
import { MdMailOutline } from "react-icons/md";
import { RiFacebookBoxFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { TfiTwitterAlt } from "react-icons/tfi";
import { AiFillYoutube } from "react-icons/ai";

const Email = () => {
  return (
    <div className="flex flex-col w-full lg:flex-row my-20 justify-center">
      <div
        className="grid basis-2/5 h-72 card bg-base-300 rounded-box place-items-center bg-center"
        // style={{
        //   backgroundImage: `url("https://images.unsplash.com/photo-1607863680151-1da3e60691bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80	")`,
        // }}
      >
        <MdMailOutline size={50} className="mt-5" />
        <h2 className="text-3xl font-bold text-white">
          Sign up to our Email List to get more Deals!
        </h2>
        <p className="text-center max-w-xl">
          When you sign up to our mailing list you agree to get email
          notifications about discounts, weekly promos, latest news, etc... We
          will not spam you! 😆
        </p>
        <div className="form-control">
          <label className="input-group">
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered"
            />
            <button className="btn bg-green-800 hover:btn-primary mb-5">
              Sign Up
            </button>
          </label>
        </div>
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="grid basis-2/5 h-72 card bg-base-300 rounded-box place-items-center">
        <h2 className="text-3xl font-bold text-white">
          Follow us on Social Media!
        </h2>
        <div className="flex flex-row self-start space-x-10">
          <RiFacebookBoxFill size={50} className="cursor-pointer" />
          <AiOutlineInstagram size={50} className="cursor-pointer" />
          <TfiTwitterAlt size={50} className="cursor-pointer" />
          <AiFillYoutube size={50} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Email;
