interface IProps {
    text: string;
    icon: React.ReactNode;
    href: string;
}

const DownloadLink: React.FC<IProps> = ({text, icon, href}) => {

    return (
        <a href={href} className="bg-black h-[80px] p-[8px] rounded-[8px] text-[18px] text-bold w-[120px] flex justify-center items-center flex-1 max-w-[280px]">
            <span className='mr-[8px]'> 
                {icon}
            </span>
            {text}
        </a>
    )
}

export default DownloadLink;