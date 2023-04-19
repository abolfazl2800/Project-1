import './App.css';
import Antd from "./Component/Antd";
import Upload from './Component/Upload';

const App = () => {
  return (
    <div className='wrapper'>
      <div className='app'>
        <Antd />
        <Upload />
      </div>
      <input type='file'></input>
    </div>
  )
}

export default App;