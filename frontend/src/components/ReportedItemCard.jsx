import { Card} from "react-bootstrap";
import { Link } from "react-router-dom";

const ReportedItemCard = ({ item }) => {
  const isUId = ()=>{
    return localStorage.getItem("userId");
  }
  return (
    <div className="reported-item">
      <Card
        key={item._id}
        className="container mt-3 w-50 border border-success"
        bg="dark"
        text="light"
      >
        <Card.Body>
          <Card.Title className="mt-2">
            <u>Item Category:</u> {item.category}
          </Card.Title>
          <Card.Subtitle className="mb-3 mt-1">
            <u>Description:</u> {item.desc}
          </Card.Subtitle>
          {isUId()?
          <Link to={`/items/${item._id}`} className="btn btn-success mb-2" variant="success">
            Read More
          </Link>:null
          }
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReportedItemCard;