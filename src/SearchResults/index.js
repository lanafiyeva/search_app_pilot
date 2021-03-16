import React from "react";
import { Row, Col, Divider } from "antd";
import "../App.css";
import axios from "axios";
import { useQuery } from "react-query";
import { useLocation } from "react-router";

const fetcher = async ({ queryKey }) => {
  const { data } = await axios.get(queryKey[0]);
  return data;
};

const SearchResults = () => {
  let location = useLocation();

  const url = "/searchapp/search_query_json" + location.search;
  const { status, data, error } = useQuery(url, fetcher, {
    refetchInterval: false,
  });

  if (!data) {
    return null;
  }

  return data.response.map((item, index) => (
    <Row className="search-results-container" key={index}>
      <Row className="title">{item.title}</Row>
      <Row className="description">{item.description}</Row>
      <Row className="domain">
        <a href={item.domain_url}>{item.domain}</a>
      </Row>
    </Row>
  ));
};

export default SearchResults;
