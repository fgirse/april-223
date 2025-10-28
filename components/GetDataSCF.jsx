"use client";

import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { data } from "autoprefixer";
import Image from "next/image";
import { defaultOrder } from "ol/renderer/vector";

const GetSCF = () => {
  const [tabelleBL, setTabelleBL] = useState([]);
  const [dataSCF, setDataSCF] = useState([]);

  const Token = "41c4813ea4f746fbbdd2bdb9c5250aa4";
  const Url = "https://api.football-data.org/v2/competitions/2002/standings?";
  const url2 = (Url, { headers: { "X-Auth-Token": Token } });
  const url3 = "https://api.randomuser.me/";
  const url4 =
    "https://api.football-data.org/v2/competitions/2002/standings?X-Auth-Token=41c4813ea4f746fbbdd2bdb9c5250aa4";

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios(Url, { headers: { "X-Auth-Token": Token } });
    setTabelleBL(response.data.standings[0].table);
    console.log(data);
  };
  const Emblem = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === "SC Freiburg")
    .map((data) => data.team.crestUrl);

  const Rang = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === "SC Freiburg")
    .map((data) => data.position);
  const Spieltag = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === "SC Freiburg")
    .map((data) => data.playedGames);
  const ToreErzielt = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === "SC Freiburg")
    .map((data) => data.goalsFor);
  const ToreErhalten = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === "SC Freiburg")
    .map((data) => data.goalsAgainst);
  const Siege = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === "SC Freiburg")
    .map((data) => data.won);
  const Niederlagen = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === "SC Freiburg")
    .map((data) => data.lost);
  const Remis = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === "SC Freiburg")
    .map((data) => data.draw);
  const Punkte = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === "SC Freiburg")
    .map((data) => data.points);
  return (
    <>
      <div className="w-full min-h-screen bg-red-700/30 rounded-2xl flex flex-col items-center">
        <div className="flex flex-row items-center justify-center gap-x-9 ">
          <h1 className="px-12 py-12 text-center text-white text-4xl md:text-6xl lg:text-7xl">
            SC Freiburg
          </h1>
          <img src={Emblem} height="166" width="133" alt="Emblem" />
        </div>
        <p className="bg-citrogreen border-8 border-yellow-400  rounded-2xl p-3 text-3xl text-center text-white md:4xl lg:text-[3.00rem]">
          {Spieltag}. Spieltag
        </p>
        <p id="rang" className="mt-[3vh] h-24 w-48 text-white text-3xl">
          {" "}
          Rang: <span className="text-3xl text-amber-200">{Rang}</span>
        </p>

        <p id="punkte" className=" text-center h-24 w-48 text-white text-3xl">
          Punkte:
          <span className=" h-24 w-48 text-amber-200 text-3xl">{Punkte}</span>
        </p>
        <p id="torverhältnis" className="h-24 w-48 text-white text-3xl">
          Torverhältnis:{" "}
          <span className="text-3xl text-amber-200">
            {ToreErzielt} : {ToreErhalten}
          </span>
        </p>

        <p id="gewonnen" className="h-24 w-48 text-white text-3xl">
          Siege: <span className="text-3xl text-amber-200">{Siege}</span>
        </p>

        <p id="verloren" className="h-24 w-48 text-white text-3xl">
          Niederlagen
          <span className="text-3xl text-amber-200">{Niederlagen}</span>
        </p>

        <p id="remis" className="h-24 w-48 text-white text-3xl">
          Unentschieden:<span className="ml-1 text-amber-200">{Remis}</span>
        </p>
      </div>
    </>
  );
};

export default GetSCF;
