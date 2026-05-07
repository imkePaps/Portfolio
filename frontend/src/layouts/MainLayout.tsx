import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <div>
      <nav>
        <h2>My App</h2>
      </nav>

      <main>{children}</main>
    </div>
  );
}

export default MainLayout;