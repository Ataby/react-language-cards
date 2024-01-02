// CHILD ELEMENT 1'DEN FAZLA OLABILIR. O YUZDEN "KARTLAR" CONTAINER'ININ ICINDEKI KARTLARA VERILERI AKTARMAK ICIN PARENT ELEMENTTE KULLANMAK GEREKIR (LIFTING-UP STATE). CUNKU REACT'TA VERI AKISI YUKARIDAN ASAGI DOGRUDUR.

//IMPORT'LAR COMPOMNENT BASED OLDUGU ICIN HER COMP. ICIN IMPORT GEREKIR.

import Languages from "./Languages";
import   Container   from "react-bootstrap/Container";
import   Row   from "react-bootstrap/Row";
import   Col   from "react-bootstrap/Col";
import {data} from "../assets/data";
//'EXPORT DEFAULT' YOKSA, SADECE'EXPORT' VARSA SUSLU PARANTEZ ILE ALINIR 

 
const Cards = () => {
console.log(data);

  return (
    <Container className="rounded-3 mt-4 ps-4 pe-4 pb-4" 
    style={{background:"rgba(255, 213, 0,0.6)"}} >

      <Row className="pt-3">
        <h1 className="">PROGRAMMING LANGUAGES</h1>
          {data.map((item,index)=>{
          return (
            <Col className="mt-3" sm={6} md={4} lg={3} >
              <Languages name={item.name} img={item.img} options={item.options} key={index} /> 
             {/* LANGUAGE ELEMENTINI, MAP ADEDI KADAR BASTIRDIK
             <Languages {...Languages}/> */}
            </Col>
            );
          })}
      </Row>      
    </Container>
  )
}

export default Cards;