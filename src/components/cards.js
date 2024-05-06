import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({ id, thumbnail, title, description }) {
    return (
        <>
            <Card key={id} style={{ width: '25rem' }} className='course-card cursor-pointer'>
                <div style={{ height: '200px', overflow: 'hidden' }}> {/* Adjust height as needed */}
                    <Card.Img variant="top" src={thumbnail} style={{ objectFit: 'cover', height: '100%' }} />
                </div>
                <Card.Body>
                    <Card.Title className='font-bold'>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
            <style jsx="true">{`
    .course-card {
        transition: transform 0.3s;
    }
    .course-card:hover {
        transform: scale(1.05);
    }
`}</style>
        </>
    );
}

export default Cards;
