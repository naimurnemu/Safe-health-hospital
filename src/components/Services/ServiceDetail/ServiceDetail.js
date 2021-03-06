import { useParams } from "react-router";

// There have no api for set data! showing detail I use full arraydb into this component
const servicesData = [
  {
    id: "1",
    title: "Mother-Child Spacial Care",
    price: "200",
    unit: "Mother&Child",
    description:
      "Pregnancy, also known as gestation, is the time during which one or more offspring develops inside a woman.",
    img: "https://i.ibb.co/SyN4Hfg/service1.png",
  },
  {
    id: "2",
    title: "Medicine Center",
    price: "5-100",
    unit: "Pharmacy",
    description:
      "Pharmacy is the clinical health science that links medical science with chemistry and it is charged with the discovery.",
    img: "https://i.ibb.co/hX46xzW/service2.png",
  },
  {
    id: "3",
    title: "Pregnancy CheckUp",
    price: "50",
    unit: "Mother&Child",
    description:
      "A pregnancy test can tell whether you are pregnant by checking for a particular hormone in your urine or blood.",
    img: "https://i.ibb.co/GdyJFgf/service3.png",
  },
  {
    id: "4",
    title: "Child With child specialist",
    price: "500",
    unit: "Child-care",
    description:
      "Pediatricians are usually referred to as 'child specialists' due to their specialization in treating a wide range.",
    img: "https://i.ibb.co/ZmJxrdS/service4.png",
  },
  {
    id: "5",
    title: "Spacial Counciling",
    price: "60",
    unit: "Mental",
    description:
      "Because they are medical doctors, they can prescribe medications. Psychoanalysts are clinicians who practice a particular.",
    img: "https://i.ibb.co/6bX4BdQ/service5.png",
  },
  {
    id: "6",
    title: "Foreign Doctor Appoinment",
    price: "40",
    unit: "Health",
    description:
      "However, there are many ways to incorporate travel into your medical career without having to leave the profession.",
    img: "https://i.ibb.co/5T6R6By/service6.png",
  },
  {
    id: "7",
    title: "ICU & Life-Support",
    price: "2000",
    unit: "Emergency",
    description:
      "Life support is usually deployed as a short-term, temporizing measure to buy sufficient time for the patient to recover.",
    img: "https://i.ibb.co/MfPpRqF/service7.png",
  },
  {
    id: "8",
    title: "Oparetion & Cosmetics",
    price: "500-5000",
    unit: "Emergency",
    description:
      "The definition of an operation is the process of working or functioning, or a surgical procedure.",
    img: "https://i.ibb.co/hKhMj37/service8.png",
  },
];

const ServiceDetail = () => {
  //useparams hook for optional route
  const { detail } = useParams();

  // array find method
  const service = servicesData.find(
    (serviceData) => serviceData.id === detail
  );

  // destructure
  const { title, unit, price, description, img } = service || {};

  return (
    <div className="m-5 bg-light p-5">
      <img src={img} className="w-100" alt="" />
      <div className="card-body">
        <h2 className="text-primary m-0">{title}</h2>
        <h5 className="text-secondary m-0">Under {unit} unit</h5>
        <h4 className="text-danger">Cost: ${price}</h4>
        <p className="text-dark">{description}</p>
      </div>
    </div>
  );
};

export default ServiceDetail;
