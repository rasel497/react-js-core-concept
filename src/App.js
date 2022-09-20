import logo from './logo.svg';
import './App.css';

const number = 666;
const singers = [
  { name: 'Dr. Mahfuz', job: 'Singer' },
  { name: 'Eva rahman', Job: 'Female Singer' },
  { name: 'Agun', job: 'shopnoo' },
  { name: 'shuvo', job: 'pathorGora' }
]

// style
const singerStyle = {
  color: 'purple'
}

function App() {
  const nayoks = ['Rasel', 'Rubel', 'BappaRaz', 'Kuber', 'Jashim', 'Salman Shah', 'Riyaz'];
  const naika = ['moushomi'];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      {/* Woww display dynamicaaly */}
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}
      {/* <Person name={noyoks[0]} naika="moushomi"></Person>
      <Person name={noyoks[1]} naika="chokoChoko"></Person>
      <Person name={noyoks[2]} naika="Kopila"></Person> */}

      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }

      <h5>New componant . YAYAAA</h5>
      <p id='totoCompany'>rock mama, im in raect hunting</p>
      <Friend name="Mr. Props" phone="015555196"></Friend>
      <Friend name="Mr. Componant" phone="019654464"></Friend>

    </div >
  );
}

// person func
function Person(props) {
  // console.log(props);
  return (
    <div className='person'>
      <h1>Name: {props.name}</h1>
      <p>Naika: {props.naika}</p>
    </div>
  )
}

//friend
function Friend(props) {
  console.log(props);
  return (
    <div className='container'>
      <h1>Name: {props.name}</h1>
      <p>Phone: {props.phone}</p>

    </div>
  )
}

export default App;


{/* <header className="App-header">
        <h2>JSX</h2>
        <div className="container">
          <h3>Helloo dude: React. How are you?</h3>
        </div>

        <div className="count-music">
          <p>Name: {number + 333}</p>
        </div>

        <div className="singer">
          <p style={singerStyle}>Name: {singer.name} {singer.job}</p>
        </div>

        <div className="ladySinger">
          <p style={{ color: 'black', backgroundColor: 'yellow' }}>Name: {singer2.name} {singer2.job}</p>
        </div>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header> */}