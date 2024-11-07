import logo from '../../icones/logo transparente.png'
import  './header.css'
export default function Header() {
    return(
        <header>
            <div className='conteudo'>
        <img src={logo} alt="Logotipo - Dyzahra Edock" className='logo'/>

        <h1>DYZAHRA EDOCK</h1>
             </div>
        </header>
    )
}