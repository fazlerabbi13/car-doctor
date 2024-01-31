import img1 from '../../../assets/assets/images/about_us/person.jpg'
import img2 from '../../../assets/assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-3/4 relative'>
                    <img src={img1} className="w-full max-w-sm rounded-lg shadow-2xl" />
                    <img src={img2} className="w-1/2 absolute border-8 right-10 top-1/2 max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-7'>
                    <h3 className='text-xl text-[#FF3811]'>About Us</h3>
                    <h1 className='text-5xl text-black font-semibold'>We are qualified & of experience in this field</h1>
                    <p className="py-4">There are many variations of 
                    passages of Lorem Ipsum available, but the majority have suffered
                     alteration in some form, by injected humour, or randomiset
                     words which don not look even slightly believable. </p>
                    <p className="py-4">There are many variations of 
                    passages of Lorem Ipsum available, but the majority have suffered
                     alteration in some form, by injected humour, or randomiset
                     words which don not look even slightly believable. </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;