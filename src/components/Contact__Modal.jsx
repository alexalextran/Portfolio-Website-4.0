import React from "react";

const ContactModal = () => {
  return (
    <div className="modal">
      <div className="modal__left">
      <h2>Alex Tran</h2>
      <h4>Front End Developer</h4>

      <p>Im a front end developer who is interested in developing web applications</p>
      </div>

      <div className="modal__right">

      <h3>Send A Message My Way</h3>
          <form>
              <label>
                  Name
              </label>
              <input placeholder="John Smith..."/>
              <label>
                  Email
              </label>
              <input placeholder="johnsmith@gmail.com"/>
              <label>
                  Message
              </label>
              <textarea placeholder="johnsmith@gmail.com"/>


              <button>Submit</button>
          </form>
      </div>
    </div>
  );
};

export default ContactModal;
