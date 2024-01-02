// yarn add react-bootstrap bootstrap" ve REACT BOOTST. SAYFASINDAN CSS IMPORT ETMEK, BOOTSTRAP KODU YAZMAK ICIN YAPILMALI

import Header from './components/Header';
import Cards from './components/Cards';
import Container  from "react-bootstrap/Container";

function App() {
  return (
    <Container className='text-center p-4'>
      <Header/>
      <Cards/>      
    </Container>
  );
}

export default App;
