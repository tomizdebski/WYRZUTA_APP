//import './Footer.scss'
import facebook from '../../images/icon-facebook.svg'
import instagram from '../../images/icon-instagram.svg'

export default function Footer(){

    return(
        
            <div className="fixed bottom-10 left-20 flex flex-center h-10 justify-between gap-5">
                <span className="bottom-line--copy">Copyright &copy; 2023 izdebski.dev </span>
                <div className="flex">

                    <a href="#" className="btn btn--small"><img className="h-10" src={facebook}/></a>
                    <a href="#" className="btn btn--small"><img className="h-10" src={instagram}/></a>

                </div>
            </div>
    )
}
// localhost:3000/favicon.ico
