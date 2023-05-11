import Cabecalho from "@/components/template/Cabecalho";
import Conteudo from "@/components/template/Conteudo";
import Pagina from "@/components/template/Pagina";
import { IconForms } from "@tabler/icons-react";

export default function CadastroUsuario() {
	return (
		<Pagina>
			<Cabecalho />
			<Conteudo>usuario</Conteudo>
		</Pagina>
	);
}
