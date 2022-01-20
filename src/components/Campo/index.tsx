import { Field } from "formik";
import { FaSearch } from "react-icons/fa";
import { Col, Form, InputGroup, InputGroupText, Label } from "reactstrap";
import { ColumnProps } from "reactstrap/types/lib/Col";
import Input, { InputType } from "reactstrap/types/lib/Input";
import styled from "styled-components";
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

interface CampoBuscaTabelaProps {
  value: string | number | readonly string[];
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export function CampoBuscaTabela(props: CampoBuscaTabelaProps) {
  return (
    <Form className="d-flex flex-row align-items-center" onSubmit={event => event.preventDefault()}>
      <InputBuscaArea>
        <InputGroupText className="campo-busca-label">
          <Label for="filter_table" className="mb-0 me-2 fw-bold form-label">Pesquisar</Label>
          <FaSearch />
        </InputGroupText>
        <Input type="text" id="filter_table" value={props.value || ""} placeholder="Busca" className="campo-busca"
          onChange={props.onChange} />
      </InputBuscaArea>
    </Form>
  );
}

const InputBuscaArea = styled(InputGroup)`
  .campo-busca-label {
    border-end-start-radius: 50rem!important;
    border-start-start-radius: 50rem!important;
  }
  
  .campo-busca {
    border-end-end-radius: 50rem!important;
    border-start-end-radius: 50rem!important;
  }
`;
