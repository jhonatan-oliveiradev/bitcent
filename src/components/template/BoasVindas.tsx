// import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";
import falseUser from "@/data/constants/falseUser";
import { useContext } from "react";

export default function BoasVindas() {
	// const { usuario } = useContext(AutenticacaoContext);
	const usuario = falseUser;

	function renderName() {
		return (
			<span className="hidden sm:inline">{usuario?.nome?.split(" ")[0]}</span>
		);
	}

	return <div className={`text-3xl font-black`}>Olá {renderName()} 👋</div>;
}
