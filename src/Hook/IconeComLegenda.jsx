export const IconeComLegenda = ({ Icone, nome, top = "top-40", ...props }) => (
  <div
    className="group relative sm:h-30 md:w-45 md:h-45 flex flex-col items-center justify-center"
    {...props}
  >
    <Icone className="w-20 h-20 sm:w-full sm:h-60 object-contain transition-transform duration-300 hover:scale-85 transform-gpu will-change-transform" />
    {/* Legenda aparece apenas em telas sm+ */}
    <div
      className={`absolute left-1/2 -translate-x-1/2 
        ${top} px-3 py-1 bg-gray-800 text-white text-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 font-[Roboto]
        hidden sm:block`}
    >
      <strong>{nome}</strong>
    </div>
  </div>
);
