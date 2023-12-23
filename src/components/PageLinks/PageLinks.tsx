import { buttons } from "../../settings/settings";
import Button from "../Button/Button";

const PageLinks = () => {
    return (
        <div className='flex justify-center py-1 sticky top-[16px] max-w-[100vw] mb-[180px] sm:hidden md:flex'>
        {buttons.map((button, index) => (
          <Button
            key={index}
            text={button.text}
            SvgIcon={button.svg}
            url={button.url}
            className={'[&:not(:last-child)]:mr-[34px]'}
            onClick={() => document.getElementById(button.text.toLowerCase())?.scrollTo()}
          />
        ))}
      </div>
    )
}

export default PageLinks;