
import './App.css';
import {Component} from 'react'

class App extends Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     giphy: []
  //   }
  // }

  state = {
    giphy: []
  }

  componentDidMount(){
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=SRVQi3x5GemkWU7cAsG0T6FlTdL9QwLR&limit=25&rating=')
    .then(res => res.json())
    .then(json => {
      console.log(json.data)
      this.setState({giphy: json.data})
    })
  }

  render(){
    return (
      <div className="App">
       <h1>GIPHY APP</h1>
     {
         this.state.giphy.map(g => (
           <div key={g.id}>
             <img src={g.images.original.url} alt={g.title}/>
             <h3>{g.title}</h3>
            </div>
         ))
       }
      </div>
    )
  }
}

export default App;
