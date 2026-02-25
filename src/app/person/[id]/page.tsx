"use client";

import React, { use } from "react";

interface IPersonIDPage {
  params: Promise<{
    id: string | number;
  }>;
}

const PersonIDPage = ({ params }: IPersonIDPage) => {
  const { id } = use(params);

  return <div></div>;
};

export default PersonIDPage;
