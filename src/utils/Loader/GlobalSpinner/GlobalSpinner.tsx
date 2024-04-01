import { Loader2 } from "lucide-react";

export function GlobalSpinner() {
  return (
    // 背景色を透明なグレーにして、ローディングアイコンを中央に配置する
    <div className="w-full h-full flex justify-center items-center bg-gray-200 bg-opacity-50 fixed top-0 left-0 z-50">
      <Loader2 className="h-28 w-28 animate-spin" />
    </div>
  );
}