import { Fragment } from "react"
import { linksData } from "../../settings/settings"
import BellsIcon from "../Icons/BellsIcon/BellsIcon"

export const Markets = () => {
    return (
        <div className={'w-full mx-auto text-lg text-white min-h-[100vh] h-[fit-content] flex flex-col justify-center align-center snap-start'} id="markets">
        <div className={'w-[100%] mx-auto'}>
          <div
            id={'markets'}
            className={'text-white'}
          >
            <div className={'mb-[73px] '}>
                <div className="flex flex-row justify-center mt-[18px] mb-[24px]">
                    <BellsIcon height={28} width={28} />
                    <h2 className='font-bold text-[24px] mx-[16px]'>
                        Where to buy $BEL?  
                    </h2>
                    <BellsIcon height={28} width={28}/>
                </div>
                <div className="flex flex-row justify-center">
              {linksData.map((section, index) => (
                <div key={index} className="p-[16px]">
                  {/* <p>{section.type}:</p> <br /> */}
                  <ul className='list-disc pl-4'>
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.link}
                          target='_blank'
                          className='underline'
                        >
                          {link.name}
                        </a>
                        <br />
                        <br />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}