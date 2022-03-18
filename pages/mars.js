import React from "react";
import { Layout } from "../components/Layout";
// import axios from "axios";
import Image from "next/image";

export default function Mars({res}){
    console.log(res)
    return(
        <>
        {/* {JSON.stringify(res)} */}
        <Layout page= 'Mars'>
            <br />
            <h1 className='text-center text-info'>Mars Rover Photos</h1>
            <br />
            <p className='container text-center'>This API is designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars and make it more easily available to other developers, educators, and citizen scientists. This API is maintained by Chris Cerami.
                Each rover has its own set of photos stored in the database, which can be queried separately. There are several possible queries that can be made against the API. Photos are organized by the sol (Martian rotation or day) on which they were taken, counting up from the rover's landing date. A photo taken on Curiosity's 1000th Martian sol exploring Mars, for example, will have a sol attribute of 1000. If instead you prefer to search by the Earth date on which a photo was taken, you can do that, too.
                Along with querying by date, results can also be filtered by the camera with which it was taken and responses will be limited to 25 photos per call. Queries that should return more than 25 photos will be split onto several pages, which can be accessed by adding a 'page' param to the query.
                Source : Nasa.gov
            </p>
            <br />
            <div className="container d-flex justify-content-evenly">
            <div className=" row row-cols-1 row-cols-md-3 g-3 ">
            {res.photos.map(res =>(
                
            <div key ={res.id} > 
                <div className="text-center">
                    <div className="col">
                        <div className="card bg-dark">
                            <img src={res.img_src} className="card-img-top" alt={res.name} width ="300px" height= "300px"/>
                            <div className="card-body">
                                <h5 className="card-title text-info">Rover name: {res.rover.name}</h5>
                                <p className="card-text text-info">Caméra: {res.camera.full_name}</p>
                                <p className="card-text text-white">earth date: {res.earth_date}</p>
                                <p className="card-text text-white text-center">{res.id}</p>
                            </div>
                        </div>
                    </div>
                </div>
              
               
              
            </div>
            ))}
            </div>
            </div>
        </Layout>
        </>
    )
}


export async function getStaticProps(context){
    try {
      const res = await fetch(
       "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=jPx6e0Jg5Ntq59tJpQ3BfOVFztjSjfXrNZvtPnc2" )
        .then((res) => res.json());
  
      return{
        props: {res}
      }
  
    } catch (err){
      console.error(err);
    }
  }

        // "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
       