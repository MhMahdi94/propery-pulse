const apiDomain ='http://localhost:3000/api';// process.env.NEXT_PUPLIC_API_DOMAIN || null;

//fetch properties
async function fetchProerties() {
 
  try {
    if (!apiDomain) {
      return [];
    }
    const res = await fetch(`${apiDomain}/properties`);
    if (!res.ok) {
      throw new Error("Faild to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

//fetch property
async function fetchProerty(id) {
  console.log(apiDomain);
  try {
    if (!apiDomain) {
        console.log(1)
      return null;
    }
    const res = await fetch(`${apiDomain}/properties/${id}`);
    if (!res.ok) {
        console.log(2)
      throw new Error("Faild to fetch data");
    }
    console.log(3)
    return res.json();
  } catch (error) {
    console.log(4)
    console.log(error);
    return null;
  }
}

export { fetchProerties, fetchProerty };
