import React from "react";
import ButtonForm from "./ButtonForm";
import Field from "./Field";
import FieldFull from "./FieldFull";
import ObbjKontak from "./ObbjKontak";
import Textarea from "./Textarea";

const SectionKontak = () => {
  return (
    <div className="flex  place-content-center mt-[180px] ">
      <section className="bg-[#F7F7FB] w-[935px] p-[50px] " id="contact">
        <div className="flex ">
          <div className="w-5/12 ">
            <div>
              <p className="text-[24px] font-semibold font-sans">Contact</p>
              <p className="text-[18px] font-sans text-[#808080] mb-[40px]">
                Beberapa cara menghubungi saya.
              </p>
              <div className="space-y-8">
                <ObbjKontak
                  image={require("../images/mail.png")}
                  kontak={"Mail"}
                  value={"ryuda1014@gmail.com"}
                />

                <ObbjKontak
                  image={require("../images/telp.png")}
                  kontak={"Telp"}
                  value={"0858 - 3085 - 2133"}
                />
                <ObbjKontak
                  image={require("../images/twiit.png")}
                  kontak={"Twiiter"}
                  value={"yudasan_"}
                />
              </div>
            </div>
          </div>
          <div className="w-1/12 border-r-[3px] "></div>
          <div className="w-1/12 "></div>

          <div className=" w-5/12 ">
            <div className=" flex justify-between mb-[35px]">
              <Field label={"Name :"} name={"name"} />
              <Field label={"E-mail :"} name={"email"} />
            </div>
            <div className="mb-[35px]">
              <FieldFull label={"Subject"} name={"subject"} />
            </div>
            <div className="mb-[35px]">
              <Textarea name={"mesage"} label={"Pesan :"} />
            </div>
            <div className="flex justify-end">
              <ButtonForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionKontak;
