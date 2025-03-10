import React from "react";

const EmbeddedGame = () => {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-zinc-100 mt-10">¡Diviértete con el Juego de Dinosaurio!</h3>
      
      <div className="w-full h-80 bg-zinc-800 rounded-md flex justify-center items-center">
        <iframe
          src="https://bryan-bryan.github.io/juego/?fbclid=IwY2xjawGnpftleHRuA2FlbQIxMQABHcUtgPAEhGXHQKABe-LU60Z9IkmE0ieim2DrwkG5OGY9Ee5Jd2owP48OpQ_aem_lNK-xDK31t_TowhL2ysmiw"
          width="100%"
          height="100%"
          style={{
            border: "none",
            borderRadius: "8px", // Para que tenga bordes redondeados como el contenedor
          }}
          title="Cybersecurity Game"
        ></iframe>
      </div>
    </div>
  );
};

export default EmbeddedGame;
