import './Work.css';
import timely_home from '../images/timely_home.png';
import Project from './Project.jsx'

function Work() {

    return (
        <div className='work-container'>
            <Project
                image={timely_home}
                title={"TIMELY"}
                description={"timely is a time converter app"}
                
            />
        </div>
    )
    

}

export default Work