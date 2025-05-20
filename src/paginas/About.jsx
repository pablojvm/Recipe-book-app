import React from "react";
import "../paginas/About.css";

function About() {
  return (
    <div id="ctn-desarolladores">
      <h2>Desarrolladores:</h2>

      <div>
        <h3>Gaëlle</h3>
        <div class="git">
          <img src="../public/LogoGitHub.png" id="logoGit2"></img>
          <p>
            Github: <a href="https://github.com/GaelleMde">GaelleMde</a>
          </p>
        </div>
        <div class="git">
          <img src="../public/LinkindIcon.png" id="LinkedIn"></img>
          <p>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/gaellemadelaine/">
              Gaëlle Madelaine
            </a>
          </p>
        </div>
      </div>
      <div>
        <h3>Pablo</h3>
        <div class="git">
          <img src="../public/LogoGitHub.png" id="logoGit2"></img>
          <p>
            Github: <a href="https://github.com/pablojvm">pablojvm</a>
          </p>
        </div>
        <div class="git">
          <img src="../public/LinkindIcon.png" id="LinkedIn"></img>
          <p>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/pablo-villar-mor%C3%B3n-489312178/">
              Pablo Villar Morón
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
