import { FaStickyNote, FaBriefcase } from "react-icons/fa";
import {
  MdOutlineEmojiPeople,
  MdMiscellaneousServices,
  MdContactMail,
} from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";
export const dataHeader = [
  {
    id: 1,
    name: "Nosotros",
    idLink: "/#nosotros",
    icon: MdOutlineEmojiPeople,
  },
  {
    id: 2,
    name: "UtilCon",
    idLink: "/#utilcon",
    icon: MdOutlineEmojiPeople,
  },
  {
    id: 3,
    name: "Sin Nombre",
    idLink: "#noname",
    subElements: [
      { name: "Liquidaciones de compra", idLink: "#liquidaciones-de-compra" },
      {
        name: "Sistema web de guías de transportistas",
        idLink: "#sist-web-guias-transportistas",
      },
      {
        name: "Sistema web de guías de remision",
        idLink: "#sist-web-guias-remision",
      },
    ],
    icon: FaStickyNote,
  },
  {
    id: 4,
    name: "F.Electrónica",
    idLink: "#facturacion",
    subElements: [
      { name: "Sistema Standar", idLink: "#sistema-standar" },
      { name: "Sistema a Medida", idLink: "#sistema-medida" },
    ],
    icon: MdMiscellaneousServices,
  },
  {
    id: 5,
    name: "VPS",
    idLink: "/outsorcingContable",
    icon: FaBriefcase,
  },
  {
    id: 6,
    name: "Outsorcing Contable",
    idLink: "/outsorcingContable",
    icon: FaBriefcase,
  },
  {
    id: 7,
    name: "Desarrollo Web",
    idLink: "/desarrolloWeb",
    icon: RiComputerFill,
  },
  {
    id: 8,
    name: "Contacto",
    idLink: "#contacto",
    icon: MdContactMail,
  },
];
