import React from "react";
import nyc from "../images/nyc.jpeg";
import working from "../images/working.jpeg";
import travel from "../images/travel.jpg";
import logo192 from "../images/logo192.png";


function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-6">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={nyc}
              alt=""
            />
          </div>
          <div class="col-lg-6">
            <h1 class="font-weight-light">Working in the United States</h1>
            <p>
              Known as the land of opportunity, millions of immigrants have left their homes to find something in the United States not readily available in their own country: an opportunity to succeed.
            </p>
            <p>
              In terms of jobs in America, almost all of the biggest companies in the world have offices in the USA. 
              You will have career opportunities in America you could not get anywhere else in the world. 
              Just one internship for a big name could change your career.
              With some of the best universities, largest companies, and highest salaries it is no wonder so many people desire to live and work in the United States.
            </p>
            <p>
              However to work in the United States a valid work visa is required and must be maintianed.
              The US work visa system and authorizations can be a bit complex to navigate and in some cases difficult to obtain.
              We are here to provide you some basic information on the various work US work visa opportunities as well as resources for additional professional support.
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">About US Work Visas:</h1>
            <p>
              Work visas in the United States are governed and issued by the US Citizen and Immigration Services, known as USCIS.
              Visas are generally grouped in a number of categories based on the basis of Permanent Workers (Immigrant workers who are apply for permanent residency or citizenship) and Temporary Workers (Those who do not plan to immigrate).
              Temporary visas are often used as a path to immigration or naturalization with the intention of coming to the United States initially as a temporary worker and applying for permeant residency while working here.
            </p>
            <p>
              In addition to permanent and temporary categories visas are often divided into sub-categories based on the reason for issuing such as: Employment, Students, Specific Industry, Art or Cultral Influence, Country of Origin, or Extraordinary Abilities. 
              There are also work visas available to those in the United States for family based immigration or assylum reasons.
            </p>
          </div>
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={working}
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-4">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={travel}
              alt=""
            />
          </div>
          <div class="col-lg-8">
            <h1 class="font-weight-light">Types of Visas:</h1>
            <ul>
              <li class='font-weight-bold'>
                <a href='/visas/permanent' title="Click here for more information">Permanent Worker Visas</a>
                <p class='font-weight-normal'>
                  Accoding to USCIS approximately 140,000 immigrant visas are available each fiscal year for noncitizens (and their spouses and children) who seek to immigrate based on their job skills. 
                  Some immigrant visa preferences require you to already have a job offer from a U.S. employer. 
                  The immigrant visas availalbe are broken into preference categories based on a number of factors such as abilities, skills, professions, and even investors. 
                </p>
              </li>
              <li class='font-weight-bold'>
                <a href='/visas/temporary' title="Click here for more information">Temporary Worker Visas</a>
                <p class='font-weight-normal'>
                  Most temporary work or nonimmigrant work visas are dependent on a job based in the United States and as such your employer must file the petition on your behalf or provide supporting documents of the petition.
                  Temporary work visas are issued to indivduals (and in some cases their families as dependents) based on a number of qualifications such as a specialty occupation, an intracompany transfer for executives or managers, and other indivuals with extraordinary abilities in a variety of areas from art to sports to academics.
                  There are also temporary work visas available for indivduals from certain countries or areas such as the TN visa for NAFTA countries including Canada and Mexico.
                </p>
              </li>
              <li class='font-weight-bold'>
                <a href='/visas/student' title="Click here for more information">Student Visas and Work Authorization</a>
                <p class='font-weight-normal'>
                  The United States offers visas for Academic Students (known as F-1 visa), Vocational Students (known as M-1 visa), and Exchange Visitors (konw as J-1 visa).
                  Some of these visas have implied work authorization as part of their program like certain exchanges while others provide elgiblity requirements for students to obtain work visas during our after their education is completed.
                  Our section on student visas also includes additional information on complimentry work visa elgiblity.
                </p>
              </li>
              <li class='font-weight-bold'>
                <a href='/visas/other' title="Click here for more information">Asylum and Other</a>
                <p class='font-weight-normal'>
                  Individuals who have been granted Asylum in the United States are elgible to work once applying for and recieving a valid Employment Authorization Document.
                  There are other indivduals who are elgible for similar Employment Authorization Documents (often called EADs).
                  Some examples include spouses of certain temporary workers or indivduals awaiting naturalization process.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <h3 class="font-weight-bold text-center">For more information on these visas click their title or <a href="/visas">here</a></h3>
      </div>
      <div class="container">
        <h4 class='text-center'>Also, check out these sites and partners for additional support:</h4>
        <div class="row align-items-center my-5">
          <div class="col-sm-3 text-center">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={logo192}
              alt="Partner 1 logo"
            /><br/>
            <a href='/'>Partner 1</a>
          </div>
          <div class="col-sm-3 text-center">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={logo192}
              alt="Partner 1 logo"
            /><br/>
            <a href='/'>Partner 2</a>
          </div>
          <div class="col-sm-3 text-center">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={logo192}
              alt="Partner 1 logo"
            /><br/>
            <a href='/'>Partner 3</a>
          </div>
          <div class="col-sm-3 text-center">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={logo192}
              alt="Partner 1 logo"
            /><br/>
            <a href='/'>Partner 4</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;