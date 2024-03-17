import React from "react";

export default function Profile({ className, client }) {
  return (
    <main
      className={"rounded-full w-[32px] h-[32px] overflow-hidden " + className}
    >
      <img
        src={client.img}
        alt={client.name}
        className="w-full h-full object-cover"
      />
    </main>
  );
}
