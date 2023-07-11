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

const ico_campana = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26 16.586V14H24V17C24.0001 17.2652 24.1054 17.5195 24.293 17.707L27 20.414V22H5V20.414L7.707 17.707C7.89455 17.5195 7.99994 17.2652 8 17V13C7.99721 11.5948 8.3653 10.2137 9.06709 8.99632C9.76887 7.7789 10.7795 6.76823 11.9969 6.06641C13.2143 5.36458 14.5953 4.99644 16.0005 4.99918C17.4058 5.00192 18.7853 5.37543 20 6.082V3.847C19.0481 3.42552 18.0356 3.15688 17 3.051V1H15V3.05C12.5346 3.30093 10.2498 4.45712 8.58737 6.29498C6.92498 8.13285 6.0031 10.5218 6 13V16.586L3.293 19.293C3.10545 19.4805 3.00006 19.7348 3 20V23C3 23.2652 3.10536 23.5196 3.29289 23.7071C3.48043 23.8946 3.73478 24 4 24H11V25C11 26.3261 11.5268 27.5979 12.4645 28.5355C13.4021 29.4732 14.6739 30 16 30C17.3261 30 18.5979 29.4732 19.5355 28.5355C20.4732 27.5979 21 26.3261 21 25V24H28C28.2652 24 28.5196 23.8946 28.7071 23.7071C28.8946 23.5196 29 23.2652 29 23V20C28.9999 19.7348 28.8946 19.4805 28.707 19.293L26 16.586ZM19 25C19 25.7956 18.6839 26.5587 18.1213 27.1213C17.5587 27.6839 16.7956 28 16 28C15.2044 28 14.4413 27.6839 13.8787 27.1213C13.3161 26.5587 13 25.7956 13 25V24H19V25Z" fill="#677285"/>
<path d="M26 12C28.2091 12 30 10.2091 30 8C30 5.79086 28.2091 4 26 4C23.7909 4 22 5.79086 22 8C22 10.2091 23.7909 12 26 12Z" fill="#BBE550"/>
</svg>`;

const ico_campanaModal = `<svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M57.1875 43.3607V39.5625H54.25V43.9688C54.2501 44.3583 54.4049 44.7318 54.6803 45.0072L58.6562 48.9831V51.3125H26.3438V48.9831L30.3197 45.0072C30.5951 44.7318 30.7499 44.3583 30.75 43.9688V38.0938C30.7459 36.0299 31.2865 34.0014 32.3173 32.2133C33.348 30.4253 34.8324 28.9408 36.6204 27.91C38.4085 26.8792 40.4369 26.3385 42.5008 26.3425C44.5647 26.3466 46.591 26.8952 48.375 27.9329V24.6503C46.9769 24.0312 45.4899 23.6367 43.9688 23.4812V20.4688H41.0312V23.4797C37.4102 23.8482 34.0543 25.5464 31.6127 28.2458C29.1711 30.9451 27.8171 34.4539 27.8125 38.0938V43.3607L23.8366 47.3366C23.5611 47.612 23.4063 47.9855 23.4062 48.375V52.7812C23.4062 53.1708 23.561 53.5444 23.8364 53.8198C24.1119 54.0953 24.4855 54.25 24.875 54.25H35.1562V55.7188C35.1562 57.6664 35.93 59.5343 37.3072 60.9116C38.6844 62.2888 40.5523 63.0625 42.5 63.0625C44.4477 63.0625 46.3156 62.2888 47.6928 60.9116C49.07 59.5343 49.8438 57.6664 49.8438 55.7188V54.25H60.125C60.5145 54.25 60.8881 54.0953 61.1636 53.8198C61.439 53.5444 61.5938 53.1708 61.5938 52.7812V48.375C61.5937 47.9855 61.4389 47.612 61.1634 47.3366L57.1875 43.3607ZM46.9062 55.7188C46.9062 56.8874 46.442 58.0081 45.6157 58.8344C44.7894 59.6608 43.6686 60.125 42.5 60.125C41.3314 60.125 40.2106 59.6608 39.3843 58.8344C38.558 58.0081 38.0938 56.8874 38.0938 55.7188V54.25H46.9062V55.7188Z" fill="#BBE550"/>
<path d="M55 37C58.3137 37 61 34.3137 61 31C61 27.6863 58.3137 25 55 25C51.6863 25 49 27.6863 49 31C49 34.3137 51.6863 37 55 37Z" fill="#BFF535"/>
<rect x="2.5" y="2.5" width="81" height="81" rx="40.5" stroke="#BFF535" stroke-width="5"/>
</svg>
`;

const Page = () => {
  const router = useRouter();
  const [abretab1, setAbretab1] = useState<boolean>(false);
  const [abretab2, setAbretab2] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<any>("");
  const [show, setShow] = useState<boolean>(false);

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={`app`}>
      <div className="head-usuario-detalle py-3 pb-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-between">
              <div
                className="regresar cursor-pointer"
                onClick={() => router.push("mantenimiento")}
              >
                <BsArrowLeft></BsArrowLeft>
              </div>
              <div className="detalleUsuario flex-fill px-3 ">
                Detalle de notificación
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-usuario pb-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mb-3">
              <span className="tituloPerfilesZonas ">Para doctores</span>
            </div>
            <div className="col-12 mb-4">
              <div className="cardCampana d-flex align-items-center justify-content-center px-3">
                <div>{parse(ico_campana)}</div>
                <div className=" ps-3">Cuando se le programa una cita</div>
              </div>
            </div>
            <div className="col-12 mb-3 mt-1">
              <span className="tituloPerfilesZonas ">Mensaje</span>
            </div>
            <div className="col-12 mb-4">
              <span className="sbtituloPerfil d-block mb-2">
                Ingresar mensaje
              </span>
              <div className="cardMensaje d-flex align-items-center p-3">
                ¡Hola“Nombre de doctor”!, tienes una cita programada para el
                “00/00/0000” a las “00:00” horas. Recuerda estar 10min. antes
                conectada.
              </div>
            </div>
            <div className="col-12 mb-5">
              <span className="sbtituloPerfil d-block mb-2">
                Ej. del mensaje
              </span>
              <div className="cardMensaje shadowcustom d-flex align-items-center p-3 ">
                ¡Hola <span className="verde ">Julio Mendez</span>
                !, tienes una cita programada para el
                <span className="verde "> 12/11/2022</span> a las{" "}
                <span className="verde ">13:00</span> horas. Recuerda estar
                10min. antes conectada.
              </div>
            </div>
            <div className="col-12">
              <span className="tituloPerfilesZonas d-block mb-4">
                Envió de notificación
              </span>
            </div>
            <div
              className="col-12 d-flex  justify-content-start mb-3 flex-column"
              style={{ gap: "16px" }}
            >
              <label
                className={`radio-container ${
                  selectedOption === "option1" && "activo"
                }`}
              >
                <input
                  type="radio"
                  value="option1"
                  checked={selectedOption === "option1"}
                  onChange={handleOptionChange}
                />
                <span className="checkmark"></span>1 sola vez
              </label>
              <label
                className={`radio-container ${
                  selectedOption === "option2" && "activo"
                }`}
              >
                <input
                  type="radio"
                  value="option2"
                  checked={selectedOption === "option2"}
                  onChange={handleOptionChange}
                />
                <span className="checkmark"></span>3 veces al día
              </label>
              <label
                className={`radio-container ${
                  selectedOption === "option3" && "activo"
                }`}
              >
                <input
                  type="radio"
                  value="option3"
                  checked={selectedOption === "option3"}
                  onChange={handleOptionChange}
                />
                <span className="checkmark"></span>Todos los días
              </label>
              <label
                className={`radio-container ${
                  selectedOption === "option4" && "activo"
                }`}
              >
                <input
                  type="radio"
                  value="option4"
                  checked={selectedOption === "option4"}
                  onChange={handleOptionChange}
                />
                <span className="checkmark"></span>Especialidad 5
              </label>
            </div>
            <div className="col-12 mt-4">
              <button
                className="GuardarModificacion mx-auto d-block"
                onClick={() => setShow(true)}
              >
                Guardar modificación
              </button>
              <button className="GuardarModificacion mx-auto d-block" disabled>
                Guardar modificación
              </button>
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
              <div className="col-12 d-flex flex-column">
                <div className="mx-auto">{parse(ico_campanaModal)}</div>
                <div className="txtinfook txt-center mx-auto my-4 ">
                  Notificación actualizada
                </div>
                <button onClick={() => setShow(false)}>De acuerdo</button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Page;
