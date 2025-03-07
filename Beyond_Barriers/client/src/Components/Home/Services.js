import React from "react";
import { Link } from "react-router-dom";


function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="row mt-5">
          <div
            className="col-md-12 d-flex justify-content-center align-items-center"
            style={{ flexDirection: "column" }}
          >
            
          </div>
        </div>
        <div className="card-deck">
          <div className="row">
            <div className="">
              <div className="">
                
                <div className="">
                  
                  
                </div>
                <div className="" style={{ border: "none" }}>
                  <Link
                    to="/sign-kit/convert"
                    
                    style={{ fontSize: "large" }}
                  >
                  
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="">
               
                <hr className="m-0"></hr>
                <div className="card-body">
                  
                </div>
                <div className="" style={{ border: "none" }}>
                  <Link
                    to="/sign-kit/learn-sign"
                    
                    style={{ fontSize: "large" }}
                  >
                   
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="">
                
                <div className="card-body">
                  
                </div>
                <div className="" style={{ border: "none" }}>
                  <Link
                    to="/sign-kit/all-videos"
                    
                  >
                    
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
