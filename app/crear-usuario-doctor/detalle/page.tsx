"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Poppins, Roboto } from "next/font/google";
import "./page.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Link from "next/link";
import { BsHouse } from "react-icons/bs";
import { ImPaste } from "react-icons/im";
import { AiOutlineFileDone, AiOutlineMedicineBox } from "react-icons/ai";
import { IoCalendarOutline, IoCloseOutline } from "react-icons/io5";
import { SlRefresh } from "react-icons/sl";
import { BsArrowLeft } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";
import parse from "html-react-parser";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Modal from "react-bootstrap/Modal";
import { HiOutlineCalendarDays, HiOutlineClock } from "react-icons/hi2";

const svgUsuario = `<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.77138 8.1525C9.69102 8.145 9.59459 8.145 9.5062 8.1525C7.5937 8.0925 6.07495 6.63 6.07495 4.83C6.07495 2.9925 7.66602 1.5 9.64281 1.5C11.6116 1.5 13.2107 2.9925 13.2107 4.83C13.2026 6.63 11.6839 8.0925 9.77138 8.1525Z" stroke="#5ABC91" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.75365 10.92C3.80901 12.135 3.80901 14.115 5.75365 15.3225C7.96347 16.7025 11.5876 16.7025 13.7974 15.3225C15.742 14.1075 15.742 12.1275 13.7974 10.92C11.5956 9.5475 7.97151 9.5475 5.75365 10.92Z" stroke="#5ABC91" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const svgTelefono = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_120_11781)">
<path d="M16.5001 12.6901V14.9401C16.5009 15.1489 16.4581 15.3557 16.3745 15.5471C16.2908 15.7385 16.168 15.9103 16.0141 16.0515C15.8602 16.1927 15.6785 16.3002 15.4806 16.3671C15.2828 16.434 15.0731 16.4589 14.8651 16.4401C12.5572 16.1893 10.3403 15.4007 8.39257 14.1376C6.58044 12.9861 5.04407 11.4497 3.89257 9.63757C2.62506 7.68098 1.83625 5.45332 1.59007 3.13507C1.57133 2.92767 1.59598 2.71864 1.66245 2.52129C1.72892 2.32394 1.83575 2.14259 1.97615 1.98879C2.11654 1.83499 2.28743 1.7121 2.47792 1.62796C2.6684 1.54382 2.87433 1.50027 3.08257 1.50007H5.33257C5.69655 1.49649 6.04942 1.62538 6.32539 1.86272C6.60137 2.10006 6.78163 2.42966 6.83257 2.79007C6.92754 3.51012 7.10366 4.21712 7.35757 4.89757C7.45848 5.16602 7.48032 5.45776 7.4205 5.73823C7.36069 6.01871 7.22172 6.27616 7.02007 6.48007L6.06757 7.43257C7.13524 9.31023 8.68991 10.8649 10.5676 11.9326L11.5201 10.9801C11.724 10.7784 11.9814 10.6395 12.2619 10.5796C12.5424 10.5198 12.8341 10.5417 13.1026 10.6426C13.783 10.8965 14.49 11.0726 15.2101 11.1676C15.5744 11.219 15.9071 11.4025 16.145 11.6832C16.3828 11.9639 16.5092 12.3223 16.5001 12.6901Z" stroke="#5ABC91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_120_11781">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const svgDoc = `<svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1765 6.10465C15.1765 6.24343 15.1207 6.37652 15.0214 6.47465C14.9221 6.57278 14.7875 6.62791 14.6471 6.62791H11.1176C10.9772 6.62791 10.8426 6.57278 10.7433 6.47465C10.644 6.37652 10.5882 6.24343 10.5882 6.10465C10.5882 5.96587 10.644 5.83278 10.7433 5.73465C10.8426 5.63652 10.9772 5.5814 11.1176 5.5814H14.6471C14.7875 5.5814 14.9221 5.63652 15.0214 5.73465C15.1207 5.83278 15.1765 5.96587 15.1765 6.10465ZM14.6471 8.37209H11.1176C10.9772 8.37209 10.8426 8.42722 10.7433 8.52535C10.644 8.62348 10.5882 8.75657 10.5882 8.89535C10.5882 9.03412 10.644 9.16722 10.7433 9.26535C10.8426 9.36348 10.9772 9.4186 11.1176 9.4186H14.6471C14.7875 9.4186 14.9221 9.36348 15.0214 9.26535C15.1207 9.16722 15.1765 9.03412 15.1765 8.89535C15.1765 8.75657 15.1207 8.62348 15.0214 8.52535C14.9221 8.42722 14.7875 8.37209 14.6471 8.37209ZM9.07941 10.8576C9.106 10.9887 9.08076 11.125 9.00887 11.2383C8.93699 11.3516 8.82391 11.4335 8.69288 11.467C8.56184 11.5005 8.42281 11.4831 8.30434 11.4184C8.18587 11.3537 8.09696 11.2466 8.05588 11.1192C7.93031 10.6305 7.6435 10.1971 7.24081 9.88752C6.83811 9.57795 6.34251 9.40988 5.83235 9.40988C5.3222 9.40988 4.82659 9.57795 4.4239 9.88752C4.02121 10.1971 3.7344 10.6305 3.60882 11.1192C3.57952 11.2314 3.51337 11.3308 3.42075 11.4018C3.32813 11.4728 3.21428 11.5114 3.09706 11.5116L2.96471 11.4942C2.82909 11.4593 2.71301 11.3727 2.64189 11.2534C2.57077 11.134 2.55042 10.9917 2.58529 10.8576C2.69578 10.4321 2.89075 10.0326 3.15887 9.68222C3.42698 9.33189 3.76289 9.03773 4.14706 8.81686C3.72677 8.4739 3.42383 8.01106 3.27963 7.49157C3.13542 6.97208 3.15698 6.42125 3.34135 5.91432C3.52572 5.40739 3.86391 4.96906 4.30975 4.65921C4.75558 4.34935 5.28733 4.18307 5.83235 4.18307C6.37738 4.18307 6.90912 4.34935 7.35496 4.65921C7.80079 4.96906 8.13899 5.40739 8.32336 5.91432C8.50773 6.42125 8.52928 6.97208 8.38508 7.49157C8.24087 8.01106 7.93794 8.4739 7.51765 8.81686C7.90182 9.03773 8.23772 9.33189 8.50584 9.68222C8.77395 10.0326 8.96892 10.4321 9.07941 10.8576ZM5.83235 8.37209C6.14648 8.37209 6.45355 8.28003 6.71473 8.10754C6.97591 7.93505 7.17948 7.68989 7.29969 7.40305C7.4199 7.11621 7.45135 6.80058 7.39007 6.49608C7.32879 6.19157 7.17752 5.91187 6.9554 5.69233C6.73329 5.4728 6.45029 5.32329 6.1422 5.26272C5.83412 5.20215 5.51477 5.23324 5.22456 5.35205C4.93435 5.47086 4.6863 5.67206 4.51178 5.93021C4.33727 6.18836 4.24412 6.49185 4.24412 6.80233C4.24643 7.21795 4.41451 7.6159 4.71186 7.90979C5.00921 8.20368 5.41184 8.3698 5.83235 8.37209ZM18 1.22093V13.7791C18 14.1029 17.8699 14.4134 17.6382 14.6424C17.4065 14.8714 17.0923 15 16.7647 15H1.23529C0.907674 15 0.593472 14.8714 0.361809 14.6424C0.130147 14.4134 0 14.1029 0 13.7791V1.22093C0 0.897119 0.130147 0.586571 0.361809 0.357602C0.593472 0.128633 0.907674 0 1.23529 0H16.7647C17.0923 0 17.4065 0.128633 17.6382 0.357602C17.8699 0.586571 18 0.897119 18 1.22093ZM16.9412 1.22093C16.9412 1.17467 16.9226 1.13031 16.8895 1.0976C16.8564 1.06489 16.8115 1.04651 16.7647 1.04651H1.23529C1.18849 1.04651 1.14361 1.06489 1.11051 1.0976C1.07742 1.13031 1.05882 1.17467 1.05882 1.22093V13.7791C1.05882 13.8253 1.07742 13.8697 1.11051 13.9024C1.14361 13.9351 1.18849 13.9535 1.23529 13.9535H16.7647C16.8115 13.9535 16.8564 13.9351 16.8895 13.9024C16.9226 13.8697 16.9412 13.8253 16.9412 13.7791V1.22093Z" fill="#5ABC91"/>
</svg>
`;

const svgEdad = `<svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1765 6.10465C15.1765 6.24343 15.1207 6.37652 15.0214 6.47465C14.9221 6.57278 14.7875 6.62791 14.6471 6.62791H11.1176C10.9772 6.62791 10.8426 6.57278 10.7433 6.47465C10.644 6.37652 10.5882 6.24343 10.5882 6.10465C10.5882 5.96587 10.644 5.83278 10.7433 5.73465C10.8426 5.63652 10.9772 5.5814 11.1176 5.5814H14.6471C14.7875 5.5814 14.9221 5.63652 15.0214 5.73465C15.1207 5.83278 15.1765 5.96587 15.1765 6.10465ZM14.6471 8.37209H11.1176C10.9772 8.37209 10.8426 8.42722 10.7433 8.52535C10.644 8.62348 10.5882 8.75657 10.5882 8.89535C10.5882 9.03412 10.644 9.16722 10.7433 9.26535C10.8426 9.36348 10.9772 9.4186 11.1176 9.4186H14.6471C14.7875 9.4186 14.9221 9.36348 15.0214 9.26535C15.1207 9.16722 15.1765 9.03412 15.1765 8.89535C15.1765 8.75657 15.1207 8.62348 15.0214 8.52535C14.9221 8.42722 14.7875 8.37209 14.6471 8.37209ZM9.07941 10.8576C9.106 10.9887 9.08076 11.125 9.00887 11.2383C8.93699 11.3516 8.82391 11.4335 8.69288 11.467C8.56184 11.5005 8.42281 11.4831 8.30434 11.4184C8.18587 11.3537 8.09696 11.2466 8.05588 11.1192C7.93031 10.6305 7.6435 10.1971 7.24081 9.88752C6.83811 9.57795 6.34251 9.40988 5.83235 9.40988C5.3222 9.40988 4.82659 9.57795 4.4239 9.88752C4.02121 10.1971 3.7344 10.6305 3.60882 11.1192C3.57952 11.2314 3.51337 11.3308 3.42075 11.4018C3.32813 11.4728 3.21428 11.5114 3.09706 11.5116L2.96471 11.4942C2.82909 11.4593 2.71301 11.3727 2.64189 11.2534C2.57077 11.134 2.55042 10.9917 2.58529 10.8576C2.69578 10.4321 2.89075 10.0326 3.15887 9.68222C3.42698 9.33189 3.76289 9.03773 4.14706 8.81686C3.72677 8.4739 3.42383 8.01106 3.27963 7.49157C3.13542 6.97208 3.15698 6.42125 3.34135 5.91432C3.52572 5.40739 3.86391 4.96906 4.30975 4.65921C4.75558 4.34935 5.28733 4.18307 5.83235 4.18307C6.37738 4.18307 6.90912 4.34935 7.35496 4.65921C7.80079 4.96906 8.13899 5.40739 8.32336 5.91432C8.50773 6.42125 8.52928 6.97208 8.38508 7.49157C8.24087 8.01106 7.93794 8.4739 7.51765 8.81686C7.90182 9.03773 8.23772 9.33189 8.50584 9.68222C8.77395 10.0326 8.96892 10.4321 9.07941 10.8576ZM5.83235 8.37209C6.14648 8.37209 6.45355 8.28003 6.71473 8.10754C6.97591 7.93505 7.17948 7.68989 7.29969 7.40305C7.4199 7.11621 7.45135 6.80058 7.39007 6.49608C7.32879 6.19157 7.17752 5.91187 6.9554 5.69233C6.73329 5.4728 6.45029 5.32329 6.1422 5.26272C5.83412 5.20215 5.51477 5.23324 5.22456 5.35205C4.93435 5.47086 4.6863 5.67206 4.51178 5.93021C4.33727 6.18836 4.24412 6.49185 4.24412 6.80233C4.24643 7.21795 4.41451 7.6159 4.71186 7.90979C5.00921 8.20368 5.41184 8.3698 5.83235 8.37209ZM18 1.22093V13.7791C18 14.1029 17.8699 14.4134 17.6382 14.6424C17.4065 14.8714 17.0923 15 16.7647 15H1.23529C0.907674 15 0.593472 14.8714 0.361809 14.6424C0.130147 14.4134 0 14.1029 0 13.7791V1.22093C0 0.897119 0.130147 0.586571 0.361809 0.357602C0.593472 0.128633 0.907674 0 1.23529 0H16.7647C17.0923 0 17.4065 0.128633 17.6382 0.357602C17.8699 0.586571 18 0.897119 18 1.22093ZM16.9412 1.22093C16.9412 1.17467 16.9226 1.13031 16.8895 1.0976C16.8564 1.06489 16.8115 1.04651 16.7647 1.04651H1.23529C1.18849 1.04651 1.14361 1.06489 1.11051 1.0976C1.07742 1.13031 1.05882 1.17467 1.05882 1.22093V13.7791C1.05882 13.8253 1.07742 13.8697 1.11051 13.9024C1.14361 13.9351 1.18849 13.9535 1.23529 13.9535H16.7647C16.8115 13.9535 16.8564 13.9351 16.8895 13.9024C16.9226 13.8697 16.9412 13.8253 16.9412 13.7791V1.22093Z" fill="#5ABC91"/>
</svg>
`;

const Page = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<any>("");
  const [value, setValue] = useState<any>("");
  const [fullscreen, setFullscreen] = useState<boolean>(true);
  const [show, setShow] = useState<boolean>(false);
  const [showeliminar, setShoweliminar] = useState<boolean>(false);

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const modificarRegistro = () => {
    setShow(!show);
  };

  return (
    <div className={`app`}>
      <div className="head-usuario-detalle py-3">
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
                Detalle de Usuario
              </div>
              <div className="eliminar">
                <button
                  className="d-flex align-items-center"
                  onClick={() => setShoweliminar(!showeliminar)}
                >
                  <span className="pe-1">Eliminar</span>
                  <FiTrash></FiTrash>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-usuario pb-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="cardDetalleUsuario">
                <div className="d-flex align-items-center col1">
                  <div>
                    <img src={`/img/foto-usuario.png`} alt="" />
                  </div>
                  <div className="flex-fill  flex-column d-flex infoNombre">
                    <span>José Fabricio Retes Ruiz</span>
                    <span>42 años - Paciente Recurrente</span>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <div className="col2 d-flex align-content-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <HiOutlineCalendarDays></HiOutlineCalendarDays>
                    <span>Creado: 12/11/2020</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <HiOutlineClock></HiOutlineClock>
                    <span>11:00 - 12:00 AM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 calendario my-3">
              <button className="d-flex justify-content-center align-content-center w-100 align-items-center gap-xl-4 gap-lg-4 gap-md-4 gap-sm-3 gap-3 px-xl-5 px-lg-5 px-md-5 px-sm-3 px-2">
                <div className="col1">
                  <img src={`/img/noto_tear-off-calendar.png`} alt="" />
                </div>
                <div className="col2  text-white">Calendario de Citas</div>
                <div className="col3">
                  <img src={`/img/arrow-button.png`} alt="" />
                </div>
              </button>
            </div>
            <div className="col-12 ">
              <div className="boxCard">
                <div className="container-fluid px-0">
                  <div className="row">
                    <div className="col-12">
                      <div className="container px-0">
                        <div className="row px-0">
                          <div className="col-12 titulo">Datos de usuario</div>
                          <div className="col-12 sbtitulo py-3">
                            Tipo de usuario
                          </div>
                          <div className="col-12 titulo_seccion mb-3">
                            Paciente
                          </div>
                          <div className="col-12">
                            <div className="form-box mb-4">
                              <label
                                htmlFor=""
                                className="d-flex flex-row align-items-center px-2 mb-3"
                              >
                                {parse(svgUsuario)}{" "}
                                <span className="ms-1">Nombre de usuario</span>
                              </label>
                              <div className="input-grupo mb-3">
                                <input
                                  className=""
                                  type="text"
                                  name=""
                                  placeholder="Ingresa nombre(s) y apellidos"
                                  id=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-box mb-4">
                              <label
                                htmlFor=""
                                className="d-flex flex-row align-items-center px-2 mb-3"
                              >
                                {parse(svgDoc)}{" "}
                                <span className="ms-1">
                                  Documento de identidad
                                </span>
                              </label>
                              <div className="input-grupo mb-3">
                                <input
                                  className=""
                                  type="text"
                                  name=""
                                  placeholder="#####"
                                  id=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-box mb-4">
                              <label
                                htmlFor=""
                                className="d-flex flex-row align-items-center px-2 mb-3"
                              >
                                {parse(svgEdad)}{" "}
                                <span className="ms-1">Edad</span>
                              </label>
                              <div className="input-grupo mb-3">
                                <input
                                  className=""
                                  type="text"
                                  name=""
                                  placeholder="##"
                                  id=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-box mb-4">
                              <label
                                htmlFor=""
                                className="d-flex flex-row align-items-center px-2 mb-3"
                              >
                                {parse(svgTelefono)}
                                <span className="ms-1">
                                  Teléfono{" "}
                                  <span className="opcional">(Opcional)</span>
                                </span>
                              </label>
                              <div className="input-grupo mb-3 d-flex">
                                <PhoneInput
                                  style={{ gap: "8px" }}
                                  className="inputTelefono "
                                  international
                                  defaultCountry="PE"
                                  value={value}
                                  onChange={setValue}
                                />
                                <div className="separadorInput"></div>
                                <input
                                  id="inputTelefono2"
                                  type="text"
                                  className="text-left"
                                  placeholder="999 999 999"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <button
                              disabled={false}
                              onClick={() => modificarRegistro()}
                              className={`text-white fw-bold login2 rounded-5 border-0 d-block mx-auto `}
                            >
                              Modificar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        className="modalokRegistro"
        animation={false}
        backdrop={"static"}
        show={show}
        centered={true}
        onHide={() => setShow(false)}
      >
        <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 ">
                <img
                  src={`/img/okregistro.png`}
                  className="mx-auto d-block mb-4 ok"
                />
                <div className="txtinfo txt-center mx-auto mb-3 ok">
                  Se actualizaron los datos del usuario
                </div>
                <button onClick={() => setShow(false)}>De acuerdo</button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        className="modalokRegistro"
        animation={false}
        backdrop={"static"}
        show={showeliminar}
        centered={true}
        onHide={() => setShow(false)}
      >
        <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 ">
                <img
                  src={`/img/okeliminar.png`}
                  className="mx-auto d-block mb-3 eliminar"
                />
                <div className="txtinfo txt-center mx-auto mb-3 eliminar">
                  ¿Estás seguro de eliminar este usuario?
                </div>
                <div className="d-flex justify-content-between gap-3">
                  <button
                    className="no"
                    onClick={() => setShoweliminar(!showeliminar)}
                  >
                    No
                  </button>
                  <button>Sí</button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Page;
