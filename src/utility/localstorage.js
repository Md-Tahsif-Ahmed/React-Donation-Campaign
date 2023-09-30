const getStoredDonation = () => {
    const storedDonation = localStorage.getItem('donation'); // Use the same key
    if (storedDonation) {
      return JSON.parse(storedDonation);
    }
    return [];
  };
  
  const saveDonation = (id) => {
    const storedDonation = getStoredDonation();
  
    const idString = id.toString();
  
   
    const exists = storedDonation.includes(idString);
  
    if (!exists) {
      storedDonation.push(idString);
  
    
      localStorage.setItem('donation', JSON.stringify(storedDonation)); //  
    }
  };
  
  export { getStoredDonation, saveDonation };
  