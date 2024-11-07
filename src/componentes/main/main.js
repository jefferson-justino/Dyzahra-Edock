import imgYoutube from '../../icones/youtube.svg'
import imgKawai from '../../icones/kawaii.png'
import imgInstagram from '../../icones/instagram.svg'
import imgTiktok from '../../icones/tik-tok.svg'
import imgDiscord from '../../icones/discord.svg'
import imgThreads from '../../icones/threads.svg'

import './main.css'

export default function Main (){
    const objetos = [
        {icone: imgYoutube, titulo: 'Youtube', link:'https://www.youtube.com/@dyzahra_edock' },
        {icone: imgDiscord, titulo: 'Discord', link:'https://discord.gg/tTJZadTpC3' },
        {icone: imgThreads, titulo: 'threads', link:'https://www.threads.net/@dyzahra_edock' },
        {icone: imgInstagram, titulo: 'Instagram', link:'https://www.instagram.com/dyzahra_edock' },
        {icone: imgKawai, titulo: 'Kwai', link:'https://www.kwai.com/@Dyzahra_Edock' },
        {icone: imgTiktok, titulo: 'TikTok', link:'https://www.tiktok.com/@dyzahra_edock?' },
        
    ]

    let conteudo = objetos.map((item)=>{
        return(
            <a href={item.link} target="_blank" rel='noreferrer'>
                <div className='card'>
                    <img src={item.icone} alt="preview"/>
                    <h3>{item.titulo}</h3>
                                     
                </div>
            </a>
        )
    })


    return(
        <main>
                {conteudo}
        </main>

    )
}