import { Link } from "ui/common/components/links/Link/Link";
import { Center, Heading } from "ui/common/providers/theme.provider";

function NotFound() {
  return (
    <Center as="main" textAlign="center" flexDir="column" height="100vh">
      <Heading as="h1" size="xl" maxWidth="lg">
        The page you&apos;re looking for can&apos;t be found.
      </Heading>
      <Link href="/" mt={10}>
        Back to home
      </Link>
    </Center>
  );
}

export default NotFound;
