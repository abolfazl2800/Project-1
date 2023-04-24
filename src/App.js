import './App.css';
import Antd from "./Component/Antd";
import Upload from './Component/Upload';

const App = () => {
  return (
    <Upload>
      <div className='wrapper'>
      <div className='app'>
        <Antd />
      </div>
      <input type='file'></input>
    </div>
    </Upload>
  )
}

export default App;