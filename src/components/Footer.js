import React from "react";
import logoF from "../assets/KASA_logo_footer.png"
import "../styles/footer.css"

function Footer(){
    return( 
        <footer>
        <img src={logoF} alt="Logo Kasa blanc sur fond noir"/>
        <p>© 2022 Kasa. All rights reserved</p>
    </footer>

 )
}

export default Footer