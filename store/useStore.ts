import { create } from "zustand";

type State = {
  // 상태 정의
  count: number;
};

type Actions = {
  // 액션 정의
  increment: () => void;
  decrement: () => void;
};

// 상태와 액션을 포함하는 스토어 생성
export const useStore = create<State & Actions>((set) => ({
  // 초기 상태
  count: 0,

  // 액션
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
