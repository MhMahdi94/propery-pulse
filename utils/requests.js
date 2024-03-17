const apiDomain = process.env.NEXT_PUPLIC_API_DOMAIN || null;

async function fetchProerties(){
    try {
        if(!apiDomain){
            return [];
        }
      const res = await fetch(`${apiDomain}/properties`)
      if(!res.ok){
        throw new Error('Faild to fetch data');
      }
  
      return res.json();
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  export {fetchProerties};