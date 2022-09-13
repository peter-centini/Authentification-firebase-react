import React, {useContext} from 'react';
import { UserContext } from '../context/userContext';

export default function Home() {
    
    const {currentUser} = useContext(UserContext)

    return (
        <div className="container p-5">
            <h1 className="display-3 text-light">
                {currentUser ? "Bienvenue sur L'Accueil" : " Créer un compte ou connecter vous"}
            </h1>
        </div>
  )
}