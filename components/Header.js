
import Link from "next/link";
import { useRouter } from 'next/router'
import {useState} from 'react'

const Header = () => {
 
  const router =useRouter();
  const value = router.asPath.replace('/','');
  
 
  const [page,setPage]=useState(value);


    return(
    <nav  >
        <ul className="nav-links">
          <li className={page===''?`activeNav`:'null'}><a href="/">HOME</a></li>
          <li className={page==='projects'?`activeNav`:'null'}><a href="/projects">PROJECTS</a></li>
          <li className={page==='skills'?`activeNav`:'null'}><a href="/skills">SKILLS</a></li>
          <li className={page==='contact'?`activeNav`:'null'}><a href="/contact">CONTACT</a></li>
        </ul>
    </nav>);
  
 
    
  
    };

export default Header;
