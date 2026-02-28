"use client";

import React, { use } from "react";

import PersonPage from "./../../../widgets/PersonPage/PersonPage";

interface IPersonIDPage {
  params: Promise<{
    id: string | number;
  }>;
}

const PersonIDPage = ({ params }: IPersonIDPage) => {
  const { id } = use(params);

  return (
    <div className="mt-22 pb-11">
      <PersonPage id={id} />
    </div>
  );
};

export default PersonIDPage;
