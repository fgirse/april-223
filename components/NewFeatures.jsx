import styles from '../styles';
import Modale15 from '../components/Modale/Modale15'
import Modale16 from '../components/Modale/Modale16'

const NewFeatures = ({ modale, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#edc513]`}
    >
    {modale}
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
       {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#FFFFFF] leading-[32.4px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;



