import { ReactNode } from "react";
import { Container } from "reactstrap";
import { Header } from "../Header";

interface ContainerAppProps{
  children: ReactNode;
}

export function ContainerApp(props: ContainerAppProps) {
  return (
    <>
      <Header />
      <Container className="p-5">
        {props.children}
      </Container>
    </>
  );
}