import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ErrorBoundary from "../ErrorBoundary";

const Fallback = () => {
  const fallbackData = {
    test: "test",
  };
  return <Content data={fallbackData} />;
};

const Content = ({ data }) => {
  return <>{data.test}</>;
};

export default function Home({ data }) {
  try {
    return (
      <ErrorBoundary fallback={<Fallback />}>
        <Content data={data} />
      </ErrorBoundary>
    );
  } catch (err) {
    return <Fallback />;
  }
}

export const getServerSideProps = () => {
  // assume this is loaded remotely
  // we want to fallback to static content within the app
  // if something goes wrong with rendering
  return { props: { data: null } };
};
