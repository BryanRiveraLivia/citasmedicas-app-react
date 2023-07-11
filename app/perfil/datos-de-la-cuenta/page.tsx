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
import PhoneInput from "react-phone-number-input";

const ico_subeFoto = `<svg width="59" height="58" viewBox="0 0 59 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="28" cy="28" r="28" fill="#BBE550" fill-opacity="0.3"/>
<circle cx="28" cy="28" r="23" fill="#BBE550" fill-opacity="0.7"/>
<g clip-path="url(#clip0_119_11152)">
<path d="M28.0008 21.6436C24.0095 21.6436 20.7628 24.8903 20.7628 28.8816C20.7628 32.873 24.0095 36.1197 28.0008 36.1197C31.9922 36.1197 35.2389 32.8724 35.2389 28.8816C35.2389 24.8908 31.9916 21.6436 28.0008 21.6436ZM28.0008 33.8035C25.2868 33.8035 23.0789 31.5956 23.0789 28.8816C23.0789 26.1676 25.2868 23.9597 28.0008 23.9597C30.7148 23.9597 32.9227 26.1676 32.9227 28.8816C32.9227 31.5956 30.7148 33.8035 28.0008 33.8035Z" fill="white"/>
<path d="M39.3501 18.1691H35.0895C34.9546 18.1691 34.833 18.0956 34.7705 17.9763L33.5921 15.4997C33.5886 15.4928 33.5857 15.4864 33.5823 15.4795C33.126 14.5669 32.2088 14 31.1885 14H24.896C23.8757 14 22.9585 14.5669 22.5022 15.4795C22.4987 15.4864 22.4953 15.4928 22.4924 15.4997L21.3134 17.9769C21.2509 18.0956 21.1293 18.1691 20.9944 18.1691H16.6515C14.736 18.1691 13.1772 19.7279 13.1772 21.6434V37.2777C13.1772 39.1931 14.736 40.7519 16.6515 40.7519H39.3501C41.2656 40.7519 42.8244 39.1931 42.8244 37.2777V21.6434C42.8244 19.7279 41.2656 18.1691 39.3501 18.1691ZM40.5082 37.2777C40.5082 37.9163 39.9888 38.4357 39.3501 38.4357H16.6515C16.0128 38.4357 15.4934 37.9163 15.4934 37.2777V21.6434C15.4934 21.0047 16.0128 20.4853 16.6515 20.4853H20.9944C22.0147 20.4853 22.9319 19.9184 23.3881 19.0059C23.3916 18.9989 23.3951 18.9925 23.398 18.9856L24.5769 16.5084C24.6395 16.3897 24.7611 16.3162 24.896 16.3162H31.1885C31.3234 16.3162 31.445 16.3897 31.5075 16.5084L32.6865 18.9856C32.6899 18.9925 32.6928 18.9989 32.6963 19.0059C33.1526 19.9184 34.0698 20.4853 35.0901 20.4853H39.3501C39.9888 20.4853 40.5082 21.0047 40.5082 21.6434V37.2777Z" fill="white"/>
<path d="M38.192 22.8018H35.8759V25.1179H38.192V22.8018Z" fill="white"/>
</g>
<circle cx="47" cy="46" r="11" fill="#BBE550" stroke="white" stroke-width="2"/>
<g clip-path="url(#clip1_119_11152)">
<path d="M42.625 49.3441V51.3754H44.6562L50.6471 45.3845L48.6158 43.3533L42.625 49.3441ZM52.2179 43.8137C52.4292 43.6025 52.4292 43.2612 52.2179 43.05L50.9504 41.7825C50.7392 41.5712 50.3979 41.5712 50.1867 41.7825L49.1954 42.7737L51.2267 44.805L52.2179 43.8137Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_119_11152">
<rect width="29.6472" height="26.7519" fill="white" transform="translate(13.1772 14)"/>
</clipPath>
<clipPath id="clip1_119_11152">
<rect width="13" height="13" fill="white" transform="translate(41 40)"/>
</clipPath>
</defs>
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

const svgUsuario2 = `<svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1765 6.10465C15.1765 6.24343 15.1207 6.37652 15.0214 6.47465C14.9221 6.57278 14.7875 6.62791 14.6471 6.62791H11.1176C10.9772 6.62791 10.8426 6.57278 10.7433 6.47465C10.644 6.37652 10.5882 6.24343 10.5882 6.10465C10.5882 5.96587 10.644 5.83278 10.7433 5.73465C10.8426 5.63652 10.9772 5.5814 11.1176 5.5814H14.6471C14.7875 5.5814 14.9221 5.63652 15.0214 5.73465C15.1207 5.83278 15.1765 5.96587 15.1765 6.10465ZM14.6471 8.37209H11.1176C10.9772 8.37209 10.8426 8.42722 10.7433 8.52535C10.644 8.62348 10.5882 8.75657 10.5882 8.89535C10.5882 9.03412 10.644 9.16722 10.7433 9.26535C10.8426 9.36348 10.9772 9.4186 11.1176 9.4186H14.6471C14.7875 9.4186 14.9221 9.36348 15.0214 9.26535C15.1207 9.16722 15.1765 9.03412 15.1765 8.89535C15.1765 8.75657 15.1207 8.62348 15.0214 8.52535C14.9221 8.42722 14.7875 8.37209 14.6471 8.37209ZM9.07941 10.8576C9.106 10.9887 9.08076 11.125 9.00887 11.2383C8.93699 11.3516 8.82391 11.4335 8.69288 11.467C8.56184 11.5005 8.42281 11.4831 8.30434 11.4184C8.18587 11.3537 8.09696 11.2466 8.05588 11.1192C7.93031 10.6305 7.6435 10.1971 7.24081 9.88752C6.83811 9.57795 6.34251 9.40988 5.83235 9.40988C5.3222 9.40988 4.82659 9.57795 4.4239 9.88752C4.02121 10.1971 3.7344 10.6305 3.60882 11.1192C3.57952 11.2314 3.51337 11.3308 3.42075 11.4018C3.32813 11.4728 3.21428 11.5114 3.09706 11.5116L2.96471 11.4942C2.82909 11.4593 2.71301 11.3727 2.64189 11.2534C2.57077 11.134 2.55042 10.9917 2.58529 10.8576C2.69578 10.4321 2.89075 10.0326 3.15887 9.68222C3.42698 9.33189 3.76289 9.03773 4.14706 8.81686C3.72677 8.4739 3.42383 8.01106 3.27963 7.49157C3.13542 6.97208 3.15698 6.42125 3.34135 5.91432C3.52572 5.40739 3.86391 4.96906 4.30975 4.65921C4.75558 4.34935 5.28733 4.18307 5.83235 4.18307C6.37738 4.18307 6.90912 4.34935 7.35496 4.65921C7.80079 4.96906 8.13899 5.40739 8.32336 5.91432C8.50773 6.42125 8.52928 6.97208 8.38508 7.49157C8.24087 8.01106 7.93794 8.4739 7.51765 8.81686C7.90182 9.03773 8.23772 9.33189 8.50584 9.68222C8.77395 10.0326 8.96892 10.4321 9.07941 10.8576ZM5.83235 8.37209C6.14648 8.37209 6.45355 8.28003 6.71473 8.10754C6.97591 7.93505 7.17948 7.68989 7.29969 7.40305C7.4199 7.11621 7.45135 6.80058 7.39007 6.49608C7.32879 6.19157 7.17752 5.91187 6.9554 5.69233C6.73329 5.4728 6.45029 5.32329 6.1422 5.26272C5.83412 5.20215 5.51477 5.23324 5.22456 5.35205C4.93435 5.47086 4.6863 5.67206 4.51178 5.93021C4.33727 6.18836 4.24412 6.49185 4.24412 6.80233C4.24643 7.21795 4.41451 7.6159 4.71186 7.90979C5.00921 8.20368 5.41184 8.3698 5.83235 8.37209ZM18 1.22093V13.7791C18 14.1029 17.8699 14.4134 17.6382 14.6424C17.4065 14.8714 17.0923 15 16.7647 15H1.23529C0.907674 15 0.593472 14.8714 0.361809 14.6424C0.130147 14.4134 0 14.1029 0 13.7791V1.22093C0 0.897119 0.130147 0.586571 0.361809 0.357602C0.593472 0.128633 0.907674 0 1.23529 0H16.7647C17.0923 0 17.4065 0.128633 17.6382 0.357602C17.8699 0.586571 18 0.897119 18 1.22093ZM16.9412 1.22093C16.9412 1.17467 16.9226 1.13031 16.8895 1.0976C16.8564 1.06489 16.8115 1.04651 16.7647 1.04651H1.23529C1.18849 1.04651 1.14361 1.06489 1.11051 1.0976C1.07742 1.13031 1.05882 1.17467 1.05882 1.22093V13.7791C1.05882 13.8253 1.07742 13.8697 1.11051 13.9024C1.14361 13.9351 1.18849 13.9535 1.23529 13.9535H16.7647C16.8115 13.9535 16.8564 13.9351 16.8895 13.9024C16.9226 13.8697 16.9412 13.8253 16.9412 13.7791V1.22093Z" fill="#5ABC91"/>
</svg>
`;

const svgPassword = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.25 8.25H3.75C2.92157 8.25 2.25 8.92157 2.25 9.75V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V9.75C15.75 8.92157 15.0784 8.25 14.25 8.25Z" stroke="#5ABC91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.25 8.25V5.25C5.25 4.25544 5.64509 3.30161 6.34835 2.59835C7.05161 1.89509 8.00544 1.5 9 1.5C9.99456 1.5 10.9484 1.89509 11.6517 2.59835C12.3549 3.30161 12.75 4.25544 12.75 5.25V8.25" stroke="#5ABC91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const svgCorreo = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C2.58921 3.75 2.25 4.08921 2.25 4.5V13.5C2.25 13.9108 2.58921 14.25 3 14.25H15C15.4108 14.25 15.75 13.9108 15.75 13.5V4.5C15.75 4.08921 15.4108 3.75 15 3.75H3ZM0.75 4.5C0.75 3.26079 1.76079 2.25 3 2.25H15C16.2392 2.25 17.25 3.26079 17.25 4.5V13.5C17.25 14.7392 16.2392 15.75 15 15.75H3C1.76079 15.75 0.75 14.7392 0.75 13.5V4.5Z" fill="#5ABC91"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.885579 4.06997C1.12312 3.73063 1.59076 3.6481 1.9301 3.88564L9 8.83457L16.0699 3.88564C16.4092 3.6481 16.8769 3.73063 17.1144 4.06997C17.352 4.4093 17.2694 4.87695 16.9301 5.11449L9.4301 10.3645C9.17186 10.5453 8.82815 10.5453 8.56991 10.3645L1.06991 5.11449C0.73057 4.87695 0.648044 4.4093 0.885579 4.06997Z" fill="#5ABC91"/>
</svg>
`;

