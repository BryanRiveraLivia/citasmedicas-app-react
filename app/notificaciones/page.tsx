"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Poppins, Roboto } from "next/font/google";
import "./page.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Link from "next/link";
import { BsArrowLeft, BsHouse } from "react-icons/bs";
import { ImPaste } from "react-icons/im";
import { AiOutlineFileDone, AiOutlineMedicineBox } from "react-icons/ai";
import { IoCalendarOutline, IoCloseOutline } from "react-icons/io5";
import { SlRefresh } from "react-icons/sl";
import { HiOutlineCalendarDays, HiOutlineClock } from "react-icons/hi2";
import parse from "html-react-parser";
import "react-phone-number-input/style.css";
import { FiSearch, FiTrash } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Modal from "react-bootstrap/Modal";

const ico_plus = `<svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7009 31.968L20.7281 22.7474C20.7313 21.6584 19.843 20.7648 18.7541 20.7616L9.53345 20.7344" stroke="#61CF9F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.2991 10.032L20.2719 19.2526C20.2687 20.3416 21.157 21.2352 22.2459 21.2384L31.4666 21.2656" stroke="#61CF9F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const Page = () => {
  const router = useRouter();
  const [abretab1, setAbretab1] = useState<boolean>(false);
  const [abretab2, setAbretab2] = useState<boolean>(false);

  return (
    <div className={`app`}>
      <div className="head-usuario-detalle py-3 pb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-between">
              <div
                className="regresar cursor-pointer"
                onClick={() => router.push("mantenimiento")}
              >
                <BsArrowLeft></BsArrowLeft>
              </div>
              <div className="detalleUsuario flex-fill px-3">
                Tipos de Notificaciones
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-usuario pb-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div
                className={`itemReporteCard d-flex align-items-center justify-space-between ${
                  abretab1 ? "noBordeInferior" : "margenInferior"
                }`}
                onClick={() => setAbretab1(!abretab1)}
              >
                <div className="flex-fill">
                  <span className="d-block">Para doctores</span>
                </div>
                {abretab1 ? (
                  <div className="icocerrarTab">{parse(ico_plus)}</div>
                ) : (
                  <div>{parse(ico_plus)}</div>
                )}
              </div>
              {abretab1 && (
                <div className="cuerpoTab">
                  <ul>
                    <li>
                      <a>Cuando se le programa una cita</a>
                    </li>
                    <li>
                      <a>Cuando se ha cancelado una cita</a>
                    </li>
                    <li>
                      <a>15min. antes de la cita programada</a>
                    </li>
                    <li>
                      <a>15min. antes de la cita programada</a>
                    </li>
                  </ul>
                </div>
              )}
              <div
                className={`itemReporteCard d-flex align-items-center justify-space-between ${
                  abretab2 ? "noBordeInferior" : "margenInferior"
                }`}
                onClick={() => setAbretab2(!abretab2)}
              >
                <div className="flex-fill">
                  <span className="d-block">Para pacientes</span>
                </div>
                {abretab2 ? (
                  <div className="icocerrarTab">{parse(ico_plus)}</div>
                ) : (
                  <div>{parse(ico_plus)}</div>
                )}
              </div>
              {abretab2 && (
                <div className="cuerpoTab">
                  <ul>
                    <li>
                      <a>Cuando se le programa una cita</a>
                    </li>
                    <li>
                      <a>Cuando se ha cancelado una cita</a>
                    </li>
                    <li>
                      <a>15min. antes de la cita programada</a>
                    </li>
                    <li>
                      <a>15min. antes de la cita programada</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
