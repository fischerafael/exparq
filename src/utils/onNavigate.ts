import Router from "next/router";

export const onNavigate = (url: string) => {
  Router.push(url);
};
