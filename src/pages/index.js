import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";


const Home = () => {
  useEffect(() => {
    setCities((cities) => [...cities, localStorage.getItem("cities")]);
  }, []);
  const [city, setCity] = useState("");

  const [cities, setCities] = useState([]);
  const [data, setData] = useState(null);
  const onSubmit = async () => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=c6d0a2598a833c465f90853cbcfc28ec`
    ).then(async (res) => {
      const guh = await res.json();
      console.log(guh);
      res.json()
    }).then((data) => {
      console.log(data)
    });
    }
  return (
    <div>
      <div className=""></div>
      <div className="grid grid-col-10">
        fewefwefewfewf
        <div className="col-span-3">
          <input
            className=""
            type="text"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <button type="button" className="w-20 h-12" onClick={() => onSubmit()}>submit</button>
          {cities.length === 0 ? (
            <>
              {cities.map((city) => {
                <div className="">{JSON.stringify(city)}</div>;
              })}
            </>
          ) : (
            <>
            <>uefheiuwfueiwfhuiwef</>
            <h1 className="text-2xl text-gray-700">
              no results
            </h1>
            </>
          )}
        </div>
        <div className="col-span-7">
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Home;