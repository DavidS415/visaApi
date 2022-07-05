import React, { Component }from "react";

class Temporary extends Component {
  state = {
    visa: null,
    info: '',
    url: '',
  };

  callApi = async () => {
    const URL = process.env.REACT_APP_BASE_URL;
    let element = document.getElementById('visas');
    const currentVisa = element.value;
    const idRef = currentVisa;
    const response = await fetch(URL + idRef);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    const visaResponse = body['visa'];
    const infoResponse = body['info'];
    const urlResponse = body['link'];
    
    this.setState({ visa: visaResponse });
    this.setState({ info: infoResponse });
    this.setState({ url: urlResponse });
  };

 render() {
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
            <h2 className='display-4'>Temporary Work Visas</h2>
            <p>
              In order for you to come to the United States lawfully as a nonimmigrant to work temporarily, your prospective employer must generally file a nonimmigrant petition on your behalf with USCIS. 

              There are a variety of temporary work visas available to workers depending on the type of work you are planning to perform, the model or duration of your work in the United States, professional or education background, as well as country of origin. 

              For additional information on a temporary visa type please see the list below and select the one that applies to you. 
            </p>
            <label for='visas'>Select a visa type:</label>
              <select name='visas' id='visas' onChange={this.callApi}>
                <option value=''>--Select--</option>
                <option value='CW-1'>CW-1 CNMI-Only Transitional Worker</option>
                <option value='E-1'>E-1 Treaty Traders</option>
                <option value='E-2'>E-2 Treaty Investors</option>
                <option value='E-2C'>E-2C CNMI-Only Investor</option>
                <option value='E-3'>E-3 Specialty Occupation Workers from Australia</option>
                <option value='H-1B'>H-1B Specialty Occupations</option>
                <option value='H-2A'>H-2A Temporary Agricultural Workers</option>
                <option value='H-2B'>H-2B Temporary Non-Agricultural Workers</option>
                <option value='H-3'>H-3 Nonimmigrant Trainee</option>
                <option value='I'>I Representatives of Foreign Media</option>
                <option value='L-1A'>L-1A Intracompany Transferee Executive or Manager</option>
                <option value='L-1B'>L-1B Intracompany Transferee Specialized Knowledge</option>
                <option value='O-1'>O-1 Visa: Individuals with Extraordinary Ability or Achievement</option>
                <option value='P-1A'>P-1A Athlete</option>
                <option value='P-1B'>P-1B Member of an Internationally Recognized Entertainment Group</option>
                <option value='P-2'>P-2 Entering to Perform Under a Reciprocal Exchange Program</option>
                <option value='P-3'>P-3 Artist or Entertainer</option>
                <option value='Q'>Q Cultural Exchange</option>
                <option value='R-1'>R-1 Nonimmigrant Religious Workers</option>
                <option value='TN'>TN NAFTA Professionals</option>
              </select>
            <table class="table table-bordered table-dark table-hover">
              <thead>
                <tr>
                  <th>Visa:</th>
                  <th>Information:</th>
                  <th>Link:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.visa}</td>
                  <td>{this.state.info}</td>
                  <td><a href={this.state.url}>{this.state.url}</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

};

export default Temporary;