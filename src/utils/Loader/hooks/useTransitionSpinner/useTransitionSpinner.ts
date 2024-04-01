import { useEffect, useTransition } from "react";
import { useGlobalSpinner } from "../../components/GlobalSpinner/useGlobalSpinner";

export function useTransitionSpinner() {
  const [isPending, startTransition] = useTransition();
  const { startLoading, stopLoading } = useGlobalSpinner();

  useEffect(() => {
    isPending ? startLoading() : stopLoading();
  }, [isPending, startLoading, stopLoading]);

  const startTransitionSpinner = (actionObjects: { action: (...args: any[]) => Promise<void>, args: any[] }[]) => {
    startTransition(() => {
      actionObjects.forEach(async ({ action, args }) => {
        await action(...args);
      });
    });
  }

  return {
    startTransitionSpinner,
  }
}
