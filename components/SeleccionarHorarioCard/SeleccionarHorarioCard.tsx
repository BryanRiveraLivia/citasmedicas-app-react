import React from "react";
import { RiPencilFill } from "react-icons/ri";

const SeleccionarHorarioCard = () => {
  return (
    <label className={`custom-checkbox-horario disabled`}>
      <input type="checkbox" />
      <span className="checkmark"></span>
      <span className="label">12:30 AM</span>
    </label>
  );
};

export default SeleccionarHorarioCard;
