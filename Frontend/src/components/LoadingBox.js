import Spinner from 'react-bootstrap/Spinner';

export default function LoadingBox() {
  return (
    <div className='position-absolute top-50 start-50 translate-middle' >
<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
    
  );
}