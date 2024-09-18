import React from "react";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  id = "",
}) => {
  return (
    <section id={id} className={`py-28 px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