const Page = () => {
  const router = useRouter();
  const [value, setValue] = useState<any>("");
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [showeliminar, setShoweliminar] = useState<boolean>(false);

  return (
    <div className={`app`}>
      <div className="head-usuario-detalle py-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-between pb-2">
              <div
                className="regresar cursor-pointer"
                onClick={() => router.push("mantenimiento")}
              >
                <BsArrowLeft></BsArrowLeft>
              </div>
              <div className="detalleUsuario flex-fill px-3">
                Datos de la cuenta
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-usuario pb-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mb-4">
              <div className="cardSubeFoto d-flex align-items-center p-3">
                <div>{parse(ico_subeFoto)}</div>
                <div className="flex-fill  ps-3 align-items-center flex-column justify-content-start">
                  <span className="txtinfo1 d-block text-left">
                    Sube una foto actual, para facilitar a los doctores
                    reconocerte cuando agendes una cita.
                  </span>
                  <span className="txtinfo2 d-block text-left">
                    *Sube una foto reciente
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 mt-2">
              <span className="tituloPerfilesZonas d-block mb-4">
                Datos de registro
              </span>
            </div>
            <div className="col-12">
              <div className="form-box mb-4 modificar">
                <label
                  htmlFor=""
                  className="d-flex flex-row align-items-center px-2 mb-3"
                >
                  {parse(svgCorreo)} <span className="ms-1">Correo</span>
                </label>
                <div className="input-grupo mb-3">
                  <input
                    className=""
                    type="text"
                    name=""
                    placeholder=""
                    id=""
                  />
                  <span className="Modificar cursor-pointer">Modificar</span>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="form-box mb-4 modificar">
                <label
                  htmlFor=""
                  className="d-flex flex-row align-items-center px-2 mb-3"
                >
                  {parse(svgPassword)} <span className="ms-1">Contraseña</span>
                </label>
                <div className="input-grupo mb-3">
                  <input
                    className=""
                    type="password"
                    name=""
                    placeholder=""
                    id=""
                  />
                  <span className="Modificar cursor-pointer">Modificar</span>
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
                    Teléfono <span className="opcional">(Opcional)</span>
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
          </div>
        </div>
      </div>
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
