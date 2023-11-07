import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Footer from './Components/Footer/Footer';
import MainRoutes from './Pages/MainRoutes/MainRoutes';
import { useSelector } from 'react-redux';
import LoadingPage from './Components/LoadingPage/LoadingPage';

function App() {
  const isLoading = useSelector(store=>store.reducer.isLoading);
  return (
    <div className="App">
      {isLoading ? <LoadingPage/> : <></>}
      <Navbar/>
      <MainRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
