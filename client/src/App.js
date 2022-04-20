import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    visa: null,
    info: '',
    url: '',
  };

  callApi = async () => {
    let element = document.getElementById('visas');
    const currentVisa = element.value;
    const idRef = currentVisa;
    const response = await fetch('http://localhost:5000/visas/' + idRef);
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
    const titleVisas = (
      <div>
        <h1>Learn more about US work visas</h1>
      </div>
    );
    const visaSelect = (
      <div>
        <label for='visas'>Select a visa type:</label>
        <select name='visas' id='visas' onChange={this.callApi}>
          <option value=''>--Select--</option>
          <option value='H-1B'>H-1B</option>
          <option value='CW-1'>CW-1</option>
          <option value='E-1'>E-1</option>
          <option value='E-2'>E-2</option>
          <option value='E-2C'>E-2C</option>
        </select>
        {/*<button onClick={this.callApi}>
          Learn more
    </button>*/}
      </div>
    );
    const visaResults = (
      <div>
          <h3>{this.state.visa}</h3>
          <h4>Info about the {this.state.visa} visa:</h4>
          <p>{this.state.info}</p>
          <p>For more information click <a href={this.state.url}>here</a></p>
      </div>
    );
    if (this.state.visa != null) {
      return [titleVisas, visaSelect, visaResults];
    } else {
      return [titleVisas, visaSelect];
    }
  }

}

export default App;
