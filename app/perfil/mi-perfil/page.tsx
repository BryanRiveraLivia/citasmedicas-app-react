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

const ico_administrarPacientes = `<svg
width="55"
height="34"
viewBox="0 0 55 34"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M27.2266 15.3988C27.085 15.3847 26.915 15.3847 26.7591 15.3988C23.3875 15.2855 20.71 12.523 20.71 9.12301C20.71 5.65217 23.515 2.83301 27 2.83301C30.4708 2.83301 33.29 5.65217 33.29 9.12301C33.2758 12.523 30.5983 15.2855 27.2266 15.3988Z"
  stroke="#677285"
  stroke-width="1.5"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M20.1434 20.627C16.7151 22.922 16.7151 26.662 20.1434 28.9428C24.0392 31.5495 30.4284 31.5495 34.3242 28.9428C37.7526 26.6478 37.7526 22.9078 34.3242 20.627C30.4426 18.0345 24.0534 18.0345 20.1434 20.627Z"
  stroke="#677285"
  stroke-width="1.5"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M10.1334 11.0587C10.05 11.0503 9.95005 11.0503 9.85838 11.0587C7.87505 10.992 6.30005 9.36699 6.30005 7.36699C6.30005 5.32533 7.95005 3.66699 10 3.66699C12.0417 3.66699 13.7 5.32533 13.7 7.36699C13.6917 9.36699 12.1167 10.992 10.1334 11.0587Z"
  stroke="#677285"
  stroke-width="1.5"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M5.96672 14.133C3.95006 15.483 3.95006 17.683 5.96672 19.0247C8.25839 20.558 12.0167 20.558 14.3084 19.0247C16.3251 17.6747 16.3251 15.4747 14.3084 14.133C12.0251 12.608 8.26672 12.608 5.96672 14.133Z"
  stroke="#677285"
  stroke-width="1.5"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M45.1334 11.0587C45.05 11.0503 44.95 11.0503 44.8584 11.0587C42.875 10.992 41.3 9.36699 41.3 7.36699C41.3 5.32533 42.95 3.66699 45 3.66699C47.0417 3.66699 48.7 5.32533 48.7 7.36699C48.6917 9.36699 47.1167 10.992 45.1334 11.0587Z"
  stroke="#677285"
  stroke-width="1.5"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M40.9667 14.133C38.9501 15.483 38.9501 17.683 40.9667 19.0247C43.2584 20.558 47.0167 20.558 49.3084 19.0247C51.3251 17.6747 51.3251 15.4747 49.3084 14.133C47.0251 12.608 43.2667 12.608 40.9667 14.133Z"
  stroke="#677285"
  stroke-width="1.5"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
</svg>`;

const ico_actualizarcuenta = `<svg
width="34"
height="34"
viewBox="0 0 34 34"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M17.2266 15.3988C17.085 15.3847 16.915 15.3847 16.7591 15.3988C13.3875 15.2855 10.71 12.523 10.71 9.12301C10.71 5.65217 13.515 2.83301 17 2.83301C20.4708 2.83301 23.29 5.65217 23.29 9.12301C23.2758 12.523 20.5983 15.2855 17.2266 15.3988Z"
  stroke="#677285"
  stroke-width="1.5"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M10.1434 20.627C6.71506 22.922 6.71506 26.662 10.1434 28.9428C14.0392 31.5495 20.4284 31.5495 24.3242 28.9428C27.7526 26.6478 27.7526 22.9078 24.3242 20.627C20.4426 18.0345 14.0534 18.0345 10.1434 20.627Z"
  stroke="#677285"
  stroke-width="1.5"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
</svg>`;

