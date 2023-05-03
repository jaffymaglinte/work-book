import { useState } from 'react';
import reactLogo from '@/assets/react.svg';
import viteLogo from '/vite.svg';
import '@/App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@/themes/light.css';

// Testing
import TextField from '@/components/atoms/TextField';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TestCarousel = () => {
  return (
    <Carousel autoPlay>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
        <p className="legend">Legend 6</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
        <p className="legend">Legend 7</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
        <p className="legend">Legend 8</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
        <p className="legend">Legend 9</p>
      </div>
      <div>
        <img
          alt=""
          src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg"
        />
        <p className="legend">Legend 10</p>
      </div>
      <div>
        <img
          alt=""
          src="http://lorempixel.com/output/cats-q-c-640-480-11.jpg"
        />
        <p className="legend">Legend 11</p>
      </div>
      <div>
        <img
          alt=""
          src="http://lorempixel.com/output/cats-q-c-640-480-12.jpg"
        />
        <p className="legend">Legend 12</p>
      </div>
      <div>
        <img
          alt=""
          src="http://lorempixel.com/output/cats-q-c-640-480-13.jpg"
        />
        <p className="legend">Legend 13</p>
      </div>
      <div>
        <img
          alt=""
          src="http://lorempixel.com/output/cats-q-c-640-480-14.jpg"
        />
        <p className="legend">Legend 14</p>
      </div>
    </Carousel>
  );
};

function App() {
  return (
    <div className="App">
      <TestCarousel />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <TextField size="small" />
    </div>
  );
}

export default App;
