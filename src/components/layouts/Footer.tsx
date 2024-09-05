import { CONTACTS } from "../../constants/contact";

const Footer = () => {
  return (
    <footer className="bg-secondary-black flex gap-10 justify-between py-8 sm:py-20 px-6 sm:px-12 text-white">
      <div className="space-y-6">
        <h2 className="text-xl sm:text-3xl font-medium">Get in Touch</h2>
        <p className="text-secondary-gray text-sm sm:text-base">
          For business and partnership inquiry please contact me below!
        </p>

        <div className="space-y-4 text-sm sm:text-base">
          {CONTACTS.map((contact, index) => (
            <div className="flex items-center gap-3" key={index}>
              <div className="border border-white rounded-full p-3">
                <contact.icon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-secondary-gray">{contact.title}</p>
                <p>{contact.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src="/footer-vector.png" />
    </footer>
  );
};

export default Footer;
