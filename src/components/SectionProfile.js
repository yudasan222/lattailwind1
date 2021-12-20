import React from "react";
import profile from "../images/prof.png";
import SectionTitle from "./SectionTitle";
import SubSec from "./SubSec";

const SectionProfile = () => {
  return (
    <>
      <secttion id="profile">
        <div className="container mx-auto">
          <SectionTitle className={"mt-[132px]"}>Profile</SectionTitle>
          <SubSec>Mengenal saya secara singkat.</SubSec>

          <div className="flex w-8/12 place-content-center mx-auto mt-[54px] ">
            <div className="w-[289px] h-[417px] p-[22px] ">
              <img src={profile} />
            </div>

            <div className="w-[453px] text-justify ml-[40px] ">
              <p>
                Aliquam blandit leo lorem, nec vehicula mi accumsan posuere.
                Duis condimentum ornare ante a posuere. Aliquam sem magna,
                sodales quis congue vel, congue nec nisi. Aenean nec lorem et
                dolor aliquet ullamcorper eu at sapien. Sed pretium mauris dui.
                Phasellus mollis accumsan tempus. Proin laoreet hendrerit
                ligula, id lacinia eros. Aenean consequat, felis eu malesuada
                lobortis, augue nisl faucibus ligula, id viverra mi erat at
                nisl. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Maecenas ac aliquet eros.
              </p>
              <p className="mt-[30px] ">
                Aliquam a fringilla metus. Fusce ut tortor ut sem sagittis
                convallis. Morbi et augue sed nisl fermentum dictum eget ut
                nisl. Mauris ut dolor posuere augue porta lobortis nec sed
                lacus. Curabitur dignissim ac lorem in tempor. Morbi id dui quis
                ex malesuada mattis. Suspendisse potenti. Nulla euismod diam ut
                risus mollis, id vehicula nulla dictum.
              </p>
            </div>
          </div>
        </div>
      </secttion>
    </>
  );
};

export default SectionProfile;
