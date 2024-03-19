import ModoOscuro from "../Globales/Modo Oscuro/ModoOscuro";

const Review = ({ review }) => {

  return (
    <>
      <ModoOscuro>
        {(isDarkMode) => (
          <>
            <article>
              <div className={`border-2 p-3 flex flex-col gap-6 relative ${isDarkMode
                  ? `border-white`
                  : `border-black `
                }`}>
                <h4 className={`text-xl font-black absolute py-2 px-4 -top-6 ${isDarkMode
                    ? `bg-dark-blueClaro text-white`
                    : `bg-white text-black`
                  }`}>{review.usuario}</h4>
                <span className={`text-lg font-bold ${isDarkMode
                    ? `text-white`
                    : `text-black`
                  }`}>{review.calificacion}</span>
                <p className={`text-lg font-bold ${isDarkMode
                    ? `text-white`
                    : `text-black`
                  }`}>{review.comentario}</p>
              </div>
            </article>
          </>
        )}
      </ModoOscuro>
    </>
  );
};

export default Review;

