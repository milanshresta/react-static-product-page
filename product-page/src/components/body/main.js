import './Main.css'
import Partner1 from '../../Assets/partner1.png';
import Partner2 from '../../Assets/partner2.png';
import Partner3 from '../../Assets/partner3.png';
import Partner4 from '../../Assets/partner4.png';
import Partner5 from '../../Assets/partner5.png';

export default function Main() {
    return (
        <>
            <div className="our-partners">
                <div className='partner1'>
                    <img
                    src={Partner1}
                    alt=''
                    />
                </div>
                <div className='partner2'>
                <img
                    src={Partner2}
                    alt=''
                    />
                </div>
                <div className='partner3'>
                <img
                    src={Partner3}
                    alt=''
                    />
                </div>
                <div className='partner4'>
                <img
                    src={Partner4}
                    alt=''
                    />
                </div>
                <div className='partner5'>
                <img
                    src={Partner5}
                    alt=''
                    />
                </div>
            </div>
        </>
    )
}