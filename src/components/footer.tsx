import Image from "next/image";
import saferrLogo from "../assets/saferr.svg";

export const Footer = () => {
  return (
    <footer className="contact-footer">
      <div>
        <span className="contact-footer-text">
          <p>© 2026 </p>
          <p>Todos os direitos reservados.</p>
          <p>EFA Construção LTDA CNPJ: 25.284.125/0001-11</p>
        </span>
      </div>
      <div>
        <span className="contact-footer-text">
          <p>Raquel Ferreira</p>
          <p>raquel.efaconstrucao@gmail.com</p>
        </span>
        <span className="contact-footer-text">
          <p>Antonio Miguel</p>
          <p>antonio.efaconstrucao@gmail.com</p>
        </span>
      </div>
      <div className="contact-footer-credit">
        <p style={{ fontSize: "10px" }}>Desenvolvido por {""}</p>
        <Image src={saferrLogo} alt="saferr" height={16} />
      </div>
    </footer>
  );
};
