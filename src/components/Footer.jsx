import React from "react";


function Footer() {
  const year = new Date().getFullYear();
  return(
    <footer>
    <p>Copyright ⓒ Clark Pain {year}</p>
    </footer>
  )
}

export default Footer;
