import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slider = () => {
  const [users, setUsers] = useState([]);

  const settings = {
    dots: true,
  };

  useEffect(() => {
    fetch(`https://api.github.com/users/ThiagoDuutra/repos`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <section id="projects" className="container-projects">
      <h1 className="projects-title">Projetos</h1>

      <div className="projects-finish">
        <Slider {...settings}>
          {users.map((repository) => {
            return (
              <div className="container-repository">
                <h2 className="repository-title">{repository.name}</h2>
                <p className="repository-languange">{repository.language}</p>
                <div className="container-btnUrl">
                  <a
                    className="link-title"
                    href={repository.homepage}
                    target="_blank"
                  >
                    Homepage
                  </a>
                  <a
                    className="btn-url"
                    href={repository.html_url}
                    target="_blank"
                  >
                    Repository
                  </a>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default slider;
