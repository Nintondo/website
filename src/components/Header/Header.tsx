import Link from '../Link/Link';

const links = [
  { name: 'POOL', url: '/' },
  { name: 'wallet', url: '#wallet' },
  { name: 'markets', url: '#markets' },
  { name: 'explorer', url: 'https://bells.quark.blue/' },
];

const Header = () => {
  return (
    <div className={'bg-gradient-to-b from-black to-transparent w-[100vw] flex justify-center align-center max-w-[800px]'}>
        <Link
          href='/'
          text='NINTONDO.IO'
          className={'text-yellow-500 text-2xl font-bold leading-normal text-shadow-md'}
        />
      <div className='flex flex-row justify-around w-[100%]'>
        {links.map((link) => (
          <Link
            key={link.name}
            text={link.name}
            href={link.url}
            className={'text-white'}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
