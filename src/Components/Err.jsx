import { Link } from 'react-router-dom';
import err from '../../public/404-error-page-templates.jpg'
 
const Err = () => {
    return (
        <div className='h-full w-full'>
            <img src={err} alt="" />
            <Link to={'/'} className='btn btn-outline btn-primary flex  text-center'>Home</Link>
        </div>
    );
};

export default Err;