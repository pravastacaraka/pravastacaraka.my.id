"use client";

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function useGetAbout() {
  const res = useSWR("/api/about", fetcher, { refreshInterval: 600000 });
  return {
    about: res.data,
    aboutError: res.error,
    aboutLoading: res.isLoading,
  };
}

function useGetKnowledge() {
  const res = useSWR("/api/knowledge", fetcher, { refreshInterval: 600000 });
  return {
    knowledge: res.data,
    knowledgeError: res.error,
    knowledgeLoading: res.isLoading,
  };
}

function useGetProjects() {
  return useSWR("/api/projects", fetcher, { refreshInterval: 600000 });
}

function useGetAwards() {
  const res = useSWR("/api/awards", fetcher, { refreshInterval: 600000 });
  return {
    awards: res.data,
    awardsError: res.error,
    awardsLoading: res.isLoading,
  };
}

function useGetLicenses() {
  const res = useSWR("/api/licenses", fetcher, { refreshInterval: 600000 });
  return {
    licenses: res.data,
    licensesError: res.error,
    licensesLoading: res.isLoading,
  };
}

export { useGetAbout, useGetKnowledge, useGetProjects, useGetAwards, useGetLicenses };
