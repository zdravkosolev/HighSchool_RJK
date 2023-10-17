import styles from "./PrestojniNastani.module.css";
import { NastaniType } from "@/types";

interface Props {
  data: NastaniType;
}

const Nastani = ({ data }: Props) => {
  const { title, time, date, location } = data;

  const formatDate = (dateString: string) => {
    const dateParts = dateString.split('.');

    if (dateParts.length === 3) {
      const day = dateParts[0];
      const month = convertToAbbreviation(dateParts[1]);
      return `${day} ${month}`;
    }
  };

  const monthAbbreviations: { [key: string]: string } = {
    '01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'Apr',
    '05': 'May', '06': 'Jun', '07': 'Jul', '08': 'Aug',
    '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dec'
  };

  const convertToAbbreviation = (month: string) => monthAbbreviations[month] || month;

  const formattedDate = formatDate(date);

  return (
    <>
      <div className={`flex ${styles.NastanContainer}`}>
        <p className={`bg-white px-2 py-1 center ${styles.NastaniDate}`}>{formattedDate}</p>
        <div className={`text-white px-4 ${styles.NastaniInfo}`}>
          <h2 className={`${styles.NastaniHeader}`} >{title}</h2>
          <div className={`flex justify-between`}>
            <p>{time}</p>
            <p>{date}</p>
            <p>{location}</p>       
          </div>
        </div>
      </div>
    </>
  );
};

export default Nastani;
