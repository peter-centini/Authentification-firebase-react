import React from 'react';
import cat from "./cat.gif"
import monster from "./monster.gif"




export default function PrivateHome() {
  return (
      <div className="container p-5">
          <h1 className="display-3 text-light mb-4">
             Bienvenue sur la page Privée
          </h1>
          <img className="ml-5 p-5 mt-5" src={monster} alt="monster" />
          <img className="mr-5 p-5" src={cat} alt="cat" />
      </div>
  )
}