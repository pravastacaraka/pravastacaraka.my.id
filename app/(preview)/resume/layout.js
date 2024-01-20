/** @type {import("next").Metadata} */
export const metadata = {
  title: "My Resume",
  description: `Get to know more about my experiences.`,
};

function ResumeLayout({ children }) {
  return <div>{children}</div>;
}

export default ResumeLayout;
