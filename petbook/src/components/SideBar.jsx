import React from "react";
import Item from "./Item";
import Header from "./Header";
import { FaSearch, FaHome, FaHeart, FaPlusSquare, FaUserCog,FaUser, FaSignOutAlt } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Header />
      <ul className="nav flex-column">
        <Item title="Inicio" icon={<FaHome />} />
        <Item title="Búsqueda" icon={<FaSearch />} />
        <Item title="Mensajes" icon={<FiMessageSquare />} />
        <Item title="Notificaciones" icon={<FaHeart />} />
        <Item title="Publicar" icon={<FaPlusSquare />} />
        <Item title="Perfil" icon={<FaUser/>} />
        <Item title="Configuraciones" icon={<FaUserCog />} />
        <Item title="Cerrar Sesión" icon={<FaSignOutAlt />} />
      </ul>
    </div>
  );
};

export default SideBar;
