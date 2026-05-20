import "./Header.css"
import heroImg from './assets/hero.png'

function Header () {
    return (
        <div>
            <logo><img src={heroImg} alt="Hero Vite" id="logo"/></logo>
                <nav>
                    <a href="/home" id="home" >HOME</a>
                    <a href="/contactos">CONTACTOS</a>
                </nav>
                <div className="clear"></div>
        </div>
    )
}

export default Header; 