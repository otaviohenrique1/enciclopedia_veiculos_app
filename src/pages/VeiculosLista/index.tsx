import { useEffect, useMemo, useState } from "react";
import { useAsyncDebounce, useGlobalFilter, usePagination, useSortBy, useTable } from "react-table";
import { Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledButtonDropdown } from "reactstrap";
import styled from "styled-components";
import { ContainerApp } from "../../components/ContainerApp";
import { BsFillGearFill } from "react-icons/bs";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { ExibePaginaInicialFinalTabela, ExibirQuantidadeItensTabela, IrParaPaginaTabela, PaginationTabela } from "../../components/PaginationTabela";
import { Tabela } from "../../components/Tabela";
import { CampoBuscaTabela } from "../../components/Campo";
import { lista_veiculo } from "../../utils/listaVeiculos";
const SwalModal = withReactContent(Swal);

interface DataTypes {
  nome: string;
  pais_origem: string;
  tipo: string;
}

export function VeiculosLista() {
  const [dataLista, setDataLista] = useState<DataTypes[]>([]);

  useEffect(() => {
    setDataLista(lista_veiculo);
  }, []);

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, setGlobalFilter,
    canPreviousPage, canNextPage, pageOptions, pageCount, gotoPage, nextPage, previousPage,
    setPageSize, state: { pageIndex, pageSize, globalFilter }, } = useTable({
      columns: useMemo(() => [{
        Header: () => null,
        isVisible: false,
        id: 'medidas',
        hideHeader: false,
        columns: [
          {
            Header: '#',
            accessor: 'id_tabela',
            id: 'id_tabela',
            Cell: (cell) => cell.row.index,
          },
          { Header: 'Nome', accessor: 'nome', id: 'nome' },
          { Header: 'Pais de origem', accessor: 'pais_origem', id: 'pais_origem' },
          { Header: 'Tipo', accessor: 'tipo', id: 'tipo' },
          {
            Header: () => null,
            id: 'menu_item',
            Cell: (cell) => {
              let idRowTabela = cell.row.index;
              
              return (
                <UncontrolledButtonDropdownEstilizado>
                  <DropdownToggle caret className="caret-off d-flex justify-content-center align-items-center w-50 btn-success">
                    <BsFillGearFill size={20} />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Exibir</DropdownItem>
                    <DropdownItem>Imagem</DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        SwalModal.fire({
                          title: <h3>Excluir</h3>,
                          buttonsStyling: false,
                          confirmButtonText: 'Sim',
                          showCancelButton: true,
                          cancelButtonText: 'Não',
                          customClass: {
                            confirmButton: 'btn btn-primary me-1',
                            cancelButton: 'btn btn-danger',
                          },
                        }).then(() => {
                          dataLista.splice(idRowTabela, 1);
                          setDataLista([...dataLista]);
                        });
                      }}
                    >Excluir</DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdownEstilizado>
              );
            }
          },
        ],
      },], [dataLista]), data: dataLista, initialState: { pageIndex: 0 },
    }, useGlobalFilter, useSortBy, usePagination);

  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200);

  return (
    <ContainerApp>
      <Row>
        <Col md={12}>
          <h1 className="w-100 text-center">Veiculos Lista</h1>
        </Col>
        <Col md={12}>
        <Row>
            <Col md={6} className="d-flex justify-content-between align-items-center flex-row">
              <CampoBuscaTabela
                onChange={event => {
                  setValue(event.target.value);
                  onChange(event.target.value);
                }}
                value={value}
              />
            </Col>
            <Col md={12}>
              <Tabela
                getTableProps={getTableProps}
                headerGroups={headerGroups}
                getTableBodyProps={getTableBodyProps}
                page={page}
                pageSize={pageSize}
                prepareRow={prepareRow}
                colSpan={5}
              />
            </Col>
            {(page.length === 0) ? (null) : (
              <Col md={12} className="d-flex justify-content-end align-items-center flex-row mb-5">
                <ExibePaginaInicialFinalTabela
                  pageIndex={pageIndex}
                  pageOptions={pageOptions}
                />
                <PaginationTabela
                  gotoPage={gotoPage}
                  canPreviousPage={canPreviousPage}
                  previousPage={previousPage}
                  nextPage={nextPage}
                  canNextPage={canNextPage}
                  pageCount={pageCount}
                />
                <IrParaPaginaTabela
                  pageIndex={pageIndex}
                  gotoPage={gotoPage}
                />
                <ExibirQuantidadeItensTabela
                  pageSize={pageSize}
                  setPageSize={setPageSize}
                />
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </ContainerApp>
  );
}

const UncontrolledButtonDropdownEstilizado = styled(UncontrolledButtonDropdown)`
  .caret-off::before {
    display: none;
  }

  .caret-off::after {
      display: none;
  }
  
  width: 100%;
`;
