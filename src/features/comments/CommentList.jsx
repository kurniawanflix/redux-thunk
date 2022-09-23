import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "./CommentSlice";
import { Toaster } from "react-hot-toast";
import { Container, Button, Table, Spinner } from "react-bootstrap";

const CommentList = () => {
  const dispatch = useDispatch();
  const allComments = useSelector((state) => state.comments.entities);
  const loading = useSelector((state) => state.comments.loading);

  const doFetchComments = () => {
    dispatch(fetchComments());
  };

  return (
    <Container>
      <Toaster />
      <h1 className="m-4">Comments Data</h1>
      <div className="m-4">
        <Button onClick={doFetchComments} variant="primary">
          Get Data
        </Button>
      </div>
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      <Table striped className="text-start">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {allComments.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.id}</td>
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
