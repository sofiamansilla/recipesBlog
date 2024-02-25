import React, {Fragment} from 'react';
import { NavBar } from '../NavBar';


/**
 * Creates a Header component
 * @returns {React.ReactElement}
 */
export const Header = ({
    appName,
    href,
    showLink
}) => {
    return(
        <header>
            <NavBar></NavBar>
            {showLink && 
            <>
                This is the header of <a href={href}>{appName.toUpperCase()}</a>APP
            </>
        }
            
        </header>
    )
}


