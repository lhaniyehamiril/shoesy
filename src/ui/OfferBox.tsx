import imgOffer from "../assets/offer-shoe-in-home-page.webp";
export const OfferBox = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center py-1 w-[90%] sm:w-[78%] bg-[#c387ff] md:w-[36%] rounded-3xl md:py-3 ">
        <img
          src={imgOffer}
          alt="offer shoe"
          className=" w-[77%] md:w-[60%] sm:w-[56%]"
        />
      </div>
    </div>
  );
};
