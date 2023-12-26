declare module "react-whatsapp-button" {
    interface ReactWhatsappButtonProps {
      countryCode: string;
      phoneNumber: string;
      animated?: boolean;
      title: string;
    }
  
    const ReactWhatsappButton: React.FC<ReactWhatsappButtonProps>;
    export default ReactWhatsappButton;
  }
  