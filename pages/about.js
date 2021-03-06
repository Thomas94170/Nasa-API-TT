import React from "react";
import { Layout } from "../components/Layout";

export default function About() {
    return (
      <>
      <Layout page='About'>
        <br />
        <h1 className='text-center text-info'>A Propos</h1>
        <br />
        <div className='container'>
        <p className='text-center'>
            Projet perso réalisé pour la maitrise de next.js, de la récupération des API ainsi que son affichage.
        </p>
        <p className='text-center'>
            Démarrage du projet: npx-create-next-app nom-du-projet.
        </p>
        <p className='text-center'>
            Installation des dépendances et nous pouvons commencer.
        </p>
        <br />
        <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src='/satellite-api.png' className="card-img-top" alt="satellite-api" width="250px" height="350px" />
      <div className="card-body bg-dark">
        <h5 className="card-title text-center text-info">API des satellites</h5>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/satellite-vsc.png" className="card-img-top" alt="satellite-vsc" width="250px" height="350px" />
      <div className="card-body bg-dark">
        <h5 className="card-title text-center text-info">Map de l API dans mon code</h5>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/satellite-gsprops.png" className="card-img-top" alt="gspr" width="250px" height="350px"/>
      <div className="card-body bg-dark">
        <h5 className="card-title text-center text-info">Récupération avec GetStaticProps</h5>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/link-next.png" className="card-img-top" alt="link" width="250px" height="350px"/>
      <div className="card-body bg-dark">
        <h5 className="card-title text-center text-info">Chemin avec next.js</h5>
        
      </div>
    </div>
  </div>
  
</div>
        </div>
        {/* <img src='/satellite-api.png' width ="100%" height= "100%"/> */}
        
        
      </Layout>
      </>
    )
  }