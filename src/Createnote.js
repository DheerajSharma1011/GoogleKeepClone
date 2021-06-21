import React,{useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
const Createnote = (props) =>{
	const[expand,setExpand]=useState(false);
	const[note,setNote] = useState({
		title:"",
		content:"",
	});
	const InputEvent=(event)=>{
        const  {name,value}=event.target;
		setNote((prevData)=>{
		return{	...prevData,
		          [name]:value,
		};
		});
	}
	const addEvent=()=>{
		props.passNote(note);
		setNote({
			title:"",
			content:"",
		});
	};
	const expandIt=()=>{
		setExpand(true);
	};
	const normal=()=>{
    setExpand(false);
	}
return(
	<>
	<div className="main_note"  onDoubleClick={normal}>
     <form>
     {
     	expand?
     <input type="text"
     name="title"
      value={note.title}
      onChange={InputEvent}
      placeholder="Title" autocomplete="off"/>
     :null}
    
    		 <textarea rows=""
   				  name="content" 
    		      value={note.content}
       			  onChange={InputEvent}
                  column="" 
                  onClick={expandIt}
                  placeholder="write a note......"></textarea>
    {
    	expand?
            <Button onClick={addEvent}><AddIcon className="plus_sign"/></Button>
             :null}
       </form>
	</div>
	</>

	);
}
export default Createnote;