import React from 'react';

/**
 * Creates a Footer component
 * @returns {React.ReactElement}
 */
export const Footer =()=>{

   
    const socialNetworks = [
        {
          name: "Facebook",
          icon: "fa-facebook",
          link: "https://www.facebook.com/"
        },
        {
          name: "Twitter",
          icon: "fa-twitter",
          link: "https://twitter.com/",
        },
        {
          name: "Instagram",
          icon: "fa-instagram",
          link: "https://www.instagram.com/",
        }
    ];

    console.log(socialNetworks);
    return (

        
        <footer className="footer">
    
          <ul className="social-network">
            {socialNetworks.map((network) => (
              <li key={network.name} > 
                <a href={network.link} target="_blank" rel="noreferrer">
                  <i className={`fa ${network.icon}`}></i>
                  {network.name}
                </a>
              </li>
            ))}
          </ul>
        </footer>
      )
}

