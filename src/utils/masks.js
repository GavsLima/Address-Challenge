export const maskCep = (value) => {
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d)/, "$1-$2");
  return value;
};

export const maskTelefone = (value) => {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d{5})(\d)/, "($1)$2-$3");
    return value;
}
