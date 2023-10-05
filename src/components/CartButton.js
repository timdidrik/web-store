'use client';

import React from "react";

export default function CartButton({text, onClick}) {
    return <button className="button" onClick={onClick}>{text}</button>
  };


