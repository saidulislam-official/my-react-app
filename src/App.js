import logo from './logo.svg';
import './App.css';
import myImage from './images/sahiya.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul className="nav-link">
          <li>Home</li>
          <li>Sevices</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </header>
      <body className='App-body'>
        <div className="main-content">
          <h1 className='body-header'>Welcome to our page, sahiya rana </h1>
          <p>This is a simple page</p>

          <section>
            <h2>From</h2>
            <from className="from-test">
            <label> your name : </label>
            <input placeholder='Input your name' type='text'>
            </input>
            <label> your password : </label>
            <input placeholder='Input your password' type='password'>
            </input>
            <button>Sign In</button>
            </from>
          </section>
        </div>
        <section>
          
          <h2>Our Services</h2>
          <ul>
            <li>Web Development</li>
            <li>Mobile Development</li>
            <li>Desktop Development</li>
          </ul>
        </section>
        <h2 id='image-header'>Saidul and Sahiya Rana Photo</h2>
        <div className="image">
          
          <img src={myImage} alt='sahiya'/>
        </div>
        <section>
          <h2>Contact Us</h2>
          <p>Phone:123456789</p>
          <p>Email:saidulislam@gmail.com</p>
        </section>
      </body>
    </div>
  );
}



export default App;
