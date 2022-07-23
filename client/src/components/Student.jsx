import React, { Component }from "react";

class Student extends Component {
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
            <h2 className='display-4'>Student Visas</h2>
            <p>
              In order to study in the United States as a full time student a student visa is generally required. 
              There are two kinds of student visas (F-1 and M-1) that give a person the ability two enter the United States as a student. 
              If a student wishes to work well studying (or in certain cases after graduating) they must obtain a separate work authorization. 
              For information both student visas and the related work authorization select a visa below. 
            </p>
            <label for='visas'>Select a visa type:</label>
              <select name='visas' id='visas' onChange={this.callApi}>
                <option value=''>--Select--</option>
                <option value='F-1'>F-1</option>
                <option value='M-1'>M-1</option>
                <option value='CPT'>CPT</option>
                <option value='OPT'>OPT</option>
                <option value='STEM-OPT'>STEM-OPT</option>
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

export default Student;