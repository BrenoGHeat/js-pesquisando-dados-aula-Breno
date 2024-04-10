function procuraSobremesa(sobremesas, valorDoInput) {
    const resultado = listaDeSobremesas.filter((sobremesa) =>
      sobremesa.nome.toLowerCase().includes(valorDoInput.toLowerCase())

    );

  return resultado;
}
