import Recetas from "../componentes/Recetas";

function Dashboard({ listaRecetas, setListaRecetas }) {
  return (
    <div>
      <Recetas listaRecetas={listaRecetas} setListaRecetas={setListaRecetas} />
    </div>
  );
}

export default Dashboard;
