import React, { useState } from "react";
import { FaUser, FaEnvelope, FaComments } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("contactData", JSON.stringify(formData));
    alert("Thank you! Your message has been submitted successfully.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="container-fluid py-5"
      id="Contact"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/cubes.png')",
      }}
    >
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <h1 className="text-center mb-4 fw-bold">
            Get in Touch
          </h1>
          <p className="text-center text-muted mb-4">
            I'd love to hear from you! Whether you have a question or just want
            to say hello, feel free to drop a message.
          </p>
          <form
            className="d-flex flex-column align-items-center justify-content-center"
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "#fff",
              padding: "2rem",
              borderRadius: "10px",
              boxShadow: "0 0 20px rgba(0,0,0,0.1)",
            }}
          >
            <div className="mb-4 w-75">
              <label htmlFor="name" className="form-label">
                <FaUser className="me-2" /> Your Name
              </label>
              <input
                type="text"
                className="form-control shadow-sm"
                required
                name="name"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  transition: "border-color 0.3s ease",
                }}
              />
            </div>
            <div className="mb-4 w-75">
              <label htmlFor="email" className="form-label">
                <FaEnvelope className="me-2" /> Your Email
              </label>
              <input
                type="email"
                className="form-control shadow-sm"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  transition: "border-color 0.3s ease",
                }}
              />
            </div>
            <div className="mb-4 w-75">
              <label htmlFor="message" className="form-label">
                <FaComments className="me-2" /> Message
              </label>
              <textarea
                className="form-control shadow-sm"
                name="message"
                id="message"
                rows="5"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  transition: "border-color 0.3s ease",
                }}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-dark px-5 shadow"
                style={{
                  backgroundColor: "#343a40",
                  borderRadius: "25px",
                  padding: "10px 20px",
                  transition: "background-color 0.3s ease, transform 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#5a6268";
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#343a40";
                  e.target.style.transform = "scale(1)";
                }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
