import './style.css';
import { ReactComponent as Location } from './Asset/location.svg';
import { ReactComponent as Email } from './Asset/envelope.svg';
import { ReactComponent as Instagram } from './Asset/Instagram.svg';
import { ReactComponent as Youtube } from './Asset/Youtube.svg';
const Footer = props =>(
  <div>
  <div className ='footer'>
    <div className="footer-col-1">
      <h4>FOLLOW US ON SOCIAL MEDIA</h4>
      <Instagram className = 'Logo'/>
      <Youtube className = 'Logo'/>
    </div>
    <div className="footer-col-2">
      <Email className = 'Logo'/>
      <div className = 'footer-text'>
        <h4>EMAIL US AT</h4>
        <p>betisfasilkom@gmail.com</p>
      </div>
    </div>
    <div className="footer-col-3">
      <Location className = 'Logo'/>
      <div className="footer-text">
        <h4 className="Kanit-font">OUR LOCATION</h4>
        <div className="Alamat">
          <p>Fakultas Ilmu Komputer Universitas Indonesia
          </p>
          <p>
          Kampus UI Depok, Pondok Cina, Kec. Beji, Kota Depok,
          </p>
          <p> 
          Jawa Barat
          </p>
          <p>
          16424
          </p>
        </div>
      </div>
    </div>
    
  </div>
  </div>
);
export default Footer;