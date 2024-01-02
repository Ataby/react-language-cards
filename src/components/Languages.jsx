import { useState } from 'react'
import  Image   from 'react-bootstrap/Image';
import  Container  from 'react-bootstrap/Container';


const Languages = ({name,img,options}) => {
  
  const [flip, setflip] = useState(false);
  
  console.log(flip);
  // console.log(name);
  //JSX ICINDE KOSULLANDIRMA DURUMU ICIN TERNARY YADA SHORT CIRCUIT KULLANILIR. IF-ELSE KULLANILMAZ.
  //KARTLARIN BOYUTUNUN HEPSININ AYNI OLMASI ICIN KARTA VE UST TASIYICILARA 'HEIGHT:100%' VERILMELIDIR.
  return (
  
  <div className='h-100' style={{}} >
    <Container className='p-1 rounded-2 h-100 lang-card' 
    style={{backgroundColor:"peachpuff",border:"2px solid white"}}
    onClick={()=>setflip(!flip)}>

      {!flip && (
        <Container>
        <Image className='lang-logo' src={img} width="70%"/>
        <h2 className='mt-2 '>{name}</h2>
        </Container>
       )}
      

      {flip && 
        (<ul className='h-100 d-flex flex-column justify-content-center'>
            {options.map((item)=>{
              return (
                <li className='text-start h5'> {item}</li>
                );
              })}
          </ul> ) }  

        </Container>
</div>

  )
}

export default Languages;