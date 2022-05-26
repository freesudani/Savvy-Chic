import React, { FC, ChangeEvent, FormEvent, useState } from "react";

const Subscribe: FC = () => {
  const [subscription, setSubscription] = useState("");

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setSubscription(value);
  };

  const handleSubmitSubscribe = (e: FormEvent) => {
    e.preventDefault();
    console.log(subscription);
  };

  return (
    <div className="h-[50vh] w-screen bg-subscribe-bg bg-cover bg-center bg-fixed  mt-20">
      <div className="flex items-center justify-center flex-col py-auto py-[110px]">
        <div className="my-5">
          <h3 className="text-6xl text-white">
            Get latest trends , news and more
          </h3>
        </div>
        <form className="flex items-center" onSubmit={handleSubmitSubscribe}>
          <input
            className="w-96 h-20  p-5 text-3xl placeholder:italic placeholder:text-2xl  focus:outline-none focus:border-primary-200"
            placeholder="Enter Email..."
            type="text"
            name="sub"
            value={subscription}
            onChange={handleChange}
          />
          <button
            className="primarybt lgbt h-20"
            type="submit"
            aria-label="Submit E-mail"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
