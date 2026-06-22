
const Heading = ({title,subTitle}) => {
    return (
        <div className='flex flex-col justify-center items-center my-12'>
            <h2 className='text-xl md:text-2xl lg:text-4xl font-thin mb-4'>{title}</h2>
            <p className='text-xs md:text-base font-thin text-gray-600 text-center'>{subTitle}</p>
        </div>
    );
};

export default Heading;