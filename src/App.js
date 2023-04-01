
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import News from './components/news/News';
import Header from './pages/Header';
import NavBar from './pages/NavBar';
// import LocalRoute from './routes/LocalRoute';
import About from './layout/about/About'
import { theme } from './services/themes/Theme';
import Economy from './layout/economy/Economy';
import AllFigture from './components/politicalFigture/AllFigture';
import Woman from './components/members/Woman';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <NavBar />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/economy' element={<Economy />} />
          <Route path='/news' element={<News />} />
          <Route path='/politicalfigture' element={<AllFigture />} />
          <Route path='/woman' element={<Woman />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
