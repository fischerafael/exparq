export const height = [
  { value: 0, label: "1 Pavimento - Até 4 m" },
  { value: 1 / 3, label: "2 ou 3 Pavimentos - Até 12 m" },
  { value: 2 / 3, label: "Até 8 Pavimentos - Até 32 m" },
  { value: 3 / 3, label: "Mais de 8 Pavimentos" },
];

export const size = [
  { value: 0, label: "Super Pequeno - Até 10 m²" },
  { value: 1 / 4, label: "Pequeno - Até 30 m²" },
  { value: 2 / 4, label: "Médio - Até 90 m²" },
  { value: 3 / 4, label: "Grande - Até 200 m²" },
  { value: 4 / 4, label: "Super Grande - Mais de 200 m²" },
];

export const complexity = [
  { value: 0, label: "Baixa Complexidade - 1 Volume" },
  { value: 1 / 3, label: "Média Complexidade - até 3 volumes" },
  { value: 2 / 3, label: "Alta Complexidade - até 7 volumes" },
  { value: 3 / 3, label: "Muito Alta Complexidade - mais de 7 volumes" },
];

export const shape = [
  { value: 0, label: "Totalmente Ortogonal" },
  { value: 1 / 3, label: "Ortogonal com algumas formas orgânicas" },
  { value: 2 / 3, label: "Orgânico com algumas formas ortogonais" },
  { value: 3 / 3, label: "Totalmente Orgânico" },
];

export const materials = [
  { value: 0, label: "Totalmente Naturais" },
  { value: 1 / 3, label: "Naturais com alguns elementos artificiais" },
  { value: 2 / 3, label: "Artificais com alguns elementos naturais" },
  { value: 3 / 3, label: "Totalmente Artificiais" },
];

export const textures = [
  { value: 0, label: "Totalmente Lisa" },
  { value: 1 / 3, label: "Mais lisa do que rugosa" },
  { value: 2 / 3, label: "Mais rugosa do que lisa" },
  { value: 3 / 3, label: "Totalmente Rugosa" },
];

export const tones = [
  { value: 0, label: "Tons de Cinza, Branco e Preto" },
  { value: 1 / 2, label: "Tons Pasteis" },
  { value: 2 / 2, label: "Cores Vivas" },
];

export const colors = [
  { value: 0, label: "Branco" },
  { value: 1 / 9, label: "Preto" },
  { value: 2 / 9, label: "Cinza" },
  { value: 3 / 9, label: "Vermelho" },
  { value: 4 / 9, label: "Laranja" },
  { value: 5 / 9, label: "Amarelo" },
  { value: 6 / 9, label: "Verde" },
  { value: 7 / 9, label: "Azul" },
  { value: 8 / 9, label: "Roxo" },
  { value: 9 / 9, label: "Rosa" },
];

export const lightIntensity = [
  { value: 0, label: "Muito Escuro - Interno" },
  { value: 1 / 3, label: "Levemente Iluminado - Interno ou Transição" },
  { value: 2 / 3, label: "Bem Iluminado - Externo ou Transição" },
  { value: 3 / 3, label: "Muito Iluminado - Externo" },
];

export const contrast = [
  { value: 0, label: "Muito Contraste" },
  { value: 1 / 2, label: "Algum Contraste" },
  { value: 2 / 2, label: "Pouco Contraste" },
];

export const open = [
  { value: 0, label: "Muito Fechado" },
  { value: 1 / 3, label: "Mais Fechado do que aberto" },
  { value: 2 / 3, label: "Mais Aberto do que fechado" },
  { value: 3 / 3, label: "Muito Aberto" },
];

export const quantity = [
  { value: 0, label: "Poucos Usuários - até 4 usuários" },
  { value: 1 / 3, label: "Alguns Usuários - 5+" },
  { value: 2 / 3, label: "Vários Usuários - 30+" },
  { value: 3 / 3, label: "Muitos Usuários - 100+" },
];

export const movement = [
  { value: 0, label: "Pouco Movimento" },
  { value: 1 / 3, label: "Algum Movimento" },
  { value: 2 / 3, label: "Muito Movimento" },
  { value: 3 / 3, label: "Muitíssimo Movimento" },
];

export const landmark = [
  { value: 0, label: "Sem Interesse" },
  { value: 1 / 3, label: "Algum Interesse" },
  { value: 2 / 3, label: "Muito Interesse" },
  { value: 3 / 3, label: "Muitíssimo Interesse" },
];

export const contextType = [
  { value: 0, label: "Floresta" },
  { value: 1 / 5, label: "Campo" },
  { value: 2 / 5, label: "Artificial e Urbano de Baixa Densidade" },
  { value: 3 / 5, label: "Artificial e Urbano de Alta Densidade" },
  { value: 4 / 5, label: "Deserto" },
  { value: 5 / 5, label: "Gelo e Neve" },
];

export const timeOfDay = [
  { value: 0, label: "Dia" },
  { value: 1 / 2, label: "Noite" },
  { value: 2 / 2, label: "Amanhecer ou Entardecer" },
];

export const weather = [
  { value: 0, label: "Ensolarado" },
  { value: 1 / 5, label: "Nublado" },
  { value: 2 / 5, label: "Chuvoso" },
  { value: 3 / 5, label: "Neve" },
  { value: 4 / 5, label: "Neblina" },
  { value: 5 / 5, label: "Tempestade" },
];

export const temperature = [
  { value: 0, label: "Muito Frio" },
  { value: 1 / 4, label: "Frio" },
  { value: 2 / 4, label: "Ameno" },
  { value: 3 / 4, label: "Quente" },
  { value: 4 / 4, label: "Muito Quente" },
];

export const options = {
  height,
  size,
  complexity,
  shape,
  materials,
  textures,
  tones,
  colors,
  lightIntensity,
  contrast,
  open,
  quantity,
  movement,
  landmark,
  contextType,
  timeOfDay,
  weather,
  temperature,
};
