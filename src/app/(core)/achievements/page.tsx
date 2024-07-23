import { getAwards } from "domain/Award/useCases/getAwards";
import { getCertifications } from "domain/Certification/useCases/getCertifications";
import { Heading, Stack } from "ui/common/providers/theme.provider";
import Awards from "./components/Awards";
import Certifications from "./components/Certifications";

async function Page() {
  const [awards, certifications] = await Promise.all([getAwards(), getCertifications()]);
  return (
    <>
      <Stack spacing={4}>
        <Heading size="lg" fontWeight="semibold">
          Awards and Funding
        </Heading>
        <Awards data={awards} />
      </Stack>

      <Stack spacing={4}>
        <Heading size="lg" fontWeight="semibold">
          Licenses and Certifications
        </Heading>
        <Certifications data={certifications} />
      </Stack>
    </>
  );
}

export default Page;
