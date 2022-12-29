import DefaultTags from "@app-components/head/default-tags";

function BlogHead() {
  return (
    <>
      <title>Blog - Pravasta Caraka</title>
      <meta
        name="description"
        content="Sometimes I write about web development, other times about random interesting stuff."
      />
      <DefaultTags />
    </>
  );
}

export default BlogHead;
