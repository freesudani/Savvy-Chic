import React from "react";

const PickupPoint = () => {
  return (
    <div className="flex justify-around items-center py-10">
      <div className="lg:-translate-y-10">
        <iframe
          title="Point your location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30444.393336088382!2d-74.25266321090821!3d40.795744697017795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1654046399968!5m2!1sen!2sus"
          width="600"
          height="450"
          className="border-1 md:w-[400px] md:h-[300px]"
          allowFullScreen="false"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div>
        <div className="mb-5">
          <h1 className="text-red-600">
            *please include the exact drop location of the delivery 24Hr before
            shippment
          </h1>
        </div>
        <form className="flex items-center mb:flex-col lg:flex-col">
          <input
            className="w-96 h-20  p-5 text-3xl placeholder:italic placeholder:text-2xl  focus:outline-none focus:border-primary-200"
            placeholder="Enter Shipment Number..."
            type="text"
            name="sub"
          />
          <button
            className="primarybt mdbt h-20"
            type="submit"
            aria-label="Submit Shipment Number"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PickupPoint;
