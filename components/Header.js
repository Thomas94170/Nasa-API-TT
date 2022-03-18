import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// import styleHeader from "../styles/header.module.css"
import styles from "../styles/header.module.css"



export const Header=()=> {
    const router = useRouter();
    
    
  return (
      <div className="d-flex justify-content-evenly">
          <div className={styles.header} >
      <Link href="/" passHref>  
      <span className={router.pathname === "/" ? styles.active : styles.link}>Home</span>
      </Link>
      <Link href="/mars" passHref>
      <span className={router.pathname === "/mars" ? styles.active : styles.link}>Mars</span>
      </Link>
      <Link href="/terre" passHref>
      <span className={router.pathname === "/terre" ? styles.active : styles.link}>Terre</span>
      </Link>
      <Link href="/about" passHref>
      <span className={router.pathname === "/about" ? styles.active : styles.link}>About</span>
      </Link>
      
      
        </div>
      </div>
    
  )
}

