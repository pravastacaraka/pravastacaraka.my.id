import { Suspense } from "react";
import Knowledge from "./components/Knowledge";
import { AboutLoading, KnowledgeLoading } from "./components/Loading";
import About from "./components/About";

function Page() {
  return (
    <>
      <Suspense fallback={<AboutLoading />}>
        <About />
      </Suspense>

      <Suspense fallback={<KnowledgeLoading />}>
        <Knowledge />
      </Suspense>

      {/* <AboutLoading />
      <KnowledgeLoading /> */}
    </>
  );
}

export default Page;
