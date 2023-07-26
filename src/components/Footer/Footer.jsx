import './Footer.scss'
import facebook from '../../images/icon-facebook.svg'
import instagram from '../../images/icon-instagram.svg'

export default function Footer(){

    return(
        <div className="footer">
            <div className="bottom-line">
            <span className="bottom-line--copy">Copyright &copy; 2023 izdebski.dev </span>
            <div className="bottom-line--icons">

                <a href="#" className="btn btn--small"><img src={facebook}/></a>
                <a href="#" className="btn btn--small"><img src={instagram}/></a>

            </div>
            </div>
      </div>
    ) 
}
// localhost:3000/favicon.ico
