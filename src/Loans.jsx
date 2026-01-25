import { Link } from "react-router";
import { IoMdCheckmarkCircle } from "react-icons/io";

function Loans({ loanPrograms, lang, viewDetails, translations }) {
  const HIGHLIGHT_WORDS = {
    en: [
      "Personal",
      "Income",
      "Real Estate",
      "Unit",
      "Streamlined",
      "Income-Based",
      "Tax Returns",
      "Employment",
      "Mid-Sized",
      "Residential",
      "Efficient",
      "Alternative",
      "Self-Employed",
      "Flexible",
      "Simplified",
      "Social Security",
    ],
    fr: [
      "Personnel",
      "Revenu",
      "Immobilier",
      "Logements",
      "Simplifié",
      "basé sur les revenus",
      "Impôts",
      "Déclarations",
      "Emploi",
      "De taille moyenne",
      "Résidentiel",
      "Efficace",
      "Alternatif",
      "Travailleur indépendant",
      "Flexible",
      "Sécurité sociale",
    ],
    es: [
      "Personales",
      "Ingresos",
      "Bienes Raíces",
      "Unidades",
      "Simplificado",
      "Basado en ingresos",
      "Impuestos",
      "Declaraciones",
      "Empleo",
      "De tamaño mediano",
      "Residencial",
      "Eficiente",
      "Alternativo",
      "Trabajador independiente",
      "Flexible",
      "Seguro Social",
    ],
  };

  // 🔥 phrase-based highlighter
  const highlightText = (text) => {
    let result = text;

    HIGHLIGHT_WORDS[lang]?.forEach((phrase) => {
      const regex = new RegExp(`(${phrase})`, "gi");
      result = result.replace(
        regex,
        `<span class="loan-highlight">$1</span>`
      );
    });

    return result;
  };

  return (
    <div className="loan-programs">
      <h1>Loan Programs</h1>

      <div>
        {loanPrograms.map((l) => (
          <div key={l.loanId}>
            <img src={l.icon} alt={l.loanName} />
            <h4>{l.loanName}</h4>
            <hr />

            <ul>
              {l.keyFeatures[lang].map((feature, i) => (
                <li key={i}>
                  <IoMdCheckmarkCircle className="loan-check" />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: highlightText(feature),
                    }}
                  />
                </li>
              ))}
            </ul>

            <Link className="form-button" to={`/loans/${l.loanId}`}>
              {viewDetails[lang].viewDetails}
            </Link>
          </div>
        ))}
      </div>

      <Link className="back-button" to="/">
        {translations.about[lang].back}
      </Link>
    </div>
  );
}

export default Loans;
