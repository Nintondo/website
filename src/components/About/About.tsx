const About = () => {
  return (
    <div className='w-full mx-auto text-lg text-white min-h-[100vh] h-[fit-content] flex flex-col justify-center align-center snap-start' id='about'>
      <h2 className='text-center font-bold text-[24px] mt-[18px] mb-[24px]'>🍃 Welcome to Nintondo Wallet! 🍃</h2>
      <p className='text-center mb-[80px]'>
        We're thrilled to introduce Nintondo Wallet, your newest companion in the whimsical world of
        Bells cryptocurrency. Inspired by the beloved universe of Animal Crossing, our wallet is
        more than just a tool; it's a delightful journey into the heart of a community where fun
        meets finance.
      </p>
      <h3>🌸 Key Features:</h3>
      <ul className={'list-disc'}>
        <li>
          <p>
            Village Marketplace: Just like your favorite Animal Crossing marketplace, trade and
            manage your Bells with ease and charm.
          </p>
        </li>
        <li>
          <p>
            Tom Nook's Security: Top-notch security measures, ensuring your Bells is as safe as a
            bell in Tom Nook's vault.
          </p>
        </li>
        <li>
          <p>
            Island Backup: Never lose your data with our Island Backup system, safeguarding your
            wallet like the serene islands of Animal Crossing.
          </p>
        </li>
        <li>
          <p>
            Nook Miles Rewards: Earn Nook Miles for every transaction, adding an exciting twist to
            your cryptocurrency journey.
          </p>
        </li>
        <li>
          <p>
            Customizable Interface: Personalize your wallet with themes and characters from Animal
            Crossing, making finance fun!
          </p>
        </li>
      </ul>
      <br />
      <p>🍂 What's New in 0.1.0:</p>
      <ul className={'list-disc'}>
        <li>
          <p>
            Launch of Nintondo Wallet: A fresh start with a familiar feel for all Bells enthusiasts
            and Animal Crossing fans.
          </p>
        </li>
        <li>
          <p>
            Enhanced UI: Navigate with ease through a user-friendly interface, adorned with charming
            Animal Crossing aesthetics.
          </p>
        </li>
        <li>
          <p>
            Improved Transaction Speed: Swift as a balloon gift floating across the sky, our
            enhanced transaction system ensures quick and efficient processing.
          </p>
        </li>
        <li>
          <p>
            Community Events: Participate in special events and challenges, bringing together the
            community spirit of Animal Crossing.
          </p>
        </li>
      </ul>
      <br />
    </div>
  );
};

export default About;
