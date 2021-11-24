import classNames from "classnames";
import { useRouter } from "next/router";
import { TabButton } from "../../atoms/TabButton";

const paths = ["date", "settings"];

export const Navigation = () => {
  const router = useRouter();

  return (
    <nav>
      <ul className={classNames("flex")}>
        {paths.map((path) => (
          <li key={path} className={classNames("flex", "w-[120px]", "h-[35px]")}>
            <TabButton path={path} isActive={router.pathname === `/${path}`} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
