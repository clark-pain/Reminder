import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

//
// class Home extends Component {
//   render() {
//     return (
//       <div>
//       <Header />
//
//
//
//       </div>
//     );
//   }
// }
// export default Home;

class Home extends Component {
  render() {
    return(
      <div className="App">
        <h1>Project Home</h1>
        {/* Link to List.js */}
        <Link to={'./list'}>
          <button variant="raised">
              My List
          </button>
        </Link>
      </div>
    )
  }
}



export default Home;
