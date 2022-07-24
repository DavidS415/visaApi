import React, { Component }from "react";

class Other extends Component {
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
            <h2 className='display-4'>Other Types of Visas</h2>
            <p>
              Other options for working in the United States include temporary business visitor visas or waivers but these are generally only valid for limited periods (less than one year). 
              Refugees and Asylum seekers may also be eligible to work in the United States and obtain Employment Authorization Documents.
            </p>
            <label for='visas'>Select a visa type:</label>
              <select name='visas' id='visas' onChange={this.callApi}>
                <option value=''>--Select--</option>
                <option value='B-1'>B-1</option>
                <option value='WB'>WB</option>
                <option value='GB'>GB</option>
                <option value='REFUGEE'>REFUGEE</option>
                <option value='ASYLUM'>ASYLUM</option>
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

export default Other;