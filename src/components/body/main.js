import './main.css'
import Partner1 from '../../Assets/partner1.png';
import Partner2 from '../../Assets/partner2.png';
import Partner3 from '../../Assets/partner3.png';
import Partner4 from '../../Assets/partner4.png';
import Partner5 from '../../Assets/partner5.png';

export default function main() {
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

            <div className='featured-product'>
                <div className='product-box product-image'></div>
                <div className='product-box'>
                    <div className='product-box1'>
                        <div className='box1 box-image'></div>
                        <div className='box1 box-image'></div>
                    </div>
                    <div className='product-box2'>
                        <div className='box2 box-image'></div>
                        <div className='box2 box-image'></div>
                    </div>
                </div>
            </div>
        </>
    )
}