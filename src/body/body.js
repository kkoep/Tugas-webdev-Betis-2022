import './style.css';
import Icon from './icon.png'

const Body = props =>(
    <div className="body">
        <div className="card-main">
            <h2>What Do They Say?</h2>
            <div className="card-box">
                <div class="card-1" >
                <div className="card-icon">
                            <img src={Icon} alt="" />
                        </div>
                        <div className="card-name-text">
                            <p className ='card-text-2'><b>Yulita</b></p>
                            <p className ='card-text-2'>Peserta BETIS 2021</p>
                        </div>
                    <p className ='card-text'>Aku seneng banget bisa belajar di BETIS 2021. Selain dapat ilmu, kakak-kakak yang ngajar asik banget aku jadi paham materinya. Terus mentor aku juga baik banget.</p>
                </div>
                <div className="card-2">
                <div className="card-icon">
                            <img src={Icon} alt="" />
                        </div>
                        <div className="card-name-text">
                            <p className ='card-text-2'><b>Yulita</b></p>
                            <p className ='card-text-2'>Peserta BETIS 2021</p>
                        </div>
                    <p className ='card-text'>Aku seneng banget bisa belajar di BETIS 2021. Selain dapat ilmu, kakak-kakak yang ngajar asik banget aku jadi paham materinya. Terus mentor aku juga baik banget.</p>
                </div>
                <div className="card-3">
                <div className="card-icon">
                            <img src={Icon} alt="" />
                        </div>
                        <div className="card-name-text">
                            <p className ='card-text-2'><b>Yulita</b></p>
                            <p className ='card-text-2'>Peserta BETIS 2021</p>
                        </div>
                    <p className ='card-text'>Aku seneng banget bisa belajar di BETIS 2021. Selain dapat ilmu, kakak-kakak yang ngajar asik banget aku jadi paham materinya. Terus mentor aku juga baik banget.</p>
                </div>
            </div>
        </div>
        <div className="youtube-video-box">
        <div className="youtube-video">
            <h6>a</h6>
            <h2>Special Thanks to Our Sponsor!</h2>
            <iframe width="860" height="515" src="https://www.youtube.com/embed/6-Wwz0CEe3I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
    </div>
)

export default Body;