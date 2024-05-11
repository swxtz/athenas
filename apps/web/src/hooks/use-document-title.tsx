import { useEffect } from "react";

export function useDocumentTitle(title: string) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `invite.me | ${title}`;

    return () => {
      document.title = prevTitle;
    };
  });
}
