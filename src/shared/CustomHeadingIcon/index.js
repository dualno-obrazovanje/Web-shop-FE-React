import React from "react";
import './style.css';

const CustomHeadingIcon = ({functionalIcon = false, CustomIcon, onClick}) => {
  return(<CustomIcon className={functionalIcon ? 'functional-icon' : 'decor-icon'} onClick={onClick} />);
}

export default CustomHeadingIcon;