"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import "./page.css";
import Image from "next/image";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import Link from "next/link";
import { Roboto } from "next/font/google";
const robotoMenu = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function Page() {
  const router = useRouter();
  const [usuario, setusuario] = useState<string>("");
  const [validausuario, setvalidausuario] = useState<boolean>(true);
  const [password, setpassword] = useState<string>("");
  const [validapassword, setvalidapassword] = useState<boolean>(true);
  const [verpassword, setverpassword] = useState<boolean>(false);
  const maxLengthUsuario = 5;
  const minLengthUsuario = 5;
  const maxLengthPassword = 5;
  const minLengthPassword = 3;

  const viewPassword = () => {
    setverpassword(!verpassword);
  };

  const validateInputUser = (e: string) => {
    setusuario(e);
    if (e.length > 0 && !validausuario) {
      setvalidausuario(true);
    }
  };

  const validateInputPassword = (e: string) => {
    setpassword(e);
    if (e.length > 0 && !validapassword) {
      setvalidapassword(true);
    }
  };

  const validaFormulario = () => {
    if (usuario !== "" || password !== "") {
      if (usuario == "admin") {
        setvalidausuario(true);
      } else {
        setvalidausuario(false);
      }
      if (password == "admin") {
        setvalidapassword(true);
      } else {
        setvalidapassword(false);
      }

      if (usuario == "admin" && password == "admin") {
        router.push("/home");
      }
    }
  };

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
                {/*
                  ! usa la clase .bordeok para borde verde
                  ! usa la clase .bordeerror para borde rojo de error
                */}
                <div className="input-grupo ">
                  <input
                    className={`icon ${
                      usuario.length >= maxLengthUsuario ? "bordeok" : null
                    }`}
                    onChange={(e) => validateInputUser(e.target.value)}
                    type="text"
                    name=""
                    placeholder="Ingresa tu doc. de identidad"
                    id=""
                  />
                  {usuario.length >= maxLengthUsuario && (
                    <BsCheck2Circle className="icono-verde-input"></BsCheck2Circle>
                  )}
                </div>
                {!validausuario && (
                  <div className="msjErrorInput mb-3">
                    usuario incorrecta, vuelve a intentarlo.
                  </div>
                )}
              </div>
              <div className="form-box">
                <label htmlFor="" className="d-block px-2 mb-2">
                  Contraseña
                </label>
                <div className="input-grupo mb-3 text-lowercase">
                  <input
                    className={`rounded-4 icon ${
                      !validapassword && password.length >= maxLengthPassword
                        ? "bordeerror"
                        : null
                    }`}
                    onChange={(e) => validateInputPassword(e.target.value)}
                    type={verpassword ? "text" : "password"}
                    name=""
                    placeholder="Ingresa tu contraseña"
                    id=""
                  />
                  {verpassword ? (
                    <AiOutlineEye onClick={() => viewPassword()}></AiOutlineEye>
                  ) : (
                    <AiOutlineEyeInvisible
                      onClick={() => viewPassword()}
                    ></AiOutlineEyeInvisible>
                  )}
                </div>
                {!validapassword && (
                  <div className="msjErrorInput mb-3">
                    Contraseña incorrecta, vuelve a intentarlo.
                  </div>
                )}
                <div className="input-grupo mb-3 text-lowercase d-none">
                  <input
                    className="rounded-4  icon"
                    type="password"
                    name=""
                    placeholder="Ingresa tu contraseña"
                    id=""
                  />
                  <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                </div>
                <div className="input-grupo text-lowercase d-none">
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
            <div className="col-12 d-flex align-items-center mt-3 mb-4 d-none">
              <label className="custom-checkbox" htmlFor="lblRecuerda">
                <input type="checkbox" />
                <span className="checkmark">
                  <svg
                    width="10"
                    height="9"
                    viewBox="0 0 10 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.63637 1.36365L3.04197 7.72728L1.36365 5.8201"
                      stroke="#FBFBFB"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </label>
              <span id="lblRecuerda" className="txt ms-2">
                Recordar contraseña
              </span>
            </div>
            <div className="col-12 d-flex align-items-center mt-3 mb-4">
              <label className="chktipo1">
                <input type="checkbox" id="recordar-contrasena" />
                <span className="checkbox-custom"></span>
                Recordar contraseña
              </label>
            </div>
            <div className="col-12 mt-2">
              <button
                disabled={usuario !== "" && password !== "" ? false : true}
                onClick={validaFormulario}
                className={`text-white fw-bold login rounded-5 border-0 d-block mx-auto mb-3 ${robotoMenu.className}`}
              >
                Ingresar
              </button>
            </div>
            <div className="col-12">
              <span className="d-block text-center font-12 d-flex align-items-center justify-content-center py-3">
                <span>¿Olvidaste tu contraseña?</span>{" "}
                <Link href={"/recuperar-contrasena"}>
                  <span className="font-verde2 text-decoration-underline ms-1">
                    Actualiza aquí
                  </span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
