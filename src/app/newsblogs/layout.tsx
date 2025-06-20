import SubpageHeader from "@/components/subpageComponents/subpageHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SubpageHeader Page={"News & Blogs"} />
      {children}
    </div>
  );
}
