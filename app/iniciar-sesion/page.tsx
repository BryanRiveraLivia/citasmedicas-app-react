import React from "react";
import "./page.css";
import Image from "next/image";
import { AiOutlineEye } from "react-icons/ai";

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
                <input
                  className="rounded-4 "
                  type="text"
                  name=""
                  placeholder="Ingresa tu doc. de identidad"
                  id=""
                />
              </div>
              <div className="form-box">
                <label htmlFor="" className="d-block px-2 mb-2">
                  Contraseña
                </label>
                <div className="input-grupo">
                  <input
                    className="rounded-4 "
                    type="password"
                    name=""
                    placeholder="Ingresa tu contraseña"
                    id=""
                  />
                  <AiOutlineEye></AiOutlineEye>
                </div>
              </div>
            </div>
            <div className="col-12"></div>
            <div className="col-12">
              <button
                disabled={true}
                className=" text-white fw-bold login rounded-5 border-0"
              >
                Ingresar
              </button>
            </div>
            <div className="col-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
