import people from '../../images/about-us.jpg'
import './Info.scss'


export default function Info(){

    return (
    <div className="about-us">
        <div className="about-us--text">
            <h2 className="text-4xl font-extrabold font-oswald">O nas</h2>
            <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas vitae animi rem pariatur incidunt libero optio esse quisquam illo omnis.</p>
        </div>
        <div className="about-us--image"><img src={people} alt="People in circle" /></div>
    </div>
    )
}