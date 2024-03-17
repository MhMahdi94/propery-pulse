import React from 'react'
import PropertyCard from '@/components/PropertyCard/PropertyCard';

async function fetchProerties(){
  try {
    const res = await fetch(`${process.env.NEXT_PUPLIC_API_DOMAIN}/properties`)
    if(!res.ok){
      throw new Error('Faild to fetch data');
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}
const PropertiesPage =async () => {
  const properties = await fetchProerties();

  //sort
  properties.sort((a,b)=>new Date(b.createdAt)- new Date( a.createdAt))
  return (
    <>

      <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {properties.length === 0? 
            <div className="">No Data Found</div>
            :
            properties.map((property)=>{
              return <PropertyCard key={property._id} property={property}/>
            })
          }
        </div>
      </div>
    </section>
    </>
  )
}

export default PropertiesPage