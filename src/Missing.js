import { Link } from 'react-router-dom';

const Missing = () => {
    return (
        <main className='Missing'>
            <h2>404</h2>
            <h3>Page Not Found</h3>

            <Link to='/'>Back to home</Link>
        </main>
    )
}

export default Missing