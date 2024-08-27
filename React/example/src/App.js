import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';
import MessageComponent from './components/MessageComponent';
import CounterComponent from './components/CounterComponent';

function App() {
  return (
    <div className="App">
      <h2>İlk Props Örneği</h2>
      <ParentComponent/>

      <h2>Varsayılan Props Örneği</h2>
      <MessageComponent message = "Bu gönderilen mesajdır."/>

      <MessageComponent/>

      <h2>State Örneği</h2>
      <CounterComponent/>
    </div>
  );
}

export default App;
