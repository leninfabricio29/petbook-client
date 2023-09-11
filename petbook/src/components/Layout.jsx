import React from "react";
import SideBar from "./SideBar";
import CardFollower from "./followers/CardFollower";

const Layout = () => {
  // Supongamos que tienes una lista de seguidores con información
  const followers = [
    {
      id: 1,
      username: "@pezlo",
      avatarUrl: "https://cdn.iconscout.com/icon/free/png-512/free-avatar-371-456323.png?f=avif&w=256",
      isFollowing: true,
    },
    {
      id: 2,
      username: "@suamarco2",
      avatarUrl: "https://cdn.iconscout.com/icon/free/png-512/free-avatar-367-456319.png?f=avif&w=256",
      isFollowing: false,
    },
    {
        id: 3,
        username: "@leninfabricio",
        avatarUrl: "https://cdn.iconscout.com/icon/free/png-512/free-avatar-366-456318.png?f=avif&w=256",
        isFollowing: true,
      },
      {
        id: 4,
        username: "@susanaperez",
        avatarUrl: "https://cdn.iconscout.com/icon/free/png-512/free-avatar-377-456329.png?f=avif&w=256",
        isFollowing: false,
      },
    // Agrega más objetos de seguidores según tus necesidades
  ];

  

  return (
    <div className="container-fluid">
      <div className="row d-flex">
        <div className="col-2 border-end m-4">
          <SideBar />
        </div>
        <div className="col-6 m-4">
          Home
        </div>
        <div className="col container  d-flex flex-column justify-content-center  border-start m-4">
        <div className="text-dark text-center">
          <spam> Lo que te sugerimos </spam>
        </div>
            {/* Mapea la lista de seguidores y crea un CardFollower para cada uno */}
          {followers.map((follower) => (
            <CardFollower 
              key={follower.id}
              username={follower.username}
              avatarUrl={follower.avatarUrl}
              isFollowing={follower.isFollowing}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout;
