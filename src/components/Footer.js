import { useContext } from "react";
import UserContext from "../UserContext";


const Footer = () => {
  const {beginner} = useContext(UserContext);

  return(<>
  <h4>Footer</h4>;
  <p>this site was devloped by {beginner.name} - {beginner.email} </p>
  </>
)
};

export default Footer;
