const Download = () => {
  return (
    <div className='w-full mx-auto text-lg text-white text-center min-h-[100vh] h-[fit-content] flex flex-col justify-center align-center snap-start' id="download">
      <h2 className='text-center font-bold text-[24px] mt-[18px] mb-[24px]'>
        📥 Download 📥 
      </h2>

      <div className="flex flex-row justify-center">
        <a
          className={'underline font-bold mr-[24px]'}
          href='https://github.com/Nintondo/extension/releases/download/0.1.0/chrome-0.1.0.zip'
        >
          Chrome Extension
        </a>
      <br /> <br />
        <a
          className={'underline font-bold'}
          href={'https://github.com/Nintondo/extension/releases/download/0.1.0/firefox-0.1.0.xpi'}
        >
          Firefox Extension
        </a>
      </div>
      <br />
      <p>
        Ready to embark on this enchanting crypto adventure? Download Nintondo Wallet for Bells and
        turn your cryptocurrency experience into an idyllic escapade. Let's make our financial
        journey not just profitable, but also delightful!
      </p>
      <p>
        Note: Nintondo Wallet is not affiliated with Nintendo or the Animal Crossing franchise.
        Bells is a meme cryptocurrency and should be enjoyed as part of a balanced financial
        portfolio.
      </p>
      <br />
      <p>Happy Bell Hunting! 🛎️</p>
    </div>
  );
};

export default Download;
