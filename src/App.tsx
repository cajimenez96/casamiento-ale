import Hero from './components/Hero';
import EventSchedule from './components/EventSchedule';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  return (
    <>
      <div style={{ marginTop: 20, marginBottom: 10 }}>
        <Hero />
      </div>
      <div style={{ marginTop: 20, marginBottom: 10 }}>
        <EventSchedule />
      </div>
    </>
  );
}

export default App;
