export const ValidateUser = (input, kindOfAction) => {
    let error = {};
    if(kindOfAction==="addUser"){
        if (!input.name || input.name.length < 3) {
        error.Name = "The Name is required";
        }
    }
    if (!input.password || input.password.length < 5) {
      error.password = "The Password is required";
    }
    if (!input.email || input.email.length < 5) {
        error.email = "The Email is required";
      }
    return error;
  };