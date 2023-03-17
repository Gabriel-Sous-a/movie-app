import React from "react";
import { SearchInput } from "./style";

export default function SearchBar({ handler }) {
  return <SearchInput type="text" placeholder="Search" onChange={handler} />;
}
