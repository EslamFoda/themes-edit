import { useSelector } from "react-redux";
const useActiveDesign = (compName) => {
  const aboutDesign = useSelector((state) => state.aboutComp.design);
  const heroDesign = useSelector((state) => state.hero.design);
  const featuredDesign = useSelector((state) => state.featured.design);
  const servicesDesign = useSelector((state) => state.services.design);
  const teamDesign = useSelector((state) => state.team.design);
  const clientsDesign = useSelector((state) => state.clients.design);
  const galleryDesign = useSelector((state) => state.gallery.design);
  const testimonialsDesign = useSelector((state) => state.testi.design);
  const fooerDesign =  useSelector((state) => state.footerComp.design);

  const handleActive = () => {
    if (compName === "hero") {
      return Number(heroDesign[heroDesign.length - 1]);
    } else if (compName === "about") {
      return Number(aboutDesign[aboutDesign.length - 1]);
    } else if (compName === "featured") {
      return Number(featuredDesign[featuredDesign.length - 1]);
    } else if (compName === "services") {
      return Number(servicesDesign[servicesDesign.length - 1]);
    } else if (compName === "team") {
      return Number(teamDesign[teamDesign.length - 1]);
    } else if (compName === "clients") {
      return Number(clientsDesign[clientsDesign.length - 1]);
    } else if (compName === "gallery") {
      return Number(galleryDesign[galleryDesign.length - 1]);
    } else if (compName === "testimonials") {
      return Number(testimonialsDesign[testimonialsDesign.length - 1]);
    } else if (compName === "footer") {
      return Number(fooerDesign[fooerDesign.length - 1]);
    }
  };
  return { handleActive };
};

export default useActiveDesign;
