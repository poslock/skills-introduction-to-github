import React from 'react';
import ReactDOM from 'react-dom';
import './soma-app.css';
import SleepSongs from './SleepSongs';
import BedtimeTips from './BedtimeTips';
import Alarm from './Alarm';

const App = () => {
 return (
    <div className="App">
      <header>
        <h1>SOMA - Sleep Better</h1>
      </header>
      <main>
        <section id="sleep-songs">
          <h2>Sleep Songs</h2>
          <SleepSongs />
        </section>
        <section id="bedtime-tips">
          <h2>Bedtime Tips</h2>
          <BedtimeTips />
        </section>
        <section id="alarm">
          <h2>Bedtime Alarm</h2>
          <Alarm />
        </section>
      </main>
      <footer>
        <p>&copy; 2023 SOMA - Sleep Better</p>
      </footer>
    </div>
 );
};

ReactDOM.render(<App />, document.getElementById('root'));