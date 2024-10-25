import toast from "react-hot-toast"


export const validation = (registerData) => {

    if(!registerData.userName || !registerData.email || !registerData.password || !registerData.confirmPassword){
        toast.error("All fields are required");
        return false
    }

    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!emailPattern.test(registerData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    if (registerData.password.length < 6) {
        toast.error("Password must be at least 6 characters long");
        return false;
      }
  
      if (registerData.password !== registerData.confirmPassword) {
        toast.error("Passwords do not match");
        return false;
      }

    return true;
 
}
