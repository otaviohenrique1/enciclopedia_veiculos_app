import { Field } from "formik";
import { Col } from "reactstrap";
import { ColumnProps } from "reactstrap/types/lib/Col";
import { InputType } from "reactstrap/types/lib/Input";
import { AlertMensagemErro } from "../Mensagem";

interface CampoFormularioProps {
  md?: ColumnProps;
  value?: string | number | readonly string[];
  type?: InputType;
  name?: string;
  id?: string;
  placeholder?: string;
  errors_touched_campo?: any;
  errors_campo?: any;
}

export function CampoFormulario(props: CampoFormularioProps) {
  return (
    <Col md={(props.md) ? props.md : 1} className="mb-2">
      <Field
        className='form-control'
        value={props.value}
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
      />
      {(props.errors_touched_campo) ? (<AlertMensagemErro mensagemErro={props.errors_campo} />) : null}
    </Col>
  );
}

interface CampoSelectFormularioProps extends CampoFormularioProps {
  data: {
    valor: any;
    texto: any;
  }[];
  valor_campo_vazio_select: string;
}

export function CampoSelectFormulario(props: CampoSelectFormularioProps) {
  return (
    <Col md={(props.md) ? props.md : 1} className="mb-2">
      <Field
        className='form-select'
        value={props.value}
        name={props.name}
        id={props.id}
        component="select"
      >
        <option value="" selected>{props.valor_campo_vazio_select}</option>
        {props.data.map((item, index) => (
          <option key={index} value={item.valor}>{item.texto}</option>
        ))}
      </Field>
      {(props.errors_touched_campo) ? (<AlertMensagemErro mensagemErro={props.errors_campo} />) : null}
    </Col>
  );
}