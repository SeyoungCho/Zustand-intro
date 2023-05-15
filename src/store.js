import { create } from "zustand";

//store: 전역 상태를 가지고 있는 저장소함수, 전역 상태들과 셀렉터 함수들을 프로퍼티로 가진 객체를 리턴한다.
const store = (set) => ({
  // set: 전역 상태를 변경해주는 setter함수
  tasks: [
    {
      title: "TestTask",
      state: "PLANNED",
    },
  ],
});

/**
 * create:
 * set함수를 인자로 가지며 전역 상태 저장소 객체를 리턴하는 함수를 인자로 받아
 * zustand 스토어를 만들어 그 클로저를 리턴하는 함수
 */

export const useStore = create(store);
