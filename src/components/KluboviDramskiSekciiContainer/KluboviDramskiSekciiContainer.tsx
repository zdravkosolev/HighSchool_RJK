import React, { useState } from "react";
import Banner from "../Global/Banner";
import data from "../../data.json";
import FilterBtn from "../Staff/FilterBtn";
import {KluboviCard} from "../Cards/KluboviSekciiCard/KluboviCard";
import Image from "next/image";


const KluboviDramskiSekciiContainer = () => {
  const [activeFilter, setActiveFilter] = useState("Прикажи ги сите");
  const clubs = data.klubovisekcii.map((club) => club.section);

  
  const uniqueClubTypes = ["Прикажи ги сите", ...clubs.filter((value, index, self) => self.indexOf(value) === index)];

  const [visibleClubs, setVisibleClubs] = useState(6); 
  const [loadedMore, setLoadedMore] = useState(6); 

  function handleFilter(klub: any) {
    setActiveFilter(klub);
    setVisibleClubs(6);
  }

  const filteredClubs = activeFilter === "Прикажи ги сите"
    ? data.klubovisekcii
    : data.klubovisekcii.filter((club) => club.section === activeFilter);

  const loadMoreClubs = () => {
    setVisibleClubs((prevVisibleClubs) => prevVisibleClubs + loadedMore);
  };

  

  return (
    <>
      <div>
        <Banner
          title="Активности"
          subtitle="Клубови и драмски секции"
          image="kluboviDramskiSekcii.jpg"
        />
      </div>
      <div className="w-4/5 mx-auto mt-10">
        <div>
          <div className="w-5/5 mx-auto text-center">
            {uniqueClubTypes.map((uniqueclub) => (
              <FilterBtn
                key={uniqueclub}
                title={uniqueclub}
                activeFilter={activeFilter}
                handleFilter={handleFilter}
              />
            ))}
          </div>
        </div>
        <div className="my-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredClubs.slice(0, visibleClubs).map((club) => ( 
              <KluboviCard
                key={club.id}
                data={{ 
                  id: club.id,
                  title: club.title,
                  image: club.image,
                  description: club.description,
                  date: club.date,
                  section: club.section,
                }}
              />
            ))}
            
          </div>
          {visibleClubs < filteredClubs.length && (
            <div className=" flex justify-end text-center mt-4">
              <button
              
                className="  py-2 px-4 text-red-700 rounded"
                onClick={loadMoreClubs}
              >
                Прикажи повеќе
              </button>
            </div>
          )}
         
        </div>
      </div>
    </>
  );
};

export default KluboviDramskiSekciiContainer;
