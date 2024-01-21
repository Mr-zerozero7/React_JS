// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  return (
    <>
    <Navbar title='Amazon' aboutText = 'About@' />
    <div className='m-3  p-3 d-flex flex-column justify-center'>
      <Textform heading= 'Enter the text Analyze' /> 
                                                        {/* pass the props like this heading= "Enter text" */}
    </div>
    </>
  );
}

export default App;
