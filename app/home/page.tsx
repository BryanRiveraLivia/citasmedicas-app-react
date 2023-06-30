import React from "react";
import { Poppins, Roboto } from "next/font/google";
import "./page.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Link from "next/link";
import { BsHouse } from "react-icons/bs";
import { ImPaste } from "react-icons/im";
import { AiOutlineFileDone } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { SlRefresh } from "react-icons/sl";
import { HiOutlineCalendarDays, HiOutlineClock } from "react-icons/hi2";

const poppins = Poppins({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

const page = () => {
  return (
    <div className={`app`}>
      <div className="head-usuario p-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex align-items-center">
              <div>
                <img src={`img/img-perfil.png`} alt="" />
              </div>
              <div className="flex-fill px-2">
                <span className="info-nombre  text-white fw-bold">
                  Hola Juan Gutierrez,
                </span>
                <span className="info-bienvenido d-block text-white">
                  Bienvenido a <p className="d-inline">Financoop</p>
                </span>
              </div>
              <div>
                <BiDotsVerticalRounded
                  className="text-white"
                  style={{ fontSize: "25px" }}
                ></BiDotsVerticalRounded>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-usuario py-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <p className="titulos_generales mb-4"> Bandeja de citas</p>
            </div>
            <div className="col-12">
              <ul className="tipo-de-citas d-flex flex-nowrap overflow-auto justify-content-start">
                <li className={`activo ${poppins.className}`}>
                  <Link href="/">Pendientes</Link>
                </li>
                <li className={`${poppins.className}`}>
                  <Link href="/">Aprobadas</Link>
                </li>
                <li className={`${poppins.className}`}>
                  <Link href="/">Canceladas</Link>
                </li>
              </ul>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-end my-4">
              <span className="me-2 btn-refresh">Actualizar</span>
              <SlRefresh></SlRefresh>
            </div>
            <div className="col-12">
              <div className="moduloCita">
                <div className={`fecha mb-3 ${roboto.className}`}>
                  16 de Octubre
                </div>
                {Array.from(new Array(3)).map((k) => (
                  <>
                    <div className="eleccionMedico mb-3" key={k}>
                      <div className="info-nombre d-flex align-items-center">
                        <div className="me-2">
                          <img src={`img/foto-medico.png`} alt="" />
                        </div>
                        <div className="flex-fill">
                          <span className="nombre d-block">
                            Juan Fabricio Retes Ruiz
                          </span>
                          <span className={`oficio ${poppins.className}`}>
                            42 años - Paciente Recurrente
                          </span>
                          <div className={`especialidad ${poppins.className}`}>
                            Oftalmologia
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="info-horario d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex align-items-center">
                          <HiOutlineCalendarDays></HiOutlineCalendarDays>
                          <span className={`${poppins.className}`}>
                            16 de Octubre
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <HiOutlineClock></HiOutlineClock>
                          <span className={`${poppins.className}`}>
                            11:00 - 12:00 AM
                          </span>
                        </div>
                      </div>
                      <div className="info-botones d-flex align-items-center justify-content-between">
                        <button className={`w-50 ${poppins.className}`}>
                          Cancelar
                        </button>
                        <button className={`w-50 ${poppins.className}`}>
                          Aprobar
                        </button>
                      </div>
                    </div>
                  </>
                ))}
                <div className={`fecha mb-3 ${roboto.className}`}>
                  09 de Octubre del 2022
                </div>
                <div className="msjNoHayInfo">No hay información</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="taskbar">
        <div className="botones py-0  mx-2 ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 d-flex  justify-content-between align-items-center taskbar-altura">
                <Link href="#" className="activo">
                  <div className="icono icono1">
                    <BsHouse></BsHouse>
                  </div>
                  <div className="txtlabel">Home</div>
                </Link>
                <Link href="#">
                  <div className="icono icono1">
                    <ImPaste></ImPaste>
                  </div>
                  <div className="txtlabel">Mantenedores</div>
                </Link>
                <Link href="#">
                  <div className="icono icono1">
                    <AiOutlineFileDone></AiOutlineFileDone>
                  </div>
                  <div className="txtlabel">Reportes</div>
                </Link>
                <Link href="#">
                  <div className="icono icono1">
                    <IoCalendarOutline></IoCalendarOutline>
                  </div>
                  <div className="txtlabel">Horarios</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
