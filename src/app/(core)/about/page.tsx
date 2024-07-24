import { Suspense } from "react";
import About from "./components/About";
import Knowledge from "./components/Knowledge";
import { AboutLoading, KnowledgeLoading } from "./components/Loading";

function Page() {
  return (
    <>
      <Suspense fallback={<AboutLoading />}>
        <About />
      </Suspense>

      <Suspense fallback={<KnowledgeLoading />}>
        <Knowledge />
      </Suspense>
    </>
  );
}

export default Page;
