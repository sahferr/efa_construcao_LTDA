import Image, { StaticImageData } from "next/image";
import administrationImage from "../assets/admin.png";
import enterpriseImage from "../assets/enterprise.jpg";
import founderImage from "../assets/founder.png";
import "../styles/aboutStyles.css";

// ── Dados ──────────────────────────────────────────────

const enterprise = {
  name: "EFA Construção LTDA",
  description:
    "A EFA Construção LTDA é uma empresa especializada na execução de obras residenciais e empreendimentos de alto padrão, atuando no mercado da construção civil desde 2016. Com uma equipe qualificada e experiência consolidada, oferecemos soluções completas em serviços de alvenaria, acabamentos e infraestrutura, sempre priorizando qualidade, organização, cumprimento de prazos e excelência na execução. Ao longo de nossa trajetória, já realizamos mais de 14 obras entregues dentro ou antes dos prazos estabelecidos, construindo relações de confiança com clientes, engenheiros e arquitetos.",
};

const stats = [
  { valor: "2016", label: "Fundação" },
  { valor: "14+", label: "Obras entregues" },
  { valor: "100%", label: "No prazo" },
];

const team: {
  name: string;
  business: string;
  bio: string[];
  image: StaticImageData | null;
  initials: string;
}[] = [
  {
    name: "Antonio Domingos Miguel",
    business: "Fundador",
    bio: [
      "Natural de Castelo do Piauí, Antônio Domingos Miguel mudou-se para São Paulo em 1987 em busca de oportunidades. Aos 15 anos de idade, iniciou sua trajetória na construção civil como ajudante de obras, aprendendo na prática cada etapa do processo construtivo.",
      "Com dedicação, responsabilidade e paixão pela profissão, desenvolveu suas habilidades técnicas e conquistou experiência na liderança de equipes e gestão de obras, participando de diversos projetos ao longo dos anos.",
      "Em 2016, fundou a EFA Construção LTDA com o propósito de oferecer serviços de qualidade, baseados em compromisso, organização e respeito aos clientes e parceiros. Desde então, a empresa vem atuando em obras residenciais e empreendimentos de alto padrão, construindo uma trajetória marcada pela busca constante pela excelência na execução dos serviços e pelo cumprimento dos prazos acordados.",
      "Hoje, a EFA Construção representa a experiência acumulada ao longo de décadas de trabalho na construção civil, unindo conhecimento técnico, comprometimento e dedicação em cada projeto realizado.",
    ],
    image: founderImage,
    initials: "AD",
  },
  {
    name: "Raquel Ferreira",
    business: "Gerente Admin.",
    bio: [
      "Responsável pela gestão administrativa e financeira da EFA Construção LTDA, atuando no suporte operacional das obras e no relacionamento com clientes, fornecedores e parceiros.",
      "Possui experiência em controle financeiro, elaboração e acompanhamento de orçamentos, gestão de pagamentos e recebimentos, organização documental e apoio aos processos administrativos da empresa.",
      "Graduanda em Ciências Econômicas pela Universidade Paulista (UNIP), conta com mais de três anos de experiência na área administrativa e financeira, contribuindo para a organização dos processos internos, o controle de recursos e a eficiência operacional da empresa.",
      "Sua atuação é fundamental para garantir transparência, planejamento e suporte à execução dos projetos desenvolvidos pela EFA Construção LTDA.",
    ],
    image: administrationImage,
    initials: "RF",
  },
];

// ── Subcomponentes ─────────────────────────────────────

function AboutHeader() {
  return (
    <div className="about-header">
      <p className="about-eyebrow">Quem Somos</p>
      <h2 className="about-section-title">Análise &amp; Biografia</h2>
    </div>
  );
}

function EnterpriseText() {
  return (
    <div className="enterprise-text">
      <h3 className="card-title">{enterprise.name}</h3>
      <p className="card-description">{enterprise.description}</p>
      <div className="about-stats">
        {stats.map((s) => (
          <div key={s.label} className="stat-item">
            <span className="stat-valor">{s.valor}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EnterpriseImage() {
  return (
    <div className="enterprise-image-wrapper">
      <Image
        src={enterpriseImage}
        alt="EFA Construção LTDA"
        className="enterprise-image"
        sizes="(max-width: 600px) 100vw, (max-width: 960px) 100vw, 380px"
      />
    </div>
  );
}

function EnterpriseCard() {
  return (
    <div className="about-card enterprise-card">
      <EnterpriseText />
      <EnterpriseImage />
    </div>
  );
}

function MemberPhoto({
  image,
  name,
  initials,
}: {
  image: StaticImageData | null;
  name: string;
  initials: string;
}) {
  return (
    <div className="member-photo">
      {image ? (
        <Image
          src={image}
          alt={name}
          className="member-img"
          sizes="(max-width: 600px) 100vw, 160px"
        />
      ) : (
        <div className="member-initials">{initials}</div>
      )}
    </div>
  );
}

function MemberBio({ bio }: { bio: string[] }) {
  const mid = Math.ceil(bio.length / 2);
  const left = bio.slice(0, mid);
  const right = bio.slice(mid);

  return (
    <div className="bio-columns">
      <div className="bio-col">
        {left.map((paragraph, i) => (
          <p key={i} className="bio-paragraph">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="bio-col">
        {right.map((paragraph, i) => (
          <p key={i} className="bio-paragraph">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

function MemberInfo({
  name,
  business,
  bio,
}: {
  name: string;
  business: string;
  bio: string[];
}) {
  return (
    <div className="member-info">
      <p className="member-business">{business.toUpperCase()}</p>
      <h3 className="member-name">{name.toUpperCase()}</h3>
      <MemberBio bio={bio} />
    </div>
  );
}

function MemberCard({
  name,
  business,
  bio,
  image,
  initials,
}: {
  name: string;
  business: string;
  bio: string[];
  image: StaticImageData | null;
  initials: string;
}) {
  return (
    <div className="about-card member-card">
      <MemberPhoto image={image} name={name} initials={initials} />
      <MemberInfo name={name} business={business} bio={bio} />
    </div>
  );
}

// ── Componente principal ───────────────────────────────

export default function About() {
  return (
    <section className="about" id="about">
      <AboutHeader />
      <EnterpriseCard />
      {team.map((member) => (
        <MemberCard key={member.initials} {...member} />
      ))}
    </section>
  );
}
