import React from 'react';
import './App.css'
import CardContainer from './components/CardContainer'
import unsplash from './api/unsplash'

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const onSearchSubmit = async (term) => {
  const response = await unsplash.get('/search/photos', {
      
params: { query: term }
})
return response.data
}

class App extends React.Component {
  state = ({
    Termstate: "",
    ListState: [],
    Compare: []

  })


onChange = (e) => {
  this.setState({Termstate: e.target.value})
}
onSubmit = async (e) => {
  e.preventDefault()
  console.log(this.state.Termstate)
  const list =  await onSearchSubmit(this.state.Termstate)
  let listFilter = list.results.map(el => 
    {return {
      img: el.urls.regular,
      specialid: el.id,
      id: el.id,
      status: "open",
      won: 0}
    });
    console.log(listFilter)
    let anotherList = JSON.parse(JSON.stringify(listFilter))
    anotherList.forEach(x => {
    x.specialid = x.specialid + 1;

    })
    console.log(anotherList)


  const NewArr = [...listFilter, ...anotherList]
const finalArr = shuffle(NewArr)
  this.setState({ListState: finalArr})

  setTimeout(() => {
    this.Play()
  }, 3000);

}
 Play = () => {
  let newListState = JSON.parse(JSON.stringify(this.state.ListState))
  console.log(newListState)
newListState.forEach(x => {x.status="closed"})
console.log(newListState)
this.setState({ListState: [...newListState]})
  
}
SendId = (specialid, id) => {
  let newListState = JSON.parse(JSON.stringify(this.state.ListState))
  console.log(newListState)
newListState.forEach(x => {if(x.specialid===specialid){x.status="open"}})
console.log(newListState)
this.setState({ListState: [...newListState], Compare: [...this.state.Compare, id]})

}


componentDidUpdate(){
  if(this.state.Compare.length === 2){
    setTimeout(() => {
if(this.state.Compare[0] === this.state.Compare[1]){
  let newListState = JSON.parse(JSON.stringify(this.state.ListState))
  console.log(newListState)
newListState.forEach(x => {if(x.id===this.state.Compare[0]){x.won=1}})
console.log(newListState)
this.setState({ListState: [...newListState], Compare: []})
}
if(this.state.Compare[0] !== this.state.Compare[1]){
  let newListState = JSON.parse(JSON.stringify(this.state.ListState))
  console.log(newListState)
newListState.forEach(x => {if(x.won === 0){x.status = "closed"}})
console.log(newListState)
this.setState({ListState: [...newListState], Compare: []})
}
else {}
}, 1000);
}
}
  render(){return (
    <div style={{width: '100%'}}>
    <div className="App">
      <form onSubmit={this.onSubmit} style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        < input type="text" value={this.state.Termstate} onChange={this.onChange}  style={{width: '50%'}}  />
        < input type="submit" value="Search" />
      </form>
      <button className="playButton" onClick={this.Play}>Play</button>
      </div>
  <CardContainer SendId={this.SendId} ListState={ this.state.ListState } />
    </div>
  )}
}

export default App;
