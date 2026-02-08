import { create } from "zustand";
import { persist } from "zustand/middleware";

type Stages = {
  id: number;
  name: string;
};

const stages: Stages[] = [
  { id: 1, name: "animation" },
  { id: 2, name: "content" },
] as const;

type StageName = (typeof stages)[number]["name"];

interface PageState {
  pageStage: StageName;
  lastVisit: number | null;
  setPageStage: (stage: StageName) => void;
  contentPage: () => void;
  checkTimeout: () => void;
}

export const usePageStore = create<PageState>()(
  persist(
    (set, get) => ({
      pageStage: stages[0].name,
      lastVisit: null as number | null,
      setPageStage: (stage) =>
        set({
          pageStage: stage,
          lastVisit: stage === "content" ? Date.now() : get().lastVisit,
        }),
      contentPage: () =>
        set({
          pageStage: "content",
          lastVisit: Date.now(),
        }),
      checkTimeout: () => {
        const { lastVisit, pageStage } = get();

        if (pageStage === "content" && lastVisit) {
          const minutes = 15;
          const persistTime = minutes * 60 * 1000;
          const now = Date.now();

          if (now - lastVisit > persistTime) {
            set({ pageStage: "animation", lastVisit: null });
          }
        }
      },
    }),
    { name: "page-storage" },
  ),
);
