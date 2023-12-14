import { ListenOnlineContainer } from "./ListenOnline.styles";
import { FaYoutube } from "react-icons/fa";

interface ListenOnlineProps {
  ListenItems: string[];
}

const ListenOnline: React.FC<ListenOnlineProps> = ({ ListenItems }) => {
  return (
    <ListenOnlineContainer className="d-flex justify-content-center align-items-center">
      {ListenItems.map((ListenItem: string, index: number) => (
        <div key={index} className="mt-5 d-flex itemContainer">
          <div className="icon d-flex justify-content-center align-items-center">
            <FaYoutube size={32} />
          </div>
          <div className="content">
            <h4>Telemensagens</h4>
            <span>{ListenItem}</span>
          </div>
        </div>
      ))}
    </ListenOnlineContainer>
  );
};

export default ListenOnline;
