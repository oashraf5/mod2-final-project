import React from 'react';

      class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <Player />
      </div>
    );
  }
}
 
export default App;

      </header>
    </div>
  );
}
  


export default App;

componentDidMount() 
  axios.get('https://www.balldontlie.io/api/v1/players')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
export default App;    
          

