import React from 'react';

function Visas() {
    return (
      <div className='visas'>
        <div className=''>
          <div className="row min-vh-100">
            <div className="col-md-2 bg-light">
              <ul className='nav flex-column'>
                <li>
                  <h4 className='text-center font-weight-bold'>Visa Categories:</h4>
                </li>
                <li className='nav-item'>
                  <a href='/visas/temporary' className='nav-link font-weight-light text-dark'>Temporary</a>
                </li>
                <li className='nav-item'>
                  <a href='/visas/permanent' className='nav-link font-weight-light text-dark'>Permanent</a>
                </li>
                <li className='nav-item'>
                  <a href='/visas/student' className='nav-link font-weight-light text-dark'>Student</a>
                </li>
                <li className='nav-item'>
                  <a href='/visas/other' className='nav-link font-weight-light text-dark'>Other</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-10 text-center">
              <br></br>
              <h2 className='display-4'>Learn more about visas:</h2>
              <p className='font-weight-bold'>Select a visa category to see a list for that category</p>
              <p>
                There are a number of different visa types that are generally borken into cateogries based on their status as permanent or temporary, as well as visas for students and other specialty situations.
                For more information on a specific visa or category select a category then browse the different visa types to find what you are looking for information on or what best applies to you.
              </p>
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="/business.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

export default Visas;
