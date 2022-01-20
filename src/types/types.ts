export interface DataTypes {
  nome: string;
  pais_origem: string;
  tipo: string;
}

export interface FormTypes extends DataTypes {
  status: string;
  classificacao: string;
  fabricante: string;
  utilizadores: string;
  variantes: string;
  quantidade_produzida: string;
  quantidade_produzida_unidade: string;
  periodo_servico: string;
  massa: string;
  massa_unidade: string;
  comprimento: string;
  comprimento_unidade: string;
  altura: string;
  altura_unidade: string;
  largura: string;
  largura_unidade: string;
  tripulacao: string;
  custo_unitario: string;
  custo_unitario_moeda: string;
  armamento: string;
}
