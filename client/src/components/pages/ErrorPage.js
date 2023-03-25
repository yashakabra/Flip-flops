import React from "react";
import '../styles/Error.css';

const  ErrorPage=()=>{
   {
    return (
      <div>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center" style={{marginLeft:"10%",marginTop:"15px"}}>
                <div className="four_zero_four_bg" style={{marginTop:"30px"}}>
                  <h1 className="text-center " style={{marginBottom:"20px"}}>404 ERROR</h1>
                </div>
                <div className="contentBox">
                  <h3 className="h2">Something Went Wrong..!</h3>
                  <p>The page Cannot be Found!</p>
              
                  <a href={""} className="link_404" >
                    Go to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
  }
}

export default ErrorPage;
