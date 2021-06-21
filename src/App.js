import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Createnote from './Createnote';
import Note from './Note';
function App() {
  const [addItem,setaddItem]=useState([]);
  const addNote=(note)=>{
    setaddItem((prevData)=>{
          return[...prevData,note]
    });
  };
  const onDelete=(id)=>{
    setaddItem((olddata)=>
      olddata.filter((currdata,index)=>{
      return index !==id;
              })
      )
  }
  return (<>
    <Header/>
    <Createnote passNote={addNote} />
    {
      addItem.map((val,index)=>{
      return(
           <Note
            key={index}
                 id={index}
                 title={val.title}
                 content={val.content} 
                 deleteItem={onDelete} />
                  );
            })}
    <Footer/>
        </>
  );
}

export default App;
