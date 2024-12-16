import Breadcrumbs from "../components/Breadcrumbs";

export default async function Page() {
  return (
    <div className="">
      <Breadcrumbs
        items={[
          { label: "Accueil", path: "/" },
          { label: "À propos", path: "/about" },
        ]}
      />
      <h1 className="text-green-600 font-semibold text-2xl">
        À propos de ClickEtPaf
      </h1>
      <section className="mt-6">
        <h2 className="text-xl text-green-600 font-semibold">
          ClicketPaf : une vision audacieuse, une révolution du paiement
        </h2>
        <p className="text-gray-900 mt-2">
          Fondée en 2020, ClicketPaf est née d&apos;une idée simple, mais
          ambitieuse : réinventer la manière dont nous effectuons nos paiements
          au quotidien. Dans un monde de plus en plus digitalisé, où la rapidité
          et la sécurité sont devenues essentielles, ClicketPaf s&apos;est donné
          pour mission de créer une solution accessible et innovante qui
          simplifie la vie des utilisateurs, tout en répondant aux exigences des
          commerçants.
        </p>
        <blockquote className="italic bg-green-200 mt-3 rounded-lg p-3">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>quote_left_fill</title>{" "}
              <g
                id="页面-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                {" "}
                <g
                  id="Editor"
                  transform="translate(-624.000000, -144.000000)"
                  fill-rule="nonzero"
                >
                  {" "}
                  <g
                    id="quote_left_fill"
                    transform="translate(624.000000, 144.000000)"
                  >
                    {" "}
                    <path
                      d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                      id="MingCute"
                      fill-rule="nonzero"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M8.40001,6.20006 C8.84184,5.86869 9.46864,5.95823 9.80001,6.40005 C10.1314,6.84188 10.0418,7.46868 9.60002,7.80006 C8.03605,8.97305 7.13907,10.1135 6.62712,11.1097 C6.90615,11.0381 7.19863,11.0000002 7.5,11.0000002 C9.433,11.0000002 11,12.567 11,14.5000002 C11,16.433 9.433,18.0000002 7.5,18.0000002 C5.58635,18.0000002 4.0314,16.4642 4.00047,14.5579 C3.91027,13.6929 3.92344,12.4169 4.50804,10.9437 C5.10548,9.43818 6.27242,7.79577 8.40001,6.20006 Z M17.4,6.20006 C17.8418,5.86869 18.4686,5.95823 18.8,6.40005 C19.1314,6.84188 19.0418,7.46868 18.6,7.80006 C17.036,8.97305 16.1391,10.1135 15.6271,11.1097 C15.9061,11.0381 16.1986,11.0000002 16.5,11.0000002 C18.433,11.0000002 20,12.567 20,14.5000002 C20,16.433 18.433,18.0000002 16.5,18.0000002 C14.5863,18.0000002 13.0314,16.4642 13.0005,14.5579 C12.9103,13.6929 12.9234,12.4169 13.508,10.9437 C14.1055,9.43818 15.2724,7.79577 17.4,6.20006 Z"
                      id="形状结合"
                      fill="#15803d"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
          Nous voulions offrir une expérience de paiement qui ne soit pas
          seulement fonctionnelle, mais aussi fluide et agréable
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>quote_right_fill</title>{" "}
              <g
                id="页面-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                {" "}
                <g
                  id="Editor"
                  transform="translate(-672.000000, -144.000000)"
                  fill-rule="nonzero"
                >
                  {" "}
                  <g
                    id="quote_right_fill"
                    transform="translate(672.000000, 144.000000)"
                  >
                    {" "}
                    <path
                      d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                      id="MingCute"
                      fill-rule="nonzero"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M16.5,6 C18.4137,6 19.9686,7.5358 19.9995,9.44208 C20.0897,10.3071 20.0766,11.5831 19.492,13.0563 C18.8945,14.5618 17.7276,16.2042 15.6,17.7999 C15.1582,18.1313 14.5314,18.0418 14.2,17.5999 C13.8686,17.1581 13.9582,16.5313 14.4,16.1999 C15.964,15.027 16.8609,13.8865 17.3729,12.8903 C17.0938,12.9619 16.8014,13 16.5,13 C14.567,13 13,11.433 13,9.5 C13,7.567 14.567,6 16.5,6 Z M7.5,6 C9.41366,6 10.9686,7.5358 10.9995,9.44209 C11.0897,10.3071 11.0766,11.5831 10.492,13.0563 C9.89452,14.5618 8.72758,16.2042 6.59999,17.7999 C6.15816,18.1313 5.53136,18.0418 5.19999,17.5999 C4.86861,17.1581 4.95815,16.5313 5.39998,16.1999 C6.96395,15.027 7.86093,13.8865 8.37288,12.8903 C8.09385,12.9619 7.80137,13 7.5,13 C5.567,13 4,11.433 4,9.5 C4,7.567 5.567,6 7.5,6 Z"
                      id="形状"
                      fill="#15803d"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>{" "}
        </blockquote>
        <p className="text-gray-500 font-light italic mb-4">
          explique Emma Dupont, notre co-fondatrice et directrice technique
        </p>
        <p className="text-gray-900 mt-2">
          En à peine quelques années, ClicketPaf s’est imposée comme une
          référence dans l’univers des paiements mobiles, avec déjà plus de 500
          000 téléchargements de son application à travers l’Europe. Notre
          parcours est marqué par une croissance rapide et un engagement
          constant envers nos utilisateurs.
        </p>
      </section>
      <section className="mt-6">
        <h2 className="text-xl text-green-600 font-semibold">
          2020 : La naissance d’une idée
        </h2>
        <p className="text-gray-900 mt-2">
          L’histoire de ClicketPaf commence dans un petit bureau à Paris,
          lorsque Emma Dupont et Julien Martin, passionnés de fintech et
          d’innovation, décident de répondre à une frustration qu’ils
          rencontrent souvent dans leur vie quotidienne : des paiements trop
          longs ou peu fiables.
        </p>
        <blockquote className="italic bg-green-200 mt-3 rounded-lg p-3 p-3">
          <b className="text-xl">&quot;</b>
          Tout le monde a déjà connu une file d’attente interminable ou un
          terminal de paiement en panne. Nous voulions éliminer ces irritants et
          offrir une solution intuitive et universelle.
          <b className="text-xl">&quot;</b>
        </blockquote>
        <p className="text-gray-500 font-light italic mb-4">
          Nous voulions éliminer ces irritants et offrir une solution intuitive
          et universelle.
        </p>
        <p className="text-gray-900 mt-2">
          En juillet 2020, après plusieurs mois de recherches et de
          brainstorming, les deux entrepreneurs lancent officiellement
          ClicketPaf avec une idée maîtresse : utiliser les smartphones comme
          outil central pour effectuer des paiements{" "}
          <b className="text-green-500 font-medium">rapides</b>,{" "}
          <b className="text-green-500 font-medium">sans contact</b> et
          <b className="text-green-500 font-medium">hautement sécurisés</b>.
        </p>
      </section>
      <section className="mt-6">
        <h2 className="text-xl text-green-600 font-semibold">
          Une technologie de pointe au service de tous
        </h2>
        <p className="text-gray-900 mt-2">
          Le cœur de l’application ClicketPaf repose sur une technologie de
          paiement innovante, combinant{" "}
          <b className="text-green-500 font-medium">cryptage de pointe</b> et{" "}
          <b className="text-green-500 font-medium">
            intelligence artificielle
          </b>
          . Grâce à ces avancées, l’application garantit à la fois :
          <li className="flex items-center gap-2">
            <span className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-dot stroke-green-600"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="1" />
              </svg>
            </span>
            <span>
              <b className="text-green-500 font-medium">
                Une sécurité maximale
              </b>
              , protégeant les données personnelles et bancaires des
              utilisateurs.
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-dot stroke-green-600"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="1" />
              </svg>
            </span>
            <span>
              <b className="text-green-500 font-medium">Une vitesse inégalée</b>
              , permettant de finaliser un paiement en moins de 5 secondes.
            </span>
          </li>
        </p>
        <p className="text-gray-900 mt-2">
          À sa sortie en novembre 2020, ClicketPaf comptait déjà 10 000
          utilisateurs actifs, séduits par sa simplicité et ses fonctionnalités
          pratiques, comme la possibilité d’effectuer des paiements en ligne et
          en magasin via un simple QR code ou en approchant son téléphone d’un
          terminal compatible.
        </p>
      </section>
      <section className="mt-6">
        <h2 className="text-xl text-green-600 font-semibold">
          Des chiffres qui parlent
        </h2>
        <p className="text-gray-900 mt-2">
          En seulement trois ans, ClicketPaf a connu une ascension fulgurante :
          <li className="flex items-center gap-2">
            <span className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-dot stroke-green-600"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="1" />
              </svg>
            </span>
            <span>
              <b className="text-green-500 font-medium">500 000 utilisateurs</b>
              , enregistrés en 2023, dont 65 % déclarent utiliser l’application
              quotidiennement.
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-dot stroke-green-600"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="1" />
              </svg>
            </span>
            <span>
              <b className="text-green-500 font-medium">
                25 000 commerçants partenaires
              </b>
              à travers l’Europe, séduits par une solution qui réduit les frais
              de transaction et simplifie leur gestion.
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-dot stroke-green-600"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="1" />
              </svg>
            </span>
            <span>
              <b className="text-green-500 font-medium">
                Un taux de satisfaction client de 98 %
              </b>
              selon une enquête interne menée en mai 2023.
            </span>
          </li>
        </p>
        <p className="text-gray-900 mt-2">
          Ces chiffres témoignent du succès de l’application, mais aussi de
          l’engouement général pour des solutions de paiement innovantes.
        </p>
      </section>
      <section className="mt-6">
        <h2 className="text-xl text-green-600 font-semibold">
          Une équipe soudée, une mission partagée
        </h2>
        <p className="text-gray-900 mt-2">
          Derrière le succès de ClicketPaf, il y a une équipe passionnée de 35
          employés qui travaillent chaque jour pour perfectionner l’application
          et répondre aux besoins de ses utilisateurs.{" "}
        </p>
        <blockquote className="italic bg-green-200 mt-3 rounded-lg p-3">
          <b className="text-xl">&quot;</b>
          Nous sommes avant tout une famille. Chaque membre de l’équipe partage
          une vision commune : transformer le paiement en une expérience
          positive pour tous.
          <b className="text-xl">&quot;</b>
        </blockquote>
        <p className="text-gray-500 font-light italic mb-4">
          affirme Laura Perez, responsable du service client
        </p>
      </section>
      <section className="mt-6">
        <h2 className="text-xl text-green-600 font-semibold">
          2022 : L’année des grandes évolutions
        </h2>
        <p className="text-gray-900 mt-2">
          En 2022, ClicketPaf franchit une étape importante en intégrant le
          paiement en plusieurs fois sans frais, une fonctionnalité qui attire
          immédiatement l’attention des jeunes consommateurs et des familles.
        </p>
        <p className="text-gray-900 mt-2">
          Selon une étude menée par l’entreprise cette année-là, 75 % des
          utilisateurs âgés de 25 à 40 ans préfèrent utiliser ClicketPaf pour
          des achats supérieurs à 500 €, grâce à cette nouvelle option.{" "}
        </p>
        <p className="text-gray-900 mt-2">
          En parallèle, l’application s’ouvre à de nouveaux marchés en dehors de
          la France, notamment en{" "}
          <b className="text-green-500 font-medium">Belgique</b>,{" "}
          <b className="text-green-500 font-medium">Espagne</b> et{" "}
          <b className="text-green-500 font-medium">Italie</b>, où elle connaît
          un succès immédiat.{" "}
        </p>
      </section>
      <section className="mt-6">
        <h2 className="text-xl text-green-600 font-semibold">
          ClicketPaf : Une application, plusieurs usages
        </h2>
        <p className="text-gray-900 mt-2">
          Aujourd’hui, ClicketPaf se distingue par sa polyvalence. Voici
          quelques-uns des usages les plus populaires :
        </p>
        <li className="flex items-center gap-2">
          <span className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-dot stroke-green-600"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="1" />
            </svg>
          </span>
          <span>
            <b className="text-green-500 font-medium">Paiements en magasin :</b>
            Rapides et sans contact grâce à la technologie NFC.
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-dot stroke-green-600"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="1" />
            </svg>
          </span>
          <span>
            <b className="text-green-500 font-medium">Paiements en ligne : </b>
            En scannant un QR code ou en cliquant sur un lien sécurisé.
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-dot stroke-green-600"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="1" />
            </svg>
          </span>
          <span>
            <b className="text-green-500 font-medium">
              Transferts entre particuliers :{" "}
            </b>
            Parfait pour partager une addition ou rembourser un ami en un clic.
          </span>
        </li>
        <p className="text-gray-900 mt-2">
          En 2023, ClicketPaf introduit également des fonctionnalités
          éco-responsables, comme l’option de compenser l’impact carbone de ses
          achats directement depuis l’application.
        </p>
      </section>
      <section className="mt-6">
        <h2 className="text-xl text-green-600 font-semibold">
          L’avenir de ClicketPaf
        </h2>
        <p className="text-gray-900 mt-2">
          Le voyage ne s’arrête pas là pour ClicketPaf. L’entreprise prévoit de
          lancer de nouvelles fonctionnalités majeures en 2024, notamment :
        </p>
        <li className="flex items-center gap-2">
          <span className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-dot stroke-green-600"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="1" />
            </svg>
          </span>
          <span>
            <b className="text-green-500 font-medium">
              Une carte virtuelle intégrée{" "}
            </b>
            pour les achats en ligne sur des sites non partenaires.
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-dot stroke-green-600"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="1" />
            </svg>
          </span>
          <span>
            <b className="text-green-500 font-medium">
              Un programme de fidélité universel
            </b>
            permettant aux utilisateurs de cumuler des points chez les
            commerçants participants.
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-dot stroke-green-600"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="1" />
            </svg>
          </span>
          Une expansion dans de nouveaux marchés en Europe de l’Est et en
          Scandinavie.
        </li>
        <blockquote className="italic bg-green-200 mt-3 rounded-lg p-3">
          <b className="text-xl">&quot;</b>
          Nous avons pour ambition de devenir l’application de paiement préférée
          en Europe d’ici 2030
          <b className="text-xl">&quot;</b>
        </blockquote>
        <p className="text-gray-500 font-light italic mb-4">
          déclare Julien Martin avec enthousiasme.{" "}
        </p>
      </section>
    </div>
  );
}
