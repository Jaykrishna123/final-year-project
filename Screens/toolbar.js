import react from 'react';
import '/toolbar.css';
const toolbar = props =>(
<header className="toolbar">
<nav className="toolbar__navigation">
    <div></div>
   <div className="toolbar__logo"> 
       <a href= "/"> THE LOG0 </a>
   </div >
   <div className="toolbar__navigation_items">
   <ul>
       <li><a href= "/"> PRODUCT </a></li>
       <li><a href= "/"> USERS </a></li>
    </ul>
    </div>   

</nav>

</header>
);
export default toolbar;
