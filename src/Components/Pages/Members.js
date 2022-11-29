import React, { useEffect, useState } from "react";
import blank from "..//Images//blank-profile-picture-973460__480.webp";
import { BsFacebook } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Members = () => {
  const [members, setMembers] = useState();
  useEffect(() => {
    fetch("https://smart-field.onrender.com/members")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <div className="lg:px-36 px-0">
      <div className="mb-24  mt-2">
        <h1 className="border-b-2  m-auto text-4xl text-orange-400 text-center hover:border-pink-400 w-64 ease-in duration-300 ">
          {" "}
          Meet Our Team
        </h1>
        <h1 className="text-xl text-gray-400 text-center ">
          The talented people behind the scenes
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        {members?.map((member) => (
          <>
            <a class="group relative block bg-black  " data-aos="zoom-in-left">
              {member?.image ? (
                <img
                  src={member?.image}
                  class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />
              ) : (
                <img
                  src={blank}
                  class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />
              )}

              <div class="relative p-8">
                <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                  {member?.designation}
                </p>

                <p class="text-2xl font-bold text-white">{member?.name}</p>

                <div class="mt-64">
                  <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p class="text-sm text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Omnis perferendis hic asperiores quibusdam quidem
                      voluptates doloremque reiciendis nostrum harum.
                      Repudiandae?
                    </p>
                  </div>
                </div>
                <div className="flex justify-center pt-2 space-x-4 align-center">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={member?.facebook}
                    aria-label="GitHub"
                    className="p-2 rounded-md text-gray-100 hover:text-[#297BE5]"
                  >
                    <BsFacebook />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href={`mailto:${member?.email}`}
                    aria-label="Dribble"
                    className="p-2 rounded-md text-gray-100 hover:text-[#34A853]"
                  >
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                    </svg>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href={`tel:${member?.phone}`}
                    aria-label="Twitter"
                    className="p-2 rounded-md text-gray-100 hover:text-pink-500"
                  >
                    <BsTelephoneFill />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href={member?.linkedin}
                    aria-label="LinkedIn"
                    target={"_blank"}
                    className="p-2 rounded-md text-gray-100 hover:text-[#539DED]"
                  >
                    <BsLinkedin />
                  </a>

                  <a
                    rel="noopener noreferrer"
                    href={member?.twitter}
                    aria-label="LinkedIn"
                    target={"_blank"}
                    className="p-2 rounded-md text-gray-100 hover:text-[#1A8CD8]"
                  >
                    <BsTwitter />
                  </a>
                </div>
              </div>
            </a>
          </>
        ))}
      </div>
    </div>
  );
};

export default Members;
