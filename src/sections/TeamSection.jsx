import React from "react";
import PersonCard from "../components/PersonCard";
const teams = [
  {
    imgUrl:
      "https://static.wixstatic.com/media/9130bd_7301ea97f00841e2852eacedd6e12dfd~mv2.jpg/v1/fill/w_284,h_371,al_c,lg_1,q_80,enc_auto/unnamed.jpg",
    job: "Co-Founder",
    name: ` Khaled Hafez`,
  },
  {
    imgUrl:
      "https://static.wixstatic.com/media/9130bd_7301ea97f00841e2852eacedd6e12dfd~mv2.jpg/v1/fill/w_284,h_371,al_c,lg_1,q_80,enc_auto/unnamed.jpg",
    job: "Co-Founder",
    name: ` Khaled Hafez`,
  },
  {
    imgUrl:
      "https://static.wixstatic.com/media/9130bd_7301ea97f00841e2852eacedd6e12dfd~mv2.jpg/v1/fill/w_284,h_371,al_c,lg_1,q_80,enc_auto/unnamed.jpg",
    job: "Co-Founder",
    name: ` Khaled Hafez`,
  },
  {
    imgUrl:
      "https://static.wixstatic.com/media/9130bd_7301ea97f00841e2852eacedd6e12dfd~mv2.jpg/v1/fill/w_284,h_371,al_c,lg_1,q_80,enc_auto/unnamed.jpg",
    job: "Co-Founder",
    name: ` Khaled Hafez`,
  },
];
const TeamSection = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h1 className="mx-auto text-3xl font-bold p-5 w-fit">Meet the Team</h1>
        <div className="grid  place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-28">
          {teams.map((person, index) => {
            return <PersonCard {...person} key={index} index={index + 1} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
