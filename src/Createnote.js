import React from 'react';
const Createnote = () =>{
return(
	<>
	<div className="main_note">
     <form>
     <input type="text" placeholder="Title" autocomplete="off"/>
     <textarea rows="" column="" placeholder="write a note......"/>
     <button>+</button>
     </form>
	</div>
	</>

	);
}
export default Createnote;