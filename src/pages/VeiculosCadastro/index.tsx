import { Form, Formik, FormikHelpers } from "formik";
import { Button, ButtonGroup, Col, Container, Row } from "reactstrap";
import * as Yup from "yup";
import { CampoFormulario, CampoSelectFormulario } from "../../components/Campo";
import { Header } from "../../components/Header";
import { FormTypes } from "../../types/types";
import { classificacao_veiculo, status_veiculo } from "../../utils/listas";

export function VeiculosCadastro() {
  function onSubmit(values: FormTypes, formikHelpers: FormikHelpers<FormTypes>) {
    // 
  }

  return (
    <>
      <Header/>
      <Container className="p-5">
        <Row>
          <Col md={12}>
            <h1 className="w-100 text-center pb-5">Cadastro de veículos</h1>
          </Col>
          <Col md={12}>
            <Formik
              initialValues={valoresIniciais}
              validationSchema={validacaoSchema}
              onSubmit={onSubmit}
            >
              {({ errors, touched, values }) => (
                <Form>
                  <Row>
                    <CampoFormulario
                      name="nome"
                      id="nome"
                      placeholder="Nome do veículo"
                      type="text"
                      value={values.nome}
                      errors_campo={errors.nome}
                      errors_touched_campo={touched.nome}
                      md={4}
                    />
                    <CampoFormulario
                      name="pais_origem"
                      id="pais_origem"
                      placeholder="Pais de origem"
                      type="text"
                      value={values.pais_origem}
                      errors_campo={errors.pais_origem}
                      errors_touched_campo={touched.pais_origem}
                      md={4}
                    />
                    <CampoSelectFormulario
                      name="status"
                      id="status"
                      errors_campo={errors.status}
                      errors_touched_campo={touched.status}
                      md={4}
                      data={status_veiculo}
                      valor_campo_vazio_select="Status do veiculo"
                    />
                    <CampoSelectFormulario
                      name="classificacao"
                      id="classificacao"
                      errors_campo={errors.classificacao}
                      errors_touched_campo={touched.classificacao}
                      md={4}
                      data={classificacao_veiculo}
                      valor_campo_vazio_select="Classificação do veiculo"
                    />
                    <CampoFormulario
                      name="tipo"
                      id="tipo"
                      placeholder="Tipo de veiculo"
                      type="text"
                      value={values.tipo}
                      errors_campo={errors.tipo}
                      errors_touched_campo={touched.tipo}
                      md={4}
                    />
                    <CampoFormulario
                      name="fabricante"
                      id="fabricante"
                      placeholder="Fabricante(s) de veiculo"
                      type="text"
                      value={values.fabricante}
                      errors_campo={errors.fabricante}
                      errors_touched_campo={touched.fabricante}
                      md={4}
                    />
                    <CampoFormulario
                      name="utilizadores"
                      id="utilizadores"
                      placeholder="Utilizador(es) de veiculo"
                      type="text"
                      value={values.utilizadores}
                      errors_campo={errors.utilizadores}
                      errors_touched_campo={touched.utilizadores}
                      md={4}
                    />
                    <CampoFormulario
                      name="variantes"
                      id="variantes"
                      placeholder="Variante(s) do veiculo"
                      type="text"
                      value={values.variantes}
                      errors_campo={errors.variantes}
                      errors_touched_campo={touched.variantes}
                      md={4}
                    />
                    <Col md={4}>
                      <Row>
                        <CampoFormulario
                          name="quantidade_produzida"
                          id="quantidade_produzida"
                          placeholder="Quantidade"
                          type="number"
                          value={values.quantidade_produzida}
                          errors_campo={errors.quantidade_produzida}
                          errors_touched_campo={touched.quantidade_produzida}
                          md={6}
                        />
                        <CampoFormulario
                          name="quantidade_produzida_unidade"
                          id="quantidade_produzida_unidade"
                          placeholder="Unidade"
                          type="text"
                          value={values.quantidade_produzida_unidade}
                          errors_campo={errors.quantidade_produzida_unidade}
                          errors_touched_campo={touched.quantidade_produzida_unidade}
                          md={6}
                        />
                      </Row>
                    </Col>
                    <CampoFormulario
                      name="periodo_servico"
                      id="periodo_servico"
                      placeholder="Periodo de serviço"
                      type="text"
                      value={values.periodo_servico}
                      errors_campo={errors.periodo_servico}
                      errors_touched_campo={touched.periodo_servico}
                      md={4}
                    />
                    <Col md={4}>
                      <Row>
                        <CampoFormulario
                          name="massa"
                          id="massa"
                          placeholder="Massa"
                          type="number"
                          value={values.massa}
                          errors_campo={errors.massa}
                          errors_touched_campo={touched.massa}
                          md={6}
                        />
                        <CampoFormulario
                          name="massa_unidade"
                          id="massa_unidade"
                          placeholder="Unidade"
                          type="text"
                          value={values.massa_unidade}
                          errors_campo={errors.massa_unidade}
                          errors_touched_campo={touched.massa_unidade}
                          md={6}
                        />
                      </Row>
                    </Col>
                    <Col md={4}>
                      <Row>
                        <CampoFormulario
                          name="comprimento"
                          id="comprimento"
                          placeholder="Comprimento"
                          type="number"
                          value={values.comprimento}
                          errors_campo={errors.comprimento}
                          errors_touched_campo={touched.comprimento}
                          md={6}
                        />
                        <CampoFormulario
                          name="comprimento_unidade"
                          id="comprimento_unidade"
                          placeholder="Unidade"
                          type="text"
                          value={values.comprimento_unidade}
                          errors_campo={errors.comprimento_unidade}
                          errors_touched_campo={touched.comprimento_unidade}
                          md={6}
                        />
                      </Row>
                    </Col>
                    <Col md={4}>
                      <Row>
                        <CampoFormulario
                          name="altura"
                          id="altura"
                          placeholder="Altura"
                          type="number"
                          value={values.altura}
                          errors_campo={errors.altura}
                          errors_touched_campo={touched.altura}
                          md={6}
                        />
                        <CampoFormulario
                          name="altura_unidade"
                          id="altura_unidade"
                          placeholder="Unidade"
                          type="text"
                          value={values.altura_unidade}
                          errors_campo={errors.altura_unidade}
                          errors_touched_campo={touched.altura_unidade}
                          md={6}
                        />
                      </Row>
                    </Col>
                    <Col md={4}>
                      <Row>
                        <CampoFormulario
                          name="largura"
                          id="largura"
                          placeholder="Largura"
                          type="number"
                          value={values.largura}
                          errors_campo={errors.largura}
                          errors_touched_campo={touched.largura}
                          md={6}
                        />
                        <CampoFormulario
                          name="largura_unidade"
                          id="largura_unidade"
                          placeholder="Unidade"
                          type="text"
                          value={values.largura_unidade}
                          errors_campo={errors.largura_unidade}
                          errors_touched_campo={touched.largura_unidade}
                          md={6}
                        />
                      </Row>
                    </Col>
                    <CampoFormulario
                      name="tripulacao"
                      id="tripulacao"
                      placeholder="Tripulação"
                      type="number"
                      value={values.tripulacao}
                      errors_campo={errors.tripulacao}
                      errors_touched_campo={touched.tripulacao}
                      md={4}
                    />
                    <Col md={4}>
                      <Row>
                        <CampoFormulario
                          name="custo_unitario"
                          id="custo_unitario"
                          placeholder="Custo unitario"
                          type="number"
                          value={values.custo_unitario}
                          errors_campo={errors.custo_unitario}
                          errors_touched_campo={touched.custo_unitario}
                          md={6}
                        />
                        <CampoFormulario
                          name="custo_unitario_moeda"
                          id="custo_unitario_moeda"
                          placeholder="Moeda"
                          type="text"
                          value={values.custo_unitario_moeda}
                          errors_campo={errors.custo_unitario_moeda}
                          errors_touched_campo={touched.custo_unitario_moeda}
                          md={6}
                        />
                      </Row>
                    </Col>
                    <CampoFormulario
                      name="armamento"
                      id="armamento"
                      placeholder="Armamento"
                      type="text"
                      value={values.armamento}
                      errors_campo={errors.armamento}
                      errors_touched_campo={touched.armamento}
                      md={4}
                    />
                    <Col md={12} className="border-top pt-2 d-flex justify-content-end">
                      <ButtonGroup>
                        <Button type="submit" color="primary">Salvar</Button>
                        <Button type="reset" color="danger">Limpar</Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </>
  );
}

const valoresIniciais: FormTypes = {
  nome: '',
  pais_origem: '',
  status: '',
  classificacao: '',
  tipo: '',
  fabricante: '',
  utilizadores: '',
  variantes: '',
  quantidade_produzida: '',
  quantidade_produzida_unidade: '',
  periodo_servico: '',
  massa: '',
  massa_unidade: '',
  comprimento: '',
  comprimento_unidade: '',
  altura: '',
  altura_unidade: '',
  largura: '',
  largura_unidade: '',
  tripulacao: '',
  custo_unitario: '',
  custo_unitario_moeda: '',
  armamento: '',
};

const mensagem_campo_vazio = 'Campo vazio';

const validacaoSchema = Yup.object().shape({
  nome: Yup.string().required(mensagem_campo_vazio),
  pais_origem: Yup.string().required(mensagem_campo_vazio),
  status: Yup.string().required(mensagem_campo_vazio),
  classificacao: Yup.string().required(mensagem_campo_vazio),
  tipo: Yup.string().required(mensagem_campo_vazio),
  fabricante: Yup.string().required(mensagem_campo_vazio),
  utilizadores: Yup.string().required(mensagem_campo_vazio),
  variantes: Yup.string().required(mensagem_campo_vazio),
  quantidade_produzida: Yup.number().required(mensagem_campo_vazio),
  quantidade_produzida_unidade: Yup.string().required(mensagem_campo_vazio),
  periodo_servico: Yup.string().required(mensagem_campo_vazio),
  massa: Yup.number().required(mensagem_campo_vazio),
  massa_unidade: Yup.string().required(mensagem_campo_vazio),
  comprimento: Yup.number().required(mensagem_campo_vazio),
  comprimento_unidade: Yup.string().required(mensagem_campo_vazio),
  altura: Yup.number().required(mensagem_campo_vazio),
  altura_unidade: Yup.string().required(mensagem_campo_vazio),
  largura: Yup.number().required(mensagem_campo_vazio),
  largura_unidade: Yup.string().required(mensagem_campo_vazio),
  tripulacao: Yup.number().required(mensagem_campo_vazio),
  custo_unitario: Yup.number().required(mensagem_campo_vazio),
  custo_unitario_moeda: Yup.string().required(mensagem_campo_vazio),
  armamento: Yup.string().required(mensagem_campo_vazio),
});