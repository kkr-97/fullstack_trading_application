import React from "react";

function Team() {
  return (
    <div className="team-container container mt-5 mb-5 p-5">
      <h1 className="text-center">Designed and Developed by...</h1>
      <div className="row d-flex flex-column flex-md-row justify-content-center align-items-center">
        <div className="col-12 col-md-4 text-center">
          <img
            src="media/images/kkrImage.jpeg"
            alt="Keerthan"
            className="text-center"
          />
          <h4 className="text-center mt-3 mb-1">Keerthan Reddy Kolli</h4>
          <p className="text-secondary mt-1">MERN - Full Stack Developer</p>
        </div>
        <div className="col-12 col-md-6">
          <p className="about-desc">
            Hi, I’m Keerthan Reddy Kolli, a full-stack developer passionate
            about building efficient and user-friendly applications. I
            specialize in React.js, Node.js, and MongoDB, with a strong focus on
            attention to detail and adaptability.
            <br />
            <br />
            I’m eager to join an organization where I can grow alongside a
            supportive team and contribute meaningfully to innovative projects.
            I thrive in environments that value collaboration and quality, and
            I’m always ready to take on new challenges to deliver impactful
            products.
          </p>
          <h5>
            Connect on{" "}
            <a
              href="https://www.linkedin.com/in/keerthan-reddy09/"
              className=""
            >
              <i className="fa fa-linkedin text-primary"></i>
            </a>{" "}
            <span>&#183;</span>{" "}
            <a href="https://wa.me/8179759766">
              <i className="fa fa-whatsapp text-success ml-2"></i>
            </a>{" "}
            <span>&#183;</span>{" "}
            <a href="https://github.com/kkr-97">
              <i className="fa-brands fa-github"></i>
            </a>{" "}
            <span>&#183;</span>{" "}
            <a href="https://leetcode.com/u/kkr97/">
              <i className="fa-solid fa-code text-warning"></i>
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Team;
