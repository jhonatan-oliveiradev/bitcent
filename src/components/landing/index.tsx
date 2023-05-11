import Pagina from "../template/Pagina";
import Cabecalho from "./cabecalho";
import Depoimentos from "./depoimentos";
import Destaques from "./destaques";
import Rodape from "./rodape";
import Vantagens from "./vantagens";

export default function Landing() {
	return (
		<Pagina>
			<Cabecalho />
			<Destaques />
			<Vantagens />
			<Depoimentos />
			<Rodape />
		</Pagina>
	);
}
