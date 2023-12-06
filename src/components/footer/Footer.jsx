import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.container}>
      
      <span>@all rights reserved</span>
{/* I changed icons */}
      <div className={styles.socialNetworks}>

          <a href="https://www.linkedin.com/in/mariam-gabodze-28a839233/">
          <Image
            src="/linkedin.png"
            width={24}
            className={styles.icon}
            height={24}
            alt="linkedin"
          />
        </a> 

      <a href="https://github.com/Gabodze">
          <Image
            src="/github.png"
            width={24}
            className={styles.icon}
            height={24}
            alt="github"
          />
        </a>
{/* one more */}
      <a href="https://www.behance.net/MariamGabodze">
          <Image
            src="/behance.png"
            width={24}
            className={styles.icon}
            height={24}
            alt="behance"
          />
       
        </a>

      <a href="https://www.youtube.com/channel/UCF13u86tp01Fe3dVaTr8C1A">
          <Image
            src="/youtube.png"
            width={24}
            className={styles.icon}
            height={24}
            alt="behance"
          />
        </a>


      </div>
    </div>
  );
}

export default Footer;
