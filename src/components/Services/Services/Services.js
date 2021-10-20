import useService from "../../../hooks/useService";
import Service from "../Service/Service";
import ServiceInfo from "../ServiceInfo/ServiceInfo";

const Services = () => {
  // custom hook for load data
  const [services] = useService();
  return (
    <div>
      <ServiceInfo />
      <h2 className="bg-primary p-1 my-2 rounded">See Services</h2>
      <div className="row p-3 row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {services.map((service) => (
          <Service service={service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
