import { useEffect, useState } from "react";

const Contact = () => {
  const [value, setValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setErrorMessage("");
    }, 2000);
  }, [errorMessage]);

  function changeEvent(e) {
    let name = e.name;
    let value = e.value;

    setValue((curr) => {
      return {
        ...curr,
        [name]: value,
      };
    });
  }

  function submitEvent(e) {
    e.preventDefault();
    if (!value.firstname) setErrorMessage("firstname");
    else if (!value.lastname) setErrorMessage("lastname");
    else if (!value.email) setErrorMessage("email");
    else if (!value.message) setErrorMessage("message");
  }

  console.log(errorMessage, value.firstname);
  return (
    <div className="form-container">
      <div id="heading">
        <h3>Contact Me</h3>

        <p>Hi there, contact me and drop me a message</p>
      </div>
      <form onSubmit={submitEvent}>
        <div className="names-input">
          <div className="text-input">
            <label htmlFor="firstname">Firstname: </label>
            <input
              type="text"
              name="firstname"
              placeholder="enter your firstname"
              id="first_name"
              value={value.firstname}
              onChange={(e) => changeEvent(e.target)}
            />
            <p className="error">
              {errorMessage &&
                errorMessage === "firstname" &&
                `firstname can't be empty`}
            </p>
          </div>

          <div className="text-input">
            <label htmlFor="Lastname">Lastname: </label>
            <input
              type="text"
              name="lastname"
              placeholder="enter your lastname"
              id="last_name"
              value={value.lastname}
              onChange={(e) => changeEvent(e.target)}
            />
            <p className="error">
              {errorMessage &&
                errorMessage === "lastname" &&
                `lastname can't be empty`}
            </p>
          </div>
        </div>

        <div className="email-msg">
          <div className="text-input">
            <label htmlFor="email">Email:</label>

            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              id="email"
              value={value.email}
              onChange={(e) => changeEvent(e.target)}
            />
              <p className="error">
              {errorMessage &&
                errorMessage === "email" &&
                `email can't be empty`}
            </p>
          </div>

          <div className="text-input">
            <label htmlFor="message">Message:</label>

            <textarea
              name="message"
              id="message"
              cols="70"
              rows="10"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              value={"" || value.message}
              onChange={(e) => changeEvent(e.target)}
            ></textarea>
              <p className="error">
              {errorMessage &&
                errorMessage === "message" &&
                `please enter a message`}
            </p>
          </div>
        </div>

        <div className="agree">
          <input type="checkbox" name="agree" />
          <label htmlFor="agree">
            {" "}
            You agree to providing your data to Segun who may contact you.
          </label>
        </div>
        <button type="submit" id="btn__submit">
          Send Mail
        </button>
      </form>
    </div>
  );
};

export default Contact;
