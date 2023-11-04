import { FC, ReactNode } from "react";
import styles from "./Loader.module.scss";

interface LoaderProps {
  children: ReactNode;
  isLoading: boolean;
}

const Loader: FC<LoaderProps> = ({ children, isLoading }) => {
  if (!isLoading) {
    return  <>{children}</>;
  }

  return <div className={styles.loader}><h1>Loading......</h1></div>;
};

export default Loader;
