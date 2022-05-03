import './App.css';
import { Button, Tag } from './components';

function App() {
  return (
    <div className='App'>
      <Button primary>Apply filters</Button>
      <Button>Clear filters</Button>
      <Tag color='blue'>One</Tag>
      <Tag color='red'>Two</Tag>
      <Tag color='green'>Three</Tag>
      <Tag color='violet'>Four</Tag>
      <Tag>Five</Tag>
    </div>
  );
}

export default App;
