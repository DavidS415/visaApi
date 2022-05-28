import React from "react";

function Api() {
  return (
    <div className="api">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col">
            <h1 class=".font-weight-bold text-center">How to use our API</h1>
            <p>
              USWorkVisa.us provides an API with all of our visa information for you to incorporate US work visa information into your applicaiton or website. 
              We are continusoly updating our API so that you can always provide your customers or users with up to date information on US work visa process and statuses.
              Take a look below on how to use and integrate our API.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <h3>All Visa Info</h3>
            <code class="text-white-50 bg-dark">GET https://api.incipere.io/visas</code>
            <p>Retrieve information on all visas available as a single object.</p>
            <h3>Specific Visa Info</h3>
            <code class="text-white-50 bg-dark">GET https://api.incipere.io/visas/&lt;visa name&gt;</code>
            <p>Query information on a specifc visa type by passing the visa name as a parameter to endpoint</p>
            <p>Response Example:</p>
            <pre>
                <code>
                  [
                    {`
                    {
                      "_id":"61d3dbde9116dc75138dd9d0",
                      "visa":"H-1B",
                      "info":"Details",
                      "link":"https://www.uscis.gov/"
                    }
                  `}
                ]
                </code>
            </pre>
          </div>
          <div class="col-lg-6">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="/api.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Api;