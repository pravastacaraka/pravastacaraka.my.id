import { Box } from "ui/common/providers/theme.provider";

function Page() {
  return (
    <Box
      as="iframe"
      width="full"
      height="100vh"
      src="https://drive.google.com/file/d/1LzMd4Sq3Rg5Em3rZVmNWgHG8Nrw8_wBO/preview"
    />
  );
}

export default Page;
