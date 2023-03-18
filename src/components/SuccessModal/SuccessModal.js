import React from "react";
import success from "../../assets/images/success.png";

const SuccessModal = (props) => {
  return (
    <div>
      <div className="overlay" onClick={props.closeSuccessModal}></div>
      <div className="modal" onClick={props.closeSuccessModal}>
        <h2 className="font-bold text-xl md:text-3xl">Great Job!</h2>
        <img src={success} alt="Success modal illustration"></img>
        <p className="font-medium text-base md:text-xl">
          You have successfully joined the wait list of our product.
        </p>
      </div>
    </div>
  );
};

export default SuccessModal;
