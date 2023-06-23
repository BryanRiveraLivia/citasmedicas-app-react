import React from "react";
import "./page.css";
import Image from "next/image";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {BsCheck2Circle} from 'react-icons/bs'
import Link from "next/link";

export default function page() {
  return (
    <div className="app">
      <div className="header w-100">
        <div className="franja"></div>
        <div className="logo">
          <img src={`/img/logo.png`} alt="" className="mx-auto d-block" />
        </div>
      </div>
      <div className="body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="titulos_generales d-block text-center text-dark mb-4">
                Inicia sesión
              </div>
            </div>
            <div className="col-12 mt-2">
              <div className="form-box mb-4">
                <label htmlFor="" className="d-block px-2 mb-2">
                  Usuario
                </label>
                <div className="input-grupo mb-3">
                  <input
                    className="rounded-4 text-uppercase"
                    type="text"
                    name=""
                    placeholder="Ingresa tu doc. de identidad"
                    id=""
                  />
                </div>
                <div className="input-grupo">
                  <input
                    className="rounded-4 text-uppercase bordeok icon"
                    type="text"
                    name=""
                    placeholder="Ingresa tu doc. de identidad"
                    id=""
                  />
                  <BsCheck2Circle className="icono-verde-input"></BsCheck2Circle>
                </div>
              </div>
              <div className="form-box">
                <label htmlFor="" className="d-block px-2 mb-2">
                  Contraseña
                </label>
                <div className="input-grupo mb-3 text-lowercase">
                  <input
                    className="rounded-4 bordeerror icon"
                    type="password"
                    name=""
                    placeholder="Ingresa tu contraseña"
                    id=""
                  />
                  <AiOutlineEyeInvisible ></AiOutlineEyeInvisible>
                </div>
                <div className="msjErrorInput mb-4">
                  Contraseña incorrecta, vuelve a intentarlo.
                </div>
                <div className="input-grupo mb-3 text-lowercase">
                  <input
                    className="rounded-4  icon"
                    type="password"
                    name=""
                    placeholder="Ingresa tu contraseña"
                    id=""
                  />
                  <AiOutlineEyeInvisible ></AiOutlineEyeInvisible>
                </div>
                <div className="input-grupo text-lowercase">
                  <input
                    className="rounded-4  icon"
                    type="password"
                    name=""
                    placeholder="Ingresa tu contraseña"
                    id=""
                  />
                  <AiOutlineEye></AiOutlineEye>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex align-items-center mt-3 mb-4">
            <label className="custom-checkbox">
              <input type="checkbox" />
              <span className="checkmark">
                <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.63637 1.36365L3.04197 7.72728L1.36365 5.8201" stroke="#FBFBFB" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </label>
            <span className="txt ms-2">Recordar contraseña</span>
            </div>
            <div className="col-12 mt-2">
              <button
                disabled={false}
                className=" text-white fw-bold login rounded-5 border-0 d-block mx-auto mb-3"
              >
                Ingresar
              </button>
              <button
                disabled={true}
                className=" text-white fw-bold login rounded-5 border-0 d-block mx-auto"
              >
                Ingresar
              </button>
            </div>
            <div className="col-12">
              <span className="d-block text-center font-12 d-flex align-items-center justify-content-center py-3">
                <span>¿Olvidaste tu contraseña?</span> <Link href={'/recuperar-contrasena'}><span className="font-verde2 text-decoration-underline ms-1">Actualiza aquí</span></Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
