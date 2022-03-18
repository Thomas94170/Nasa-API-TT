import React from "react";
import { Layout } from "../components/Layout";

export default function Terre({res}){
    console.log(res)
    return(
        
       <>
        <Layout page = 'Terre'>
            <br />
        <h1 className='text-center text-info'>Tous les satellites disponibles dans la base de données tournant autour de la Terre</h1>
      <br />
      <p className='text-center'>
      API Spectator ! Cette API vous permet d’interagir avec Spectator de manière programmatique 
      en utilisant directement ses fonctionnalités et ses données. Vous pouvez rechercher 
      des données, demander des images en haute résolution, suivre les viaducs satellites 
      et plus encore. Pour utiliser la plupart des points de terminaison, vous aurez besoin 
      d’une clé générée automatiquement pour chaque compte à https://app.spectator.earth.
      </p>
      <br />
      <p  className='text-center'>Source: https://api.spectator.earth/#spectator-api-docs</p>
      <br />
      <img src='/satellite.jpg'width ="100%" height= "100%"/>
      <br />
      <br />
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {res.features.map(res =>(
                
                        <div key ={res.id} > 
                    <div className="text-center">
                        <div className="col">
                            <div className="card bg-dark">
                                <div className="card-body">
                                    <h5 className="card-title text-info">Name: {res.properties.name}</h5>
                                    <p className="card-text text-info">Norad id: {res.properties.norad_id}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                  
                  
                  
                </div>
                
                
                ))}
        </div>
     
        
        </Layout>
        {/* {JSON.stringify(res)} */}
       </>


       
        
    )
}


export async function getStaticProps(context){
    try {
      const res = await fetch(
       "https://api.spectator.earth/satellite" )
        .then((res) => res.json());
  
      return{
        props: {res}
      }
  
    } catch (err){
      console.error(err);
    }
  }