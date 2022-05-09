import React from "react";

function Api() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">How to use our API:</h1>
            <p>
              Call https://api.incipere.io/visas for all visa info.
              Call https://api.incipere.io/visas/"visa name" for info on a specific visa. 
              For example https://api.incipere.io/visa/H-1B will return info on the H-1B visa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Api;