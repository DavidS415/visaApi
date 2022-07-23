import React, { Component }from "react";

class Permanent extends Component {
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
            <h2 className='display-4'>Permanent Work Visas</h2>
            <p>
              The United States offers a number of paths for foregin nationals to become permanent residents and ultimately eligible to permanently work without restrictions. 
              Information here primarily focuses on employment and investor based options. 
              Additional information on family or diversity programs can be found on <a href="https://www.uscis.gov/green-card">USCIS</a> website.
            </p>
            <label for='visas'>Select a visa type:</label>
              <select name='visas' id='visas' onChange={this.callApi}>
                <option value=''>--Select--</option>
                <option value='EB-1'>EB-1</option>
                <option value='EB-2'>EB-2</option>
                <option value='EB-3'>EB-3</option>
                <option value='EB-4'>EB-4</option>
                <option value='EB-5'>EB-5</option>
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

export default Permanent;