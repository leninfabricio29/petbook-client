import React from "react";
import "../../assets/styles/stylesCardFollower.css"; // Importa un archivo CSS para estilos personalizados si es necesario

const CardFollower = (props) => {
    return (
      <div className="card-follower-suggestion">
        <img className="follower-avatar-suggestion" src={props.avatarUrl} alt="Avatar" />
        <div className="follower-info-suggestion">
          <p className="follower-username-suggestion">{props.username}</p>
          <button className="follow-button-suggestion">
            {props.isFollowing ? "Siguiendo" : "Seguir"}
          </button>
        </div>
      </div>
    );
  }
  
  export default CardFollower;