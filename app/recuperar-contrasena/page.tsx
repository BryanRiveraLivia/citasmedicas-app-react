import React from 'react'
import "./page.css";
import Image from "next/image";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {BsCheck2Circle} from 'react-icons/bs'
import Link from "next/link";

const page = () => {
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
                Recuperar contraseña
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
              </div>
            </div>
            <div className="col-12 mt-2">
              <button
                disabled={false}
                className=" text-white fw-bold login rounded-5 border-0 d-block mx-auto mb-3"
              >
                Recuperar contraseña
              </button>
              <button
                disabled={true}
                className=" text-white fw-bold login rounded-5 border-0 d-block mx-auto"
              >
                Recuperar contraseña
              </button>
            </div>
            <div className="col-12">
              <span className="d-block text-center font-12 d-flex align-items-center justify-content-center py-3">
                <span>¿Deseas iniciar sesión?</span> <Link href={'/iniciar-sesion'}><span className="font-verde2 text-decoration-underline ms-1">Regresa aquí</span></Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page