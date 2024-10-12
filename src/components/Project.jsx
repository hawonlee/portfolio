import './Project.css';
import timely from '../images/timely_home.png';

function Project(props) {

    return (
        <div className='project-container'>
            <img src={props.image} alt="timely" />
            <div className='project-text-container'>
                <title-text> {props.title}</title-text>
                <br></br>
                <desc-text> {props.description} </desc-text>
            </div>
        </div>
    )

}

export default Project