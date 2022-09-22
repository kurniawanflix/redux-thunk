import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "./commentSlice";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const CommentList = () => {
  const allComments = useSelector((state) => state.comments.entities);
  const dispatch = useDispatch();
  const doFetchComments = () => {
    dispatch(fetchComments());
  };

  return (
    <Container>
      <h1 className="m-4">Comments Data</h1>
      <div className="m-4">
        <Button
          onClick={doFetchComments}
          variant="primary"
        >
          Get Data
        </Button>
      </div>
      <Table striped className="text-start">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {allComments.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.name}</td>
              <td>{comment.email}</td>
              <td>{comment.body}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CommentList;
