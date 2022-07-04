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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <label for='visas'>Select a visa type:</label>
              <select name='visas' id='visas' onChange={this.callApi}>
                <option value=''>--Select--</option>
                <option value='H-1B'>H-1B</option>
                <option value='CW-1'>CW-1</option>
                <option value='E-1'>E-1</option>
                <option value='E-2'>E-2</option>
                <option value='E-2C'>E-2C</option>
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