const ico_administrarDoctores = `<svg
width="32"
height="32"
viewBox="0 0 32 32"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  fill-rule="evenodd"
  clip-rule="evenodd"
  d="M9.78754 3.98717L9.83402 3.78434C9.92276 3.40742 10.0681 2.85303 10.3681 2.30709C10.6741 1.751 11.1482 1.18731 11.8919 0.816308C12.633 0.446994 13.5618 0.30924 14.7103 0.46136C15.978 0.630383 18.5243 1.04956 20.774 2.19384C23.0364 3.34488 25.1559 5.32498 25.1559 8.62261C25.1559 10.3264 24.4967 12.1543 23.8578 13.3459C23.551 13.9189 23.1868 14.4666 22.8217 14.7615C22.738 14.8291 22.6189 14.9136 22.471 14.9728C22.0653 16.306 21.2578 17.4814 20.1587 18.3382C19.0597 19.1951 17.7229 19.6916 16.331 19.7598C14.9391 19.8281 13.5601 19.4648 12.3825 18.7195C11.2049 17.9743 10.2862 16.8836 9.75205 15.5965L9.73177 15.5999L9.43175 15.2356L10.0842 14.6981L9.43175 15.2356L9.43091 15.2339L9.42922 15.2322L9.42499 15.2263L9.41062 15.2094C9.3383 15.1194 9.26869 15.0272 9.20188 14.9331C9.01939 14.68 8.84741 14.4194 8.68636 14.1522C8.28916 13.4947 7.80998 12.5583 7.5032 11.4656C7.19727 10.3728 7.05699 9.09165 7.37813 7.76989C7.69082 6.48363 8.4286 5.21765 9.76472 4.08689L9.78754 3.98717ZM11.2073 14.6677C11.5739 15.7218 12.2777 16.6256 13.2099 17.2391C14.1421 17.8527 15.2505 18.1417 16.3636 18.0615C17.4767 17.9814 18.5323 17.5364 19.3669 16.7956C20.2015 16.0548 20.7685 15.0594 20.9802 13.9637L21.0757 13.9958C21.0723 13.948 21.0707 13.9001 21.0706 13.8522C21.0706 12.4535 20.8763 11.4774 20.6954 10.8689C20.6601 10.7505 20.6209 10.6332 20.5779 10.5174L20.5433 10.519H20.5095C19.8775 10.5327 19.2458 10.4846 18.6232 10.3754C17.1721 10.1303 15.2072 9.51843 12.8933 8.10118C12.8426 8.21442 12.7919 8.34203 12.7412 8.48401C12.5756 8.95305 12.4395 9.50998 12.322 10.0982C12.2181 10.6162 12.1327 11.1377 12.0516 11.6261L12.0203 11.8188C11.9333 12.3428 11.8462 12.8575 11.7448 13.2302C11.5673 13.8775 11.3865 14.3373 11.2073 14.6669V14.6677ZM10.0242 13.0933C9.64246 12.438 9.34273 11.7384 9.13174 11.0101C8.87905 10.1092 8.78608 9.1339 9.02103 8.16963C9.24921 7.23156 9.80106 6.24531 10.9361 5.31062C11.1406 5.17202 11.2335 4.98609 11.2589 4.93623V4.93539C11.3033 4.84401 11.3389 4.74866 11.3654 4.65058C11.3924 4.55424 11.422 4.4224 11.4499 4.30409L11.4795 4.1714C11.5597 3.83082 11.6637 3.45982 11.8496 3.12093C12.0305 2.79303 12.2781 2.51245 12.6466 2.32906C13.0167 2.14398 13.5897 2.01721 14.4872 2.13722C15.7152 2.30033 18.0249 2.69161 20.0075 3.70068C21.9766 4.70214 23.4657 6.21827 23.4657 8.62261C23.4657 9.72971 23.0938 10.9889 22.6459 11.9819C22.5614 11.3346 22.4397 10.8055 22.3146 10.3864C22.2275 10.0868 22.1187 9.79388 21.9893 9.50998C21.9405 9.40477 21.8869 9.30184 21.8287 9.20151L21.8143 9.1787L21.8093 9.17024L21.8067 9.16602L21.805 9.16348L21.0951 9.61984L21.805 9.16348L21.4923 8.67839L20.9329 8.79079L20.9211 8.79332L20.8391 8.80431C20.7133 8.81832 20.587 8.82678 20.4605 8.82966C19.9394 8.83973 19.4186 8.79898 18.9055 8.70797C17.5423 8.4781 15.5394 7.85187 13.1063 6.23179L12.5147 5.83712L12.0254 6.35264C11.6223 6.77689 11.3485 7.35579 11.1482 7.91948C10.9437 8.49838 10.789 9.14489 10.6648 9.7652C10.5618 10.2931 10.4682 10.8228 10.3842 11.354L10.3521 11.5433C10.2617 12.0935 10.1881 12.5135 10.1138 12.7856C10.086 12.8888 10.0561 12.9913 10.0242 13.0933ZM21.7552 13.4499L21.7586 13.4482L21.7552 13.4499ZM21.7586 13.4482L21.7552 13.4499L21.7577 13.4482H21.7586Z"
  fill="#677285"
/>
<path
  fill-rule="evenodd"
  clip-rule="evenodd"
  d="M10.8566 20.4919C10.6775 20.1352 10.4569 19.6949 10.0842 19.7803C5.51721 20.8198 0.787964 23.8208 0.787964 27.0119V31.6009H31.212V27.0119C31.212 24.4985 28.2778 22.1026 24.8001 20.6905L24.7959 20.682C24.7921 20.6744 24.7881 20.6668 24.7841 20.6592L24.7562 20.6727C23.8325 20.3009 22.8708 19.9966 21.9158 19.7803C21.4907 19.6831 21.0512 20.2679 20.8594 20.6338H10.9293C10.9057 20.5899 10.882 20.5409 10.8566 20.4919ZM22.2564 21.6074C22.6257 21.7097 22.9933 21.8246 23.3558 21.9514C23.366 22.2404 23.344 22.5818 23.2967 22.93C23.2485 23.2905 23.1716 23.6466 23.0668 23.9949H21.9158C21.7589 23.9949 21.6051 24.0387 21.4716 24.1212C21.3382 24.2038 21.2304 24.3218 21.1602 24.4622L20.3151 26.1524C20.2564 26.2697 20.2257 26.399 20.2255 26.5302V28.2204C20.2255 28.4446 20.3146 28.6595 20.4731 28.818C20.6316 28.9765 20.8465 29.0655 21.0707 29.0655H22.7609V27.3753H21.9158V26.7296L22.4381 25.6851H24.7739L25.2962 26.7296V27.3753H24.4511V29.0655H26.1413C26.3655 29.0655 26.5804 28.9765 26.7389 28.818C26.8974 28.6595 26.9865 28.4446 26.9865 28.2204V26.5302C26.9863 26.399 26.9556 26.2697 26.8969 26.1524L26.0518 24.4622C25.9816 24.3218 25.8738 24.2038 25.7404 24.1212C25.6069 24.0387 25.4531 23.9949 25.2962 23.9949H24.8179C24.9223 23.5476 24.9924 23.093 25.0275 22.6351C25.8515 23.0247 26.6171 23.4717 27.2805 23.9551C28.9049 25.14 29.5218 26.2488 29.5218 27.0119V29.9106H2.47819V27.0119C2.47819 26.2488 3.09512 25.14 4.71943 23.9551C5.53581 23.3593 6.51022 22.8201 7.55478 22.3739C7.58379 23.0474 7.69186 23.7151 7.87677 24.3633L7.88353 24.387C7.37829 24.7066 7.00226 25.1945 6.82184 25.7645C6.64143 26.3345 6.66825 26.9499 6.89755 27.502C7.12686 28.0541 7.54391 28.5075 8.07504 28.7819C8.60616 29.0564 9.2172 29.1343 9.80022 29.002C10.3832 28.8697 10.9007 28.5355 11.2613 28.0587C11.6219 27.5818 11.8023 26.9928 11.7708 26.3958C11.7393 25.7988 11.4977 25.2321 11.0889 24.7959C10.6801 24.3597 10.1303 24.0819 9.53657 24.0118C9.42858 23.6582 9.34944 23.2964 9.29994 22.93C9.25288 22.6023 9.23338 22.2713 9.24162 21.9404C9.24407 21.8772 9.2483 21.814 9.2543 21.7511C9.35571 21.7198 9.45713 21.6894 9.55854 21.6607L9.90926 22.3249H21.8794L22.2564 21.6083V21.6074ZM9.23909 27.3888C9.69376 27.3888 10.0842 27.017 10.0842 26.531C10.0842 26.0459 9.69376 25.6732 9.23909 25.6732C8.78442 25.6732 8.39398 26.0451 8.39398 26.531C8.39398 27.0161 8.78442 27.3888 9.23909 27.3888Z"
  fill="#677285"
/>
</svg>`;

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
            <div className="col-12 d-flex align-items-center justify-content-between">
              <div
                className="regresar cursor-pointer"
                onClick={() => router.push("mantenimiento")}
              >
                <BsArrowLeft></BsArrowLeft>
              </div>
              <div className="detalleUsuario flex-fill px-3">Mi Perfil</div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-usuario pb-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex flex-row align-items-center mb-3">
              <div className="imgPerfil d-flex align-items-center text-center justify-content-center">
                <img
                  src="/img/profile.png"
                  alt=""
                  className="d-block text-center"
                />
              </div>
              <div className="d-flex flex-fill ps-3 align-items-center flex-column justify-content-start">
                <span className="txtHola w-100">Hola,</span>
                <span className="txtNombrePerfil w-100">
                  Juan Carlos Gutierrez Mendiola
                </span>
              </div>
            </div>
            <div className="col-12">
              <Link
                href={"/"}
                className="btnGestionaPerfil d-flex align-items-center px-4"
              >
                <div>
                  <img
                    src="/img/icoGestionaBtn.png"
                    alt=""
                    className="icoGestionaBtn"
                  />
                </div>
                <div className="flex-fill pe-3 align-items-center txtBtngestiona ps-3">
                  <span className="d-block">Gestionar usuarios</span>
                  <span>Crea, elimina o modifica ...</span>
                </div>
                <div>
                  <img src="/img/arrow-right.png" alt="" />
                </div>
              </Link>
            </div>
            <div className="col-12 my-4 d-flex align-items-center flex-row flex-flex-nowrap overflow-auto gap-2 justify-content-between">
              <Link
                href={"/"}
                className="d-flex align-items-center flex-column btnAdmistrativos"
              >
                <div className="ico d-block">{parse(ico_actualizarcuenta)}</div>
                <div className="txtbtn d-block">Actualizar Cuenta</div>
              </Link>
              <Link
                href={"/"}
                className="d-flex align-items-center flex-column btnAdmistrativos"
              >
                <div className="ico d-block">
                  {parse(ico_administrarPacientes)}
                </div>
                <div className="txtbtn d-block">Actualizar Cuenta</div>
              </Link>
              <Link
                href={"/"}
                className="d-flex align-items-center flex-column btnAdmistrativos"
              >
                <div className="ico d-block">
                  {parse(ico_administrarDoctores)}
                </div>
                <div className="txtbtn d-block">Administrar Doctores</div>
              </Link>
            </div>
            <div className="col-12">
              <span className="tituloPerfilesZonas d-block mb-3">Otros</span>
            </div>
            <div className="col-12">
              <div
                className="itemReporteCard d-flex align-items-center justify-space-between"
                onClick={() => router.push("/reportes/generar")}
              >
                <div className="flex-fill">
                  <span className="d-block">Tipos de notificaciones</span>
                </div>
                <div>
                  <img src="/img/flecha-derecha.png" alt="" />
                </div>
              </div>
              <div
                className="itemReporteCard d-flex align-items-center justify-space-between"
                onClick={() => router.push("/reportes/generar")}
              >
                <div className="flex-fill">
                  <span className="d-block">Histórico de reportes</span>
                </div>
                <div>
                  <img src="/img/flecha-derecha.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-12">
              <span className="tituloPerfilesZonas d-block  mt-2 mb-3">
                Soporte
              </span>
            </div>
            <div className="col-12">
              <div
                className="itemReporteCard d-flex align-items-center justify-space-between"
                onClick={() => router.push("/reportes/generar")}
              >
                <div className="flex-fill">
                  <span className="d-block">Canales de ayuda</span>
                </div>
                <div>
                  <img src="/img/flecha-derecha.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-12">
              <span className="tituloPerfilesZonas d-flex  mt-4 mb-3 align-items-center">
                <div>Cerrar Sesión</div>
                <div>
                  <img src="/img/log_out.png" className="ms-3" alt="" />
                </div>
              </span>
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
