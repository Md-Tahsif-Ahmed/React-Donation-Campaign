const getStoredDonation = () => {
    const storedDonation = localStorage.getItem('donation');
    if (storedDonation) {
      return JSON.parse(storedDonation);
    }
    return [];
  };
  
  const saveDonation = (id) => {
    const storedDonation = getStoredDonation();
  
    // Convert the ID to a string
    const idString = id.toString();
  
    // Check if the ID already exists in the array
    const exists = storedDonation.includes(idString);
  
    if (!exists) {
      // Add the new ID to the existing array
      storedDonation.push(idString);
  
      // Store the updated array back in localStorage
      localStorage.setItem('job-applications', JSON.stringify(storedDonation));
    }
  };
  
  export { getStoredDonation, saveDonation}