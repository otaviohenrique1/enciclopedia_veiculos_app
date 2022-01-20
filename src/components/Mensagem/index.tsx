import { Alert } from "reactstrap";

interface AlertMensagemErroProps {
  mensagemErro: string;
}

export function AlertMensagemErro(props: AlertMensagemErroProps) {
  return (
    <Alert color="danger" className="mt-1">{props.mensagemErro}</Alert>
  );
}