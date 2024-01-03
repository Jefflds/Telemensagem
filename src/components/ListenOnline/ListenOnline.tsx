import React from "react";
import { Link } from "react-router-dom";
import { ListenOnlineContainer, Styledbuttons } from "./ListenOnline.styles";

interface ListenOnlineProps {
  ListenItems: string[];
}

const ListenOnline: React.FC<ListenOnlineProps> = ({ ListenItems }) => {
  const LinkToRoute = (item: string) => {
    const normalizedStr = item
      .replace(/[áàãâä]/g, "a")
      .replace(/[éèêë]/g, "e")
      .replace(/[íìîï]/g, "i")
      .replace(/[óòõôö]/g, "o")
      .replace(/[úùûü]/g, "u")
      .replace(/ç/g, "c")
      .replace(/[^a-zA-Z0-9]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();
      
    return normalizedStr;
  };

  return (
    <ListenOnlineContainer className="d-flex justify-content-center align-items-center">
      {ListenItems.map((ListenItem: string, index: number) => (
        <div
          key={index}
          className="mt-5 d-flex itemContainer justify-content-center align-items-center"
        >
          <div className="content">
            <Styledbuttons>
              <Link
                to={LinkToRoute(ListenItem)}
                style={{ textDecoration: "none" }}
              >
                <span>{ListenItem}</span>
              </Link>
            </Styledbuttons>
          </div>
        </div>
      ))}
    </ListenOnlineContainer>
  );
};

export default ListenOnline;
