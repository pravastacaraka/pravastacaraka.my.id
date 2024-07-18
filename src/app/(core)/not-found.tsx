import { Link } from "ui/common/components/links/Link/Link";
import { Center, Heading } from "ui/common/providers/theme.provider";

export default function NotFound() {
  return (
    <Center
      as="section"
      textAlign="center"
      flexDir="column"
      minH={{
        base: "calc(100vh - var(--chakra-space-32) - 232px)",
        md: "calc(100vh - var(--chakra-space-32) - 200px)",
      }}
    >
      <Heading as="h1" size="xl" maxW="lg">
        The page you&apos;re looking for can&apos;t be found.
      </Heading>
      <Link href="/" mt={10}>
        Back to home
      </Link>
    </Center>
  );
}
