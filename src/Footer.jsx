import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function Footer () {
    return (
        <section>
            <div id = "rodape">
                <img src={heroImg} id = "logo" ></img>
                <img src={viteLogo} className='home' href = "google.com" ></img>
                <img src={reactLogo} className='contacto' href = "google.com" ></img>
            </div>
        </section>
        
    )
}

export default Footer; 
