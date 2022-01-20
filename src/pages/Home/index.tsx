import { Link } from "react-router-dom";
import { Container } from "reactstrap";

export function Home() {
  return (
    <Container className="d-flex justify-content-center align-items-center p-5 m-5">
      <Link className="btn btn-primary btn-group-lg" to={"/veiculos-cadastro"}>Veiculos cadastro</Link>
    </Container>
  );
}