export const Validate = (input) => {
    let error = {};
    const theTypedDate = input.Date.split("/").slice(0,3);
    if (!input.Name || input.Name.length < 3) {
      error.Name = "The Name is required";
    }
    if (!input.Concept || input.Concept.length < 5) {
      error.Concept = "The Description is required";
    }
    if (!input.Total || input.Total < 0) {
      error.Total = "The Total is required";
    }
    if (!input.Type) {
      error.Type = "The Type is required";
    }
    if(theTypedDate.length!==3){
      error.Date = "The Date must be valid"
    }
    return error;
  };