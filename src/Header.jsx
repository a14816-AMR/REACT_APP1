import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function Header () {
    return (

        <section>
            <div id = "logo">
                <img src={heroImg} ></img>
            </div>

            <div id = "home">
                <img src={viteLogo} className='home' href = "google.com" ></img>
            </div>

            <div id = "contacto">
                <img src={reactLogo} className='contacto' href = "google.com" ></img>
            </div>

        </section>
    )
}

export default Header; 