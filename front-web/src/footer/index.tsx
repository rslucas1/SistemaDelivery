import './styles.css';

import { ReactComponent as YoutubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as IntagranIcon } from './instagram.svg';


function Footer(){
    return(
       
        <footer className="main-footer">
          App desenvolvimento durante a 2ª ed. do evento Semana DevSuperior
          <div className="footer-icons">
            <a href="https://www.youtube.com/a/devsuperior" target="_new"><YoutubeIcon/></a>
            <a href="https://www.linkedin.com/in/lucas-rodrigues-906766156/" target="_new"><LinkedinIcon/></a>
            <a href="https://www.instagram.com/?hl=pt-br"><IntagranIcon/></a>
            
          </div>
        </footer>

    )

}

export default Footer;