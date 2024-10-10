import React from 'react';
export default function Footer() {
  return (
    <footer className="bg-brown text-white py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h5 >Nakul Rathod</h5>
            <p >Full Stack Web Developer | Passionate About Web Development</p>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-md-6 text-center">
            <a href="https://www.instagram.com/ll_nakul.rathod_ll/?__pwa=1" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i class="fab fa-instagram" style={{fontSize:"25px"}}></i>
            </a>
            <a href="https://www.linkedin.com/in/nakul-rathod-092181291/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <i className="fab fa-linkedin" style={{fontSize:"25px"}}></i>
            </a>
            <a href="https://www.youtube.com/@nakulrathod1105" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i class="fab fa-youtube-square" style={{fontSize:"25px"}}></i>
            </a>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-md-6 text-center">
            <p className="mb-0">&copy; 2024 Nakul Rathod. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}